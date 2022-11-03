import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        machinery: [
            {
                id: "37fdae0b-d6dc-4de8-9d31-fd7be299d891",
                name: "Kobelco SK135SR",
                description: "The Kobelco SK135SR is a mid-range, 13.5t excavator designed with a focus on fuel efficiency and performance. With an integrated noise and dust reduction (iNDr) cooling system, the SK135SR is just as quiet as conventional excavators—even with the larger, Tier-4 compliant engine.",
                numImages: 8
            },
            {
                id: "141b98bc-c203-4383-bb21-181709c67b8d",
                name: "Hitachi ZX225USLC-5",
                description: "You can be confident with the performance, power and productivity of the ZX225US-5 and the ZX225USLC-5 in getting the job done.",
                numImages: 5
            },
            {
                id: "7848547c-b32f-4324-bf2b-b5a91303504c",
                name: "Manitou 2150 RT Track Loader",
                description: "The Manitou 2150 RT track loader is equipped with IdealTrax, making it ideal for working on land, mud, sand, or gravel. Its particularly compact structure makes traveling on construction sites easy, while its ergonomic driving position offers the perfect comfort for everyday use. To ensure versatility, the 2150 RT track loader is compatible with many attachments. Change functions within minutes and find a solution for all your projects. Combining strength, all-terrain capability, reliability and versatility, the 2150 RT model meets all your requirements.",
                numImages: 2
            },
            {
                id: "c8f556e3-1473-4d0f-a09c-24f84332ce78",
                name: "Wacker Neuson DPU 110",
                description: "The heavyweight reversible vibratory plates offer an uncompromisingly strong compaction performance with compact dimensions and a high level of operating comfort.",
                numImages: 2
            },
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})
