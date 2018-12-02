<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import style from './style.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Events from './components/Events.vue'
import History from './components/History.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import FAQ from './components/FAQ.vue'
import Venue from './components/Venue.vue'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default {
  name: 'app',
  data() {
    return {
      firstName: '',
    }
  },
  methods: {
  }, 
  components: {
    Header, 
    Home,
    Footer,
    Venue,
    History,
    Contact,
    FAQ
  }
}
</script>

<style>
</style>
