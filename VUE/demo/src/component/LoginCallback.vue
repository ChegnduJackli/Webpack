/*!
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
<template>
  <div>sso 登录后的 call back<br>
    {{error}}
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  name: 'LoginCallback',
  data () {
    return {
      error: '',
      authState2: this.$auth.getAccessToken(),
    };
  },
  async beforeMount () {
    // await this.$auth.handleLoginRedirect()

    try {
      //为了处理从 Okta 返回的重定向，您的应用程序需要读取从 Okta 返回的值并将它们交换为令牌。
      await this.$auth.handleLoginRedirect()
    } catch (e) {
      if (this.$auth.isInteractionRequiredError(e)) {
        const { onAuthResume, onAuthRequired } = this.$auth.options;
        const callbackFn = onAuthResume || onAuthRequired;
        if (callbackFn) {
          callbackFn(this.$auth);
          return;
        }
      }
      this.error = e.toString();
    }
  },
  render () { },

  async created () {
    // console.log('loginCallback created');
    //this.$nextTick(() => {
    // setTimeout(() => {
    //   console.log('this.authState xxxx', this.authState);
    //   let accessToken = this.authState.accessToken.accessToken;
    //   console.log('auth', this.$auth);
    //   let token = "Bearer " + accessToken;
    //   this.callAPi(token);
    // }, 500);


    //this.changeLogin({ Authorization: token });
  },
  methods: {
    // ...mapMutations([
    //   'changeLogin', // 将 `this.changeLogin()` 映射为 `this.$store.commit('changeLogin')`

    // ]),

    // callAPi (token) {

    //   console.log('callAPi token', token);
    // }

  },
}
</script>
