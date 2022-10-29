<template>
    <div class="margin">

        <v-container>

            <v-row>

                <v-col
                    v-for="machine in machinery"
                    :key="machine.id"
                    class="col-md-6"
                >

                    <MachineryListItem :machine="machine" />

                </v-col>

            </v-row>

        </v-container>

    </div>
</template>

<script>
import MachineryListItem from "@/components/MachineryListItem";
import store from "@/store";

export default {
    name: "Machinery",
    components: {
        MachineryListItem
    },
    data(){
        return {}
    },
    computed: {
        machinery(){
            return store.state.machinery;
        }
    }
}
</script>

<style scoped>

.margin {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>