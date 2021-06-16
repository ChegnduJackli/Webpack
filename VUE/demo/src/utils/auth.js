import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'

const oktaAuth = {
    issuer: 'https://dev-17635463.okta.com/oauth2/default',
    clientId: '0oa10v2ekdkvQrHQW5d7',
    //redirectUri: window.location.origin + '/login/callback',
    //sso登录后callback
    redirectUri: 'https://localhost:8081/login/callback',
    scopes: ['openid', 'profile', 'email']
};


// const OktaAuth = require('@okta/okta-auth-js').OktaAuth
const authClient = new OktaAuth({ issuer: 'https://dev-17635463.okta.com/oauth2/default' })

export default {
    login (email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        console.log('auth login method', email, pass);
        return authClient.signInWithCredentials({
            username: email,
            password: pass
        }).then(transaction => {
            if (transaction.status === 'SUCCESS') {
                return authClient.token.getWithoutPrompt({
                    clientId: oktaAuth.clientId,
                    responseType: ['id_token', 'token'],
                    scopes: ['openid', 'email', 'profile'],
                    sessionToken: transaction.sessionToken,
                    redirectUri: oktaAuth.redirectUri
                }).then(response => {
                    console.log('response', response);
                    localStorage.token = response.tokens.accessToken.accessToken
                    localStorage.tokenType = response.tokens.accessToken.tokenType
                    localStorage.idToken = response.tokens.idToken.idToken
                    if (cb) cb(true)
                    this.onChange(true)
                })
            }
        }).catch(err => {
            console.error(err.message)
            if (cb) cb(false)
            this.onChange(false)
        })
    },

    getToken () {
        return localStorage.token
    },

    logout (cb) {
        delete localStorage.token
        delete localStorage.idToken
        if (cb) cb()
        this.onChange(false)
        return authClient.signOut()
    },

    loggedIn () {
        return !!localStorage.token
    },

    onChange () {
    }
}