import { Trans } from '@/plugins/translations'

export default [
  {
    path: '/:locale',
    component: () => import('@/views/LayoutView.vue'),
    beforeEnter: Trans.routeMiddleware,
    name: 'app',
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: 'Home',
        },
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)',
    redirect() {
      return Trans.defaultLocale
    },
  },
]
