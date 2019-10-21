import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from "vue-router";
// import HelloWorld from '@/components/HelloWorld'

const Home = () => import('../views/home/Home')
const Message = () => import('../views/message/Message')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

const routes = [
  {
    path: '',
      redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

