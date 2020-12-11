<template>
  <Container :options="{ width: 1680, height: 1050 }">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank"> Core Docs </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank"> Forum </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank"> Community Chat </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank"> Twitter </a>
        </li>
        <br />
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank"> Docs for This Template </a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank"> vue-router </a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank"> vuex </a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank"> 111111 </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"> awesome-vue {{ $store.state.msg }} </a>
        </li>
      </ul>
    </div>
  </Container>
</template>

<script>
import Container from './Container/Container.vue';
import HelloWorld2 from './HelloWorld2.vue';

export default {
  name: 'HelloWorld',
  components: {
    Container
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted() {
    // this.getlist()
    // this.getlogin();
  },
  methods: {
    getlogin() {
      this.form = {
                  username: 'admin',
                  password: '!QAZ2wsx3edc'
      };
      let that = this;
      //
      this.$api.DashboardApi.getArea(JSON.stringify(this.form))
      .then((res) => {
          console.log(res);
          if (res.token) {
            that.$cookies.set('token', res.token, new Date(res.expiresTime));
          }
        })
      .catch((e) => {
          console.log(e);
          this.$store.commit({
            type: 'getMsg',
            msg: '1111'
          });
          that.$router.push('/HelloWorld2');
        });
    },
    
    getlist() {
      let params = {
        page: 0,
        size: 10000,
        time: '',
        activeName: '',
        status: '',
        productName: ''
      };
      console.log('res');
      console.log(this.$api);
      this.$api.DashboardApi.getTableList(params)
        .then((res) => {
          this.$router.push('/HelloWorld2');
          this.$store.commit('getMsg', '1111');
          console.log(res);
        })
        .catch((error) => {});
    },
       getlistww() {
      let params = {
        page: 0,
        size: 10000,
        time: '',
        activeName: '',
        status: '',
        productName: ''
      };
                console.log('res');
                console.log(this.$api);
                 this.$api.DashboardApi.getTableList(params)
        .then((res) => {
  this.$router.push('/HelloWorld2');
  this.$store.commit('getMsg', '1111');
  console.log(res);
        })
        .catch((error) => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 300px;
  height: 200px;
  margin-left: 200px;
  background: skyblue;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
