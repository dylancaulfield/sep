<template>
  <div>

      <div
          class="background-image"
      >

          <v-container class="pt-10">

              <div class="background-overlay underline white--text">

                  <h1>SEP Civil</h1>

                  <h2>Solutions Not Problems</h2>



              </div>

              <div class="background-overlay">
                  <router-link to="machinery">
                      <v-btn large color="primary">View Machinery</v-btn>
                  </router-link>
                  <router-link to="contact-us">
                      <v-btn large color="white" class="blue--text ml-4">Contact Us</v-btn>
                  </router-link>

              </div>


          </v-container>

      </div>

      <v-container class="big-padding text-center">

          <h1>What we do</h1>

          <p>We provide high quality <strong>Plant</strong>, <strong>Machinery</strong> and <strong>Solutions</strong> for your business. With over <strong>25</strong> years of experience.</p>

          <p>
              <router-link to="/machinery">
                  View available machinery here
              </router-link>
          </p>

      </v-container>



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

.big-padding {
    padding-top: 150px;
    padding-bottom: 150px;
}

.background-overlay {
    padding: 20px 0;
    display: block;
}

.background-overlay h1 {
    font-size: 84px;
}

.background-overlay h2 {
    font-size: 48px;
}

.background-image {
    padding-top: 150px;
    width: 100%;
    height: 1000px;
    background-image: url("/img/parallax-home-banner.jpeg");
    background-size: cover;
}

</style>
