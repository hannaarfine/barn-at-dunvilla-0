<template>
  <div>
    <Header />
    <div class="parallax-history">
      <h1>History</h1>
    </div>
    <div class="main" id="history">
     <p>
       In the late 1800s, Wilson E. Dunn purchased 160 acres and more than 2,500 feet of shoreline on Lake Lizzie from a homesteader for a mere forty-five dollars. At the turn of the century, he and his son, Roy, began to pursue their dream.  Tourists had recently discovered the lake region, popular for its abundance of fishing, hunting, and beautiful water features. They arrived in droves from throughout the midwest, camping along the shoreline, or even renting space in area haylofts.  The Dunns decided to build on the growing popularity of the region.  Their first cabin was built in 1908, with more to follow, eventually including two dozen cabins stretched along the Lake Lizzie shoreline.  The resort included docks, pavilions, and boats. The large main lodge was built in 1929.
       <br /><br />
      A 1930 brochure described Dunn’s attractions. "… a modern Summer hotel… the finest and best to be found… drinking water from a well recognized as the best in the state… fishing as good as to be found anywhere in the state… good bathing beach with sand bottom… fresh produce from our own farm every day." A concluding banner proudly proclaimed, "There Are No Dull Days At Dunn’s!"
      <br /><br />
      Roy Dunn eventually took a job in government in 1912, as Lake Lizzie postmaster. His interest in public office grew, and he was elected to the Minnesota House of Representatives in 1924, a position he held for 20 years.  Dunn retired in 1966, to devote his full attention to the running of Dunn Lodge. He sold the resort in 1974 to Robert Rife. Rife's plan to turn the complex into condominiums fell short, and he deeded the property to the local bank.  The bank leased out the property to various restauranteurs throughout the years, with varying success.  
      <br /><br />
      Finally, in 1989 Robert Berquist, the president of Pelican Valley State Bank, bought out the bank's interest. He razed the antiquated cabins, and the first of the condominium units was sold in 1992. 
      </p>
    </div>
    <div class="parallax" />
    <Footer />
  </div>
</template>


<script>

import Header from './Header.vue'
import Footer from "./Footer.vue"

export default {
  name: 'History',
  components: {
    Header,
    Footer
  },
  data(){
    return {
    }
  },
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
