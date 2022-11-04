<template>
    <div>

        <router-link :to="`/machinery/${machine.id}`">

        <v-card max-width="1000px" color="black" shaped v-show="ready">
            <v-img
                :src="require(`@/assets/machines/${machine.id}/1.jpeg`)"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="500px"
            >
                <v-card-title>
                    {{machine.name}}
                </v-card-title>
            </v-img>

            <v-card-actions>
                <v-btn text color="red">View</v-btn>
            </v-card-actions>


        </v-card>

        </router-link>

    </div>
</template>

<script>
export default {
    name: "MachineryListItem",
    props: {
        machine: {
            id: String,
            name: String
        }
    },
    data(){
        return {
            ready: false
        }
    },
    mounted() {
        this.ready = true;
    }
}
</script>

<style scoped>



</style>