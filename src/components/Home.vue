<template>
  <div>
    <Header />
    <div class="home-slide-container">
        
        <slick ref="slick" :options="slickOptions">
          <a v-for="image in MainImages" ><img :src="image" /></a>
        </slick>
    </div>

    <div class="main">
        <h1>Welcome to <br /> The Barn at Dunvilla! </h1>
        <div class="divider" />
        <h2>Together is a beautiful place to be. </h2>

        <div class="main-images-three">
            <a class="third-panel">
            <div >
                <img src="../assets/main-3-1.jpg" />
                <p>The 100 foot long barn loft is the signature feature of the property.</p>
                <h3>The Loft </h3>
            </div>
            </a>
            <div class="third-panel">
                <img src="../assets/main-3-2.jpg" />
                <p>Head outside to the rolling hills with an expansive view and stunning sunsets. </p>
                <h3>The Lawn </h3>
            </div>
            <div class="third-panel">
                <img src="../assets/main-3-3.jpg" />
                <p>From beautiful bridal suite to cozy fireplace lounge, every corner enchants. </p>
                <h3>Bridal Suite </h3>
            </div>
        </div>
    </div>

    <div class="parallax"></div>

    <div class="main" id="about">
        <h4> About the Barn </h4>

        <h5>From the warm <a>stone fireplace </a>, to the expansive <a>upstairs barn loft</a>, the charm of The Barn will leave 
        you and your guests with a memory that will last a lifetime. With space to accommodate over 250 people, separate areas for dining, dancing, <a>outdoor patio</a> featuring <a>breathtaking views</a> of Lake Lizzie and the surrounding farmland, The Barn provides the ideal four-season setting for any occasion.
        </h5>

        <div class="two-across">
            <div id="left"><img src="../assets/bridal-suite.jpg" id="dress"/></div>
            <div id="right"><img src="../assets/loft-table.jpg" id="table"/></div>
        </div>
        <div class="one-across">
            <img id="sparkler" src="../assets/barn-sparkler.jpg" />
        </div>

        <slick ref="slick" :options="slickOptions" id="quotes">
          <div v-for="quote in Quotes" >
              <img src="../assets/quote.svg" id="quote"/>
              <h1>{{quote.quote}} </h1>
              <h2>{{quote.author}}</h2>
        </div>
        </slick>
    </div>

    <div class="parallax-two" ></div>

    <div class="main" id="contact">
        <div class="half">
            <h1>Want to learn more or arrange a tour? </h1>
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


   <footer>
      
      <p id="title">The Barn at Dunvilla</p>
      <p>48203 U.S. 59, <br />
      Pelican Rapids, MN <br />
      56572
      </p>

        <div class="icons">
            <a href="https://www.instagram.com/barnatdunvilla/" target="_blank"><img src="../assets/instagram.svg" /></a>
            <a href="https://www.facebook.com/TheBarnAtDunvilla/?jazoest=2651001206895112122709810089747710890837045821086510175838610511511711111880787211211889113791018295747576801035865100121551106766768851685710510376955774711061009910310810055571167911675103555410378901081085311771721128965" target="_blank"><img src="../assets/facebook.svg" /></a>
            <a href="tel:2188497802"><img src="../assets/phone2.svg" id="call"/></a>
        </div>  
    </footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Barn0 from '../assets/home/Barn0.jpg'
import Barn1 from '../assets/home/Barn1.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from 'vue-slick';



export default {
  name: 'Home',
  components: {
    Header,
    Slick
  },
  data(){
    return {
        slickOptions: {
                slidesToShow: 1,
                autoplay: true
            },
        MainImages: [Barn0, Barn1],
        Quotes: [
            {
            "quote": "If you are looking for a wedding venue, look no further.",
            "author": "Haley L."},
            {
                "quote": "We loved everything about having our wedding there, and we were so happy with the service we received!!",
                "author":"Courtney S."
            },
            {
                "quote": "I can't count the number of compliments we got on the decor, venue, and how smoothly everything ran.",
                "author": "Camille O."   
            },
            {
                "quote":"I cannot even begin to come up with the words I want to use to explain how happy I am that we booked our wedding at The Barn at Dunvilla.",
                "author": "Andy G."
            },
            {
                "quote": "This place is absolutely fantastic.",
                "author": "Chelsie E."
            }
        ],
        
    }
  },
  methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
    created() {
        if (localStorage.getItem('reloaded')) {
            localStorage.removeItem('reloaded');
        } else {
            localStorage.setItem('reloaded', '1');
            location.reload();
        }
    }
}




</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
        height: 400px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
       }
#call {
        width: 16px;
}
</style>
