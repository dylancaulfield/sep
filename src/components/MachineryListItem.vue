<template>
    <div>

        <v-card max-width="1000px">
            <v-img
                :src="`/machines/${machine.id}/1.jpeg`"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="500px"
            >
                <v-card-title v-text="machine.name"></v-card-title>
            </v-img>

            <v-card-actions>
                <v-spacer></v-spacer>

                <router-link :to="`/machinery/${machine.id}`">
                    <v-btn color="primary">
                        View
                    </v-btn>
                </router-link>


            </v-card-actions>
        </v-card>

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
    }
}
</script>

<style scoped>

</style>