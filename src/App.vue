<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab-wrapper">
      <tab :tabs = 'tabs' :initialIndex = 0></tab>
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'
import Goods from 'components/goods/goods'
import Seller from 'components/seller/seller'
import Rating from 'components/rating/rating'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [
        { 
        label: '商品', 
        component: Goods, 
        data: {seller: this.seller} 
        },
        { 
        label: '评价', 
        component: Rating, 
        data: {seller: this.seller} 
        },
        { 
        label: '商家', 
        component: Seller, 
        data: {seller: this.seller} 
        }
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },

  components: {
    VHeader,
    Tab
  }

}
</script>

<style lang="stylus">
  #app
    .tab-wrapper
      position fixed
      top: 136px
      left 0
      right 0
      bottom 0
</style>
