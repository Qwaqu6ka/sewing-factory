<template>
    <div class="Layout">
        <div class="InnerLayout">
            <h2 class="Title">Список выпускаемой продукции</h2>
            <ProductInstance
                class="Instance"
                v-for="card of cards"
                v-bind:key="card.article"
                v-bind:card="card"
            />
        </div>
    </div>
</template>

<script>
import ProductInstance from "@/components/ProductInstance.vue"
import {ref} from "vue";
import {useStore} from "vuex";

export default {
    name: 'Products',
    setup() {
        const cards = ref([])
        const store = useStore()
        store.dispatch('getProducts').then((data)=> {
            cards.value = data
        })
        return {
            cards
        }

    },
    // data() {
    //     return {
    //         cards: [
    //             {
    //                 img:"",
    //                 name:"Покой",
    //                 article:"P1ecE",
    //             },
    //             {
    //                 img:"",
    //                 name:"Кто прочитал, тот здохнет 0_o",
    //                 article:"умер дед",
    //             },
    //             {
    //                 img:"",
    //                 name:"Я стал трансгендерной посфеминисткой",
    //                 article:"равенство",
    //             },
    //             {
    //                 img:"",
    //                 name:"Холодый ветер из жопы выдувает кал",
    //                 article:"ненавижу владивосток",
    //             },
    //         ],
    //     }
    // },
    components: {
        ProductInstance,
    }
}
</script>

<style scoped lang="scss">
    .TableLayout {
        display: flex;
        justify-content: center;
    }

    .Title {
        margin: 30px 80px
    }

    .Instance {
        margin-bottom: 30px;
    }
</style>
