import Vue from 'vue';
import VueRouter from 'vue-router';
import JobDetail from '@/components/JobDetail.vue';
import JobList from '../components/JobList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'JobList',
    component: JobList,
  },
  {
    path: '/JobDetail/:id',
    name: 'JobDetail',
    component: JobDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
