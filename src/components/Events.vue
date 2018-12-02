<template>
  <div>
    <Header />
    <div class="parallax-events">
      <h1>Events</h1>
    </div>
    <div class="main" id="categories">
      <ul class="categories">
        <li v-for="cat in Categories" @click="chooseCat(cat.name, cat.desc)" v-bind:id="cat.name">{{cat.name}}</li>
      </ul>
      <p>{{description}}</p>
    </div>
    <div class="parallax-events2" />
    <Footer />
  </div>
</template>


<script>

import Header from './Header.vue'
import Footer from "./Footer.vue"

export default {
  name: 'Events',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      Categories : [
       {"name": "Weddings",
       "desc": "this is about weddings"
       }, 
        {"name":"Corporate",
        "desc":"this is about corporate"
        }, 
        {
          "name":  "Private", 
          "desc": "about private"
        },
       {
         "name": "Special",
         "desc": "about special events"
       }
       ],
       description: "this is about weddings"
    }
  },
  methods: {
    chooseCat(id, desc){
      this.Categories.forEach(function(c){
        $('#'+c.name).removeClass("active")
      })
      $('#' + id).addClass("active")
      this.description = desc;
    }
  },
  mounted(){
    $("#Weddings").addClass("active")
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
