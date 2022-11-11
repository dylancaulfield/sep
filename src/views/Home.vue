<template>
  <div>

      <div
          class="background-image"
      >

          <v-container>

              <div class="background-overlay underline white--text">

                  <v-img max-width="800px" src="@/assets/img/logo-transparent.png" class="transparent mb-8"></v-img>

                  <h1>Plant Machinery Hire and Solutions for your Business</h1>

              </div>

              <div class="background-overlay">
                  <router-link to="machinery">
                      <v-btn large color="primary">View Machinery</v-btn>
                  </router-link>
                  <router-link to="contact-us">
                      <v-btn large color="white" class="red--text ml-4">Contact Us</v-btn>
                  </router-link>

              </div>


          </v-container>

      </div>

      <v-container class="big-padding text-center">

          <h1 class="mb-4">What we do</h1>

          <p class="mb-8">Providing high quality Plant Machinery and Solutions for your Business. Over <strong>25</strong> years experience in Australia and Internationally.</p>

          <p>
              <router-link to="/machinery">
                  View available machinery here
                  <v-icon color="red">mdi-arrow-right</v-icon>
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

.transparent {
    opacity: 0.85;
}

.underline {
    border-bottom: solid 5px white;
}

.background-overlay {
    padding: 20px 0;
    display: block;
}

.background-overlay h1 {
    font-size: 24px;
    background-color: rgba(63, 56, 56, 0.3);
    padding: 10px;
    max-width: 800px;
}

.big-padding {
    padding-top: 150px;
    padding-bottom: 150px;
}

@media only screen and (max-width: 600px) {

    .background-image {
        padding-top: 40px;
        width: 100%;
        height: 600px;
        background-image: url("../../src/assets/img/home-banner.jpeg");
        background-size: cover;
    }

}

@media only screen and (min-width: 600px) {

    .background-image {
        padding-top: 75px;
        width: 100%;
        height: 1000px;
        background-image: url("../../src/assets/img/home-banner.jpeg");
        background-size: cover;
    }

}

</style>
