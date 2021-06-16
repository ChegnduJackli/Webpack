<template>
  <div class="page">
    <el-container class="page-container">
      <el-header>
        <ul>
          <li>
            <router-link to="/home"
              active-class="active">home</router-link>
            <router-link to="/computedDemo"
              active-class="active">计算属性</router-link>
            <router-link to="/lifeCircleDemo"
              active-class="active">生命周期</router-link>
            <router-link to="/todo"
              active-class="active">To Do List</router-link>
            <router-link to="/helloworld"
              active-class="active">组件基础</router-link>
            <router-link to="/elementUIDemo"
              active-class="active">element ui demo</router-link>
            <router-link to="/animation"
              active-class="active">动画 </router-link>
            <router-link to="/subRouter"
              active-class="active">子菜单 </router-link>
            <router-link to="/apiTest"
              active-class="active">后台API </router-link>

            <!-- v-if='authState.isAuthenticated' v-if='loggedIn' -->
            <button v-on:click='logout'
              id='logout-button'> Logout </button>
            <button v-on:click='login'
              id='login-button'> Login </button>

          </li>
        </ul>
        <hr />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>

      <footer class="info">
        <p v-if="activeUser"
          class="logout-link"><a @click="handleLogout"
            href="#">Logout</a></p>
        <p v-if="!activeUser"><a @click="login"
            href="#">login</a></p>

      </footer>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
@import "/asset/var.scss";
ul li {
  padding: 10px 0;
  list-style: none;
  a {
    text-decoration: none;
    padding: 10px;
    width: 100px;
    &:hover {
      @include a-hover;
    }
    &.active {
      @include a-active;
    }
  }
}
.page {
  height: 100%;
  .page-container {
    height: 100%;
  }
}
</style>

<script>

import auth from './utils/auth'

export default {
  name: "app",
  components: {},
  beforeCreate () { },
  async created () {
    console.log('authState', this.authState)
    console.log('$auth', this.$auth)
    console.log('loggedIn', this.loggedIn)
    await this.refreshActiveUser()

  },
  data () {
    return {
      activeUser: null,
      loggedIn: auth.loggedIn()
    };
  },
  watch: {
    '$route': 'refreshActiveUser'
  },

  methods: {
    async refreshActiveUser () {
      // this.activeUser = await this.$auth.getUser()
      // this.$log.debug('activeUser', this.activeUser)
    },

    async handleLogout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.go('/')
    },

    async login () {
      await this.$auth.signInWithRedirect()
      // await auth.login();
      // this.$router.go('/')
    },
    async logout () {
      //this.$router.go('/logout')
      await this.$auth.signOut()
      //await auth.logout();
      //this.activeUser = await this.$auth.getUser()
      //this.$log.debug('activeUser', this.activeUser)
    }
  }
};
</script>
<style></style>