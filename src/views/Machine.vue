<template>
    <div>

        <v-container>

            <v-sheet class="article no-padding" color="white" elevation="3">

                <v-carousel>
                    <v-carousel-item
                        v-for="i in machine.numImages"
                        :key="i"
                        :src="`/machines/${machine.id}/${i}.jpeg`"
                    ></v-carousel-item>
                </v-carousel>

            </v-sheet>

            <v-sheet class="article mt-0 mb-16" color="white" elevation="3">

                <h1>{{ machine.name }}</h1>

                <v-divider class="my-8"></v-divider>

                <p>{{ machine.description }}</p>

                <v-divider class="my-8"></v-divider>

                <p>
                    <router-link to="/contact-us">
                        Contact Niall for more information
                        <v-icon color="red">mdi-arrow-right</v-icon>
                    </router-link>
                </p>

            </v-sheet>


        </v-container>

    </div>
</template>

<script>
import store from "@/store";

export default {
    name: "Machine",
    computed: {
        machine(){
            return store.state.machinery.filter(m => m.id === this.$route.params.id)[0]
        }
    }
}
</script>

<style scoped>

.article {
    margin-left: auto;
    margin-right: auto;
    margin-top: 75px;
    max-width: 800px;
    padding: 30px;
}

.article.no-padding {
    margin-bottom: 0;
    padding: 0;
}

h1 {
    margin-bottom: 30px;
}

</style>