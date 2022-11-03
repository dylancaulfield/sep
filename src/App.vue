<template>
    <v-app>

        <v-navigation-drawer app v-model="drawer" temporary>
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="drawer"
                    active-class="red-text"
                >

                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/machinery">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-magnify</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Machinery</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/contact-us">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-phone</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Contact Us</v-list-item-title>
                        </v-list-item>
                    </router-link>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

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

            <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <router-link to="/machinery" class="hidden-xs-only">
                <v-btn text color="white">
                    Machinery
                </v-btn>
            </router-link>

            <router-link to="/contact-us" class="hidden-xs-only">
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
        drawer: false
    }),
};
</script>

<style>
a {
    text-decoration: none;
}
</style>