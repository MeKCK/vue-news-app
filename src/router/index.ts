import Vue from 'vue';
import VueRouter from 'vue-router';

import TopStories from '../views/TopStories.vue';
import DevelopingStories from '../views/DevelopingStories.vue';
import MyFavorites from '../views/MyFavorites.vue';
import Router from 'vue-router';

Vue.use(VueRouter);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: TopStories
    },
    {
      path: '/develop-stories',
      name: 'develop-stories',
      component: DevelopingStories
    },
    {
      path: '/my-favorites',
      name: 'my-favorites',
      component: MyFavorites
    }
  ]
});


