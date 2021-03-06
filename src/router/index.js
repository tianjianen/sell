import Vue from 'vue'
import Router from 'vue-router'
import Ratings  from "@/components/ratings/ratings"
import Seller from '@/components/seller/seller'
import Goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      redirect:'/goods'
    },
    {
    	path:'/goods',
    	name:'Goods',
    	component:Goods
    },
    {
    	path:'/ratings',
    	name: Ratings,
    	component: Ratings
    },
    {
    	path:'/seller',
    	name: Seller,
    	component: Seller
    }
  ]
})
