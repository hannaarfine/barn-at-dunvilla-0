<template>
  <div>
    <header>
      <nav class="header">
        <ul class='nav-left'>
          <li v-for="i in headerItems.slice(0,3)" ><router-link :to="i">{{i}}</router-link></li>
        </ul>
        <div id="logo-header"><router-link to="/"><img src="../assets/barn-logo-temp.svg"></router-link></div>
        <ul class='nav-right'>
          <li v-for="i in headerItems.slice(3,6)" ><router-link :to="i">{{i}}</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
    return {
      headerItems: ["venue", "gallery", "events", "FAQ", "history", "contact"]
    }
  },
}

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height();
  if(scrollTop > 100) {
        $(".header").addClass("collapsed-header");
  }
  else {
     $(".header").removeClass("collapsed-header");
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


