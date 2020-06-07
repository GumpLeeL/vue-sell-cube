// 做组件变成API调用的形式
import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
createAPI(Vue, HeaderDetail)