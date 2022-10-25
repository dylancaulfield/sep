<template>
  <div>

      <v-parallax
          dark
          src="/img/parallax-home-banner.jpeg"
          height="1000"

      >

          <v-container class="mt-10">

              <div class="parallax-overlay underline">

                  <h1>SEP Civil</h1>

                  <h2>Solutions Not Problems</h2>



              </div>

              <div class="parallax-overlay">
                  <router-link to="machinery">
                      <v-btn large color="primary">View Machinery</v-btn>
                  </router-link>
                  <router-link to="contact-us">
                      <v-btn large color="white" class="blue--text ml-4">Contact Us</v-btn>
                  </router-link>

              </div>



          </v-container>

      </v-parallax>



  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>

.underline {
    border-bottom: solid 5px white;
}

.parallax-overlay {
    padding: 20px 0;
    display: block;
}

.parallax-overlay h1 {
    font-size: 84px;
}

.parallax-overlay h2 {
    font-size: 48px;
}

</style>
