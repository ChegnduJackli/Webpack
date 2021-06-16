<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login"
      autocomplete="off">
      <label><input v-model="email"
          placeholder="email"
          v-focus></label>
      <br>
      <br>
      <label><input v-model="pass"
          placeholder="password"
          type="password"></label><br>
      <br>
      <button type="submit">login</button>
      <p v-if="error"
        class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
import auth from '../utils/auth'
export default {
  data () {
    return {
      email: 'jack.d.li@cn.pwc.com ',
      pass: 'summer@123!',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>