import Vue from 'vue'
import VueRouter from 'vue-router'
import MetaBusinessHelpCenter from '../pages/MetaBusinessHelpCenter.vue';
import MetaInformation from '../pages/MetaInformation.vue';
import MetaConfirm from '../pages/MetaConfirm.vue';
import MetaWait from '../pages/MetaWait.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      beforeEnter() {
          window.location.href = 'https://console.lifecrot.com/'
      }
  },
  {
      path: '/meta-community-standard',
      name: 'Community Standard',
      component: () => import('../pages/MetaCommunityStandard.vue')
  },
  {
      path: '/business-help-center',
      name: 'Meta Business Help Center',
      component: MetaBusinessHelpCenter,
      meta: {
          canAccessNextPage: false
      }, // Thêm meta để chỉ ra rằng trang này có thể truy cập
  },
  {
      path: '/confirm',
      name: 'Meta Confirm',
      component: MetaConfirm,
      meta: {
          canAccessNextPage: false
      }, // Thêm meta để chỉ ra rằng trang này có thể truy cập
  },
  {
      path: '/wait',
      name: 'Meta Wait',
      component: MetaWait,
      meta: {
          canAccessNextPage: false
      }, // Thêm meta để chỉ ra rằng trang này có thể truy cập
  },
  // {
  //   path: '/account-restricted',
  //   name: 'Meta Account Restricted',
  //   component: MetaAccountRestricted
  // },
  {
      path: '/information',
      name: 'Meta Information',
      component: MetaInformation,
      meta: {
          canAccessNextPage: false
      }, // Thêm meta để chỉ ra rằng trang này có thể truy cập
  },
  {
      path: '*',
      redirect: "/"
  }
  ]
})

export default router
