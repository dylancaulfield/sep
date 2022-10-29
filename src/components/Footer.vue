<template>
        <v-row
            justify="center"
            no-gutters
        >
            <v-btn
                v-for="(icon, i) in icons"
                :key="i"
                color="black"
                text
                rounded
                class="my-2"
                icon
                @click="icon.handler()"
            >
                <v-icon>{{ icon.icon }}</v-icon>
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
</template>

<script>
export default {
    name: "Footer",
    methods:{
        openEmail() {

            window.location.href = `mailto:niall@seplantcivil.com`

        },
        openPhone() {

            window.location.href = `tel:+61 499 173 016`

        }
    },
    data(){
        return {
            icons: [
                {
                    "icon": "mdi-phone",
                    "handler": this.openPhone
                },
                {
                    "icon": "mdi-email",
                    "handler": this.openEmail
                }
            ],
        }
    }
}
</script>

<style scoped>

</style>