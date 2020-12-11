<template>
  <div class="hello">
    <img :src="item.url" v-for="(item, index) in imagearr" :key="index" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imagearr: [
        {
          url: '@/assets/img/1.jpg'
        },
        {
          url: '@/assets/img/2.jpg'
        },
        {
          url: '@/assets/img/3.jpg'
        },
        {
          url: '@/assets/img/4.jpg'
        },
        {
          url: '@/assets/img/5.jpg'
        },
        {
          url: '@/assets/img/6.jpg'
        },
        {
          url: '@/assets/img/41.jpg'
        },
        {
          url: '@/assets/img/40.jpg'
        },
        {
          url: '@/assets/img/39.jpg'
        },
        {
          url: '@/assets/img/38.jpg'
        },
        {
          url: '@/assets/img/37.jpg'
        },
        {
          url: '@/assets/img/36.jpg'
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  width: 100%;
  /* height:100%; */
  background: #1e4974;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    width: 16%;
    height: 200px;
    margin-top: 15px;
  }
}
</style>
