<template>
    <v-app>
        <v-app-bar
            app
            dark
            color="black"
            hide-on-scroll
            class="pl-0"
        >

            <router-link to="/">
                <v-img class="ml-0" max-height="100" max-width="120" src="/img/logo.jpeg"></v-img>
            </router-link>

            <v-toolbar-title class="black--text">

            </v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link to="/machinery">
                <v-btn text color="white">
                    Machinery
                </v-btn>
            </router-link>

            <router-link to="/contact-us">
                <v-btn text color="white">
                    Contact Us
                </v-btn>
            </router-link>

        </v-app-bar>

        <v-main class="mb-0 pt-0 grey lighten-3">
            <router-view>

            </router-view>
        </v-main>

        <v-footer color="grey lighten-4" padless class="black--text">

            <Footer></Footer>




        </v-footer>
    </v-app>
</template>

<script>
import Footer from "@/components/Footer";

export default {
    name: 'App',
    components: {
        Footer
    },
    data: () => ({
        links: ["Help", "Contact Us"],


    }),
};
</script>

<style>
a {
    text-decoration: none;
}
</style>