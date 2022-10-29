<template>
  <div>

      <v-container>

          <v-sheet class="article" color="white" elevation="3">



              <h1>How to get in touch</h1>



              <h2>By Phone</h2>

              <a @click="openPhone">{{ fullPhone }}</a>

              <h2>By Email</h2>

              <a @click="openEmail">{{ fullEmail }}</a>

              <h3>South East Plant And Civil</h3>

              <p>
                  59 Balivanichanic Loop<br>
                  Seville Grove, WA, 6112
              </p>

              <p class="font-italic">ABN 592 320 120 99</p>

          </v-sheet>


      </v-container>

  </div>
</template>

<script>

export default {
    name: "ContactUs",
    data(){
        return {
            phone: [
                "+",
                "6",
                "1",
                " ",
                "4",
                "9",
                "9",
                " ",
                "1",
                "7",
                "3",
                " ",
                "0",
                "1",
                "6"
            ],
            email: [
                "n",
                "i",
                "a",
                "l",
                "l",
                "@",
                "s",
                "e",
                "p",
                "l",
                "a",
                "n",
                "t",
                "c",
                "i",
                "v",
                "i",
                "l",
                ".",
                "c",
                "o",
                "m"
            ]
        }
    },
    methods: {
        openEmail(){

            window.location.href = `mailto:${this.fullEmail}`

        },
        openPhone(){

            window.location.href = `tel:${this.fullPhone}`

        }
    },
    computed: {
        fullPhone(){

            let s = "";
            for (let c of this.phone){
                s += c;
            }
            return s;

        },
        fullEmail(){

            let s = "";
            for (let c of this.email){
                s += c;
            }
            return s;

        }
    }
}

</script>

<style>

.article {
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    max-width: 800px;
    padding: 30px;
}

.article h1 {
    margin-bottom: 30px;
}

.article h2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.article h3 {
    margin-top: 20px;
}

</style>