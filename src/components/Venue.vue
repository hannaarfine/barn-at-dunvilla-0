<script src="/path/to/masonry.pkgd.min.js"></script>
<template>
  <div>
    <Header />
    <div class="main" id="venue-main">
    <h1>Our property </h1>
    <p>The Barn at Dunvilla is a unique country destination perfect for weddings, reunions, parties, conferences and special events.
      <br />
      <br />
    From the warm stone fireplace, to the expansive upstairs barn loft, the charm of The Barn will leave you and your guests with a memory that will last a lifetime. With space to accommodate over 250 people, separate areas for dining, dancing, outdoor patio featuring breathtaking views of Lake Lizzie and the surrounding farmland, The Barn provides the ideal four-season setting for any occasion.
    </p>

    <div class="areas">
    <div v-for="area in Areas" class="half-panel">
      <img v-bind:src="area.src"  />
      <h1>{{area.name}}</h1>
      <p>{{area.desc}}</p>
    </div>
    </div>

   
    </div>
    <Footer style="margin-top: -18%;"/>
  </div>
</template>


<script>

import Header from './Header.vue'
import loft from "../assets/home/Barn0.jpg"
import lawn from "../assets/main-3-2.jpg"
import bridal from "../assets/main-3-3.jpg"
import fireplace from "../assets/fireplace.png"
import patio from "../assets/barn-patio.jpg"
import more from "../assets/more.jpg"
import Footer from "./Footer.vue"

export default {
  name: 'Venue',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      Areas: [
        {"name": "the loft",
        "desc": "The 100 foot long barn loft is the signature feature of the property.",
        "src": loft
        },
        
        {
          "name": "bridal suite",
          "desc": "From beautiful bridal suite to cozy fireplace lounge, every corner enchants.",
          "src": bridal
        },
        {
          "name": "the lawn", 
          "desc": "Head outside to the rolling hills with an expansive view and stunning sunsets.",
          "src": lawn
        },
        {
          "name": "explore more", 
          "desc": "Check out our gallery to see more of our beautiful spaces!", 
          "src": more
        },
        {
          "name": "fireplace lounge",
          "desc": "The large stone fireplace lounge has a cozy sitting area and bar, as well as room for 75-100 guests.",
          "src": fireplace
        },
        {
          "name": "north patio", 
          "desc": "French doors lead from the lower level dining area to the outdoor patio.",
          "src": patio
        },
        
      ]
    }
  },
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
