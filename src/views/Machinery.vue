<template>
    <div>

        <div v-bind:key="machine.id" v-for="machine in machinery">

            <MachineryListItem :machine="machine" />

        </div>


    </div>
</template>

<script>
import MachineryListItem from "@/components/MachineryListItem";

export default {
    name: "Machinery",
    components: {
        MachineryListItem
    },
    data(){
        return {
            machinery: [
                {
                    id: "37fdae0b-d6dc-4de8-9d31-fd7be299d891",
                    name: "John Deere",
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>