<template>
    <v-app>
        <v-app-bar
            app
            light
            color="white"
            hide-on-scroll
        >


            <v-toolbar-title class="black--text">
                <router-link to="/">
                    <strong class="black--text">
                        SEP Civil
                    </strong>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link to="/machinery">
                <v-btn text color="primary">
                    Machinery
                </v-btn>
            </router-link>

            <router-link to="/contact-us">
                <v-btn text color="primary">
                    Contact Us
                </v-btn>
            </router-link>

        </v-app-bar>

        <v-main class="mb-0 pt-0 grey lighten-2">
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