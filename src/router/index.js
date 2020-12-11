import Vue from 'vue';
import Router from 'vue-router';
import { index } from '@/view';
import { test, formui } from '@/components';

import HelloWorld from '@/components/HelloWorld';
import HelloWorld2 from '@/components/HelloWorld2';
// 解决路由重复报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // redirect:'/index',
      component: index,
      children: [
        {
          path: '/HelloWorld2',
          name: 'HelloWorld2',
          component: HelloWorld2
        },
        {
          path: '/test',
          name: 'test',
          component: test
        },
        {
          path: '/formui',
          name: 'formui',
          component: formui
        },
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
});
