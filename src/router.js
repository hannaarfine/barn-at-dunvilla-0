import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Venue from './components/Venue.vue'
import Events from './components/Events.vue'
import History from './components/History.vue'
import Contact from './components/Contact.vue'
import FAQ from './components/FAQ.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
          path: '/venue',
          name: 'venue',
          component: Venue
      },
      {
        path: '/events',
        name: 'events',
        component: Events
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/history',
        name: 'history',
        component: History
      },
      {
        path: '/FAQ',
        name: 'FAQ',
        component: FAQ
      }
      
    ]
  })