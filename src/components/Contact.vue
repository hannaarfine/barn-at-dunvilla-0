<script src="/path/to/masonry.pkgd.min.js"></script>
<template>
  <div>
    <Header />
     <div class="main" id="contact">
        <div class="half">
            <h1>Contact us! </h1>
            <div >
                <img src="../assets/map-pin.svg" id="pin"/><p id="address">48203 U.S. 59, Pelican Rapids, 56572</p>
            </div>
            <div class="row">
                <img src="../assets/phone.svg" id="phone"/><p id="phone">612.618.8134</p>
            </div>
            <div style="border-radius: 4px"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5476.479382079232!2d-96.02307803928852!3d46.66152870129511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c9ab53dafee79b%3A0x62f2c678f4038b46!2sThe+Barn+at+Dunvilla!5e0!3m2!1sen!2sus!4v1543689550010" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen></iframe></div>
        </div>
        <div class="half">
            <form action="mailto:ha264@cornell.edu" method="post" enctype="text/plain">
                <input type="text" placeholder="Your name" name="name"/>
                 <input type="text" placeholder="Your email" name="email"/>
                 <textarea placeholder="Type your message here" name="message"/>
                 <input type="submit" id="send" value="Send" > 
            </form>
        </div>
    </div>
    <Footer />
  </div>
</template>


<script>

import Header from './Header.vue'
import Footer from "./Footer.vue"

export default {
  name: 'Contact',
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
