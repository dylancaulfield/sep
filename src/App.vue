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

        <v-main>
            <router-view>

            </router-view>
        </v-main>

        <v-footer color="grey lighten-4" padless class="black--text">

            <v-row
                justify="center"
                no-gutters
            >
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    color="black"
                    text
                    rounded
                    class="my-2"
                    icon
                >
                    <v-icon>{{ icon }}</v-icon>
                </v-btn>
                <v-col
                    class="py-4 text-center"
                    cols="12"
                >
                    <strong>"Solutions not Problems"</strong>
                </v-col>
                <v-col
                    class="py-4 white text-center"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>© SEP Civil</strong>
                </v-col>
            </v-row>


        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        links: ["Help", "Contact Us"],
        icons: [
            'mdi-phone',
            'mdi-email',
        ],

    }),
};
</script>

<style>
a {
    text-decoration: none;
}
</style>