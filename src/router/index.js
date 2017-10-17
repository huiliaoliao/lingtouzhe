import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Start = (resolve) => {
  import('view/start').then((module) => {
    resolve(module)
  })
}
const Product = (resolve) => {
  import('view/product').then((module) => {
    resolve(module)
  })
}
const Serve = (resolve) => {
  import('view/serve').then((module) => {
    resolve(module)
  })
}
const About = (resolve) => {
  import('view/about').then((module) => {
    resolve(module)
  })
}
const Download = (resolve) => {
  import('view/download').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Start'
    }, {
      path: '/Start',
      name: 'start',
      component: Start
    }, {
      path: '/Product',
      name: 'product',
      component: Product
    }, {
      path: '/Serve',
      name: 'serve',
      component: Serve
    }, {
      path: '/About',
      name: 'about',
      component: About
    }, {
      path: '/Download',
      name: 'download',
      component: Download
    }
  ]
})
