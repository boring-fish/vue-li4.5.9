<template>
  <Container :options="{ width: 1680, height: 1050 }">
    <div class="disvoard">
      <sideBar class="side"></sideBar>
      <router-view />
    </div>
  </Container>
</template>

<script>
// import _ from 'lodash';
import { Container, test, sideBar } from '@/components';

export default {
  name: 'index',
  props: ['options'],
  components: {
    Container,
    test,
    sideBar
  },
  data() {
    return {
      breadcrumbList: [
        {
          name: '导航一',
          path: '/'
        },
        {
          name: '选项一',
          path: '/'
        },
        {
          name: '选项子元素1',
          path: ''
        }
      ]
    };
  },

  mounted() {},
  methods: {}
};
</script>

<style>
#screen-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
.disvoard {
  display: flex;
}
</style>
