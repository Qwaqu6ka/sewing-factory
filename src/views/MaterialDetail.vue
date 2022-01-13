<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="Item">
        <img class="Item_img" :src="baseStaticURL+data.image" alt="">
        <div class="Item_table">
            <div class="Item_properties">
                <span class="Item_property">Артикул</span>
                <span class="Item_property">Название</span>
                <span class="Item_property">Цвет</span>
                <span class="Item_property">Изображение</span>
                <span class="Item_property">Ширина</span>
                <span class="Item_property">Цена за метр</span>
            </div>
            <div class="Item_properties">
                <span class="Item_property">{{data.article}}</span>
                <span class="Item_property">{{data.name}}</span>
                <span class="Item_property">{{ data.color }}</span>
                <span class="Item_property">{{ data.print }}</span>
                <span class="Item_property">{{ data.width }}</span>
                <span class="Item_property">{{ data.price }}</span>
            </div>
        </div>

    <h2 class="Rolls_title">Рулоны</h2>
    <div class="Rolls">
        <span v-show="rolls.length === 0" class="Rolls_nothing">Нет в наличии</span>
        <Roll
            v-for="roll in rolls"
            v-bind:key="roll.number"
            v-bind:item="roll"
        />
    </div>

    </div>
    </div>
</template>

<script>
import Roll from "@/components/Roll.vue"
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import {ref} from "vue";

export default {
    name: "MaterialDetail",
    components: {
        Roll,
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const rolls = ref( [] )
        const data = ref({})

        store.dispatch("getClothById", route.params.id)
            .then((data_)=>{
                console.log(data_)
                data.value =data_
            })

        store.dispatch("getClothDetails", route.params.id).then((data)=>{
            console.log(data)
            rolls.value = data
        })

        return {
            rolls,
            data,
            baseStaticURL: store.state.baseStaticURL
        }
    },
//     data() {
//         return {
//             rolls: [
//                 // {
//                 //     num: 1,
//                 //     len: 12,
//                 // },
//                 // {
//                 //     num: 2,
//                 //     len: 0,
//                 // },
//                 // {
//                 //     num: 3,
//                 //     len: 12,
//                 // },
//                 // {
//                 //     num: 4,
//                 //     len: 12,
//                 // },
//                 // {
//                 //     num: 5,
//                 //     len: 124,
//                 // },
//                 // {
//                 //     num: 6,
//                 //     len: 12,
//                 // },
//             ],
//         }
//     }
}
</script>

<style scoped lang="scss">
    $marginLeft: 50px;

    .Rolls {
        margin-bottom: 35px;

        &_title {
            margin-left: $marginLeft;
        }

        &_nothing {
            font-size: 1.25rem;
            color: gray;
            font-style: italic;
            margin-left: $marginLeft;
        }
    }
</style>
