<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="Item">
            <img class="Item_img" :src="baseStaticURL+data.image" alt="">
            <div class="Item_table">
                <div class="Item_properties">
                    <span class="Item_property">Название</span>
                    <span class="Item_property">Артикул</span>
                    <span class="Item_property">Длина</span>
                    <span class="Item_property">Ширина</span>
                    <span class="Item_property">Стоимость</span>
                </div>
                <div class="Item_properties">
                    <span class="Item_property">{{ data.name }}</span>
                    <span class="Item_property">{{ data.article }}</span>
                    <span class="Item_property">{{ data.length }}</span>
                    <span class="Item_property">{{ data.width }}</span>
                    <span class="Item_property">{{ data.price }}</span>
                </div>
            </div>
        </div>
        <div class="Used">
            <div class="Used_clothes">
                Используемые ткани:
                <router-link
                    class="Used_link"
                    v-for="cloth in data.clothes"
                    v-bind:key="cloth.article"
                    :to="'/nomenclature/materials/'+cloth.article"
                >
                    {{ cloth.name }}
                </router-link>
            </div>
            <div class="Used_access">
                Используемая фурнитура:
                <router-link
                    class="Used_link"
                    v-for="access in data.accessories"
                    v-bind:key="access.article"
                    :to="'/nomenclature/accessories/'+access.article"
                >
                    {{ access.name }}
                </router-link>
            </div>
        </div>

        <ProductHistory
            v-for="item in prev"
            :key="item.id"
            :data="item"
        />

    </div>
    </div>
</template>

<script>
import ProductHistory from '@/components/ProductHistory.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: "ProductDetail",
    components: {
        ProductHistory
    },
    setup() {
          const data = ref({})
        const prev = ref([])
        const store = useStore()
        const route = useRoute()

        store.dispatch("getProductInfo", route.params.id).then((data_)=> {
            console.log(data)
            data.value = data_
        })

        store.dispatch("getPreviousProducts", route.params.id)
            .then((data)=> {
                prev.value = data
            })

        return {
              data,
            prev,
            baseStaticURL: store.state.baseStaticURL
        }
    },
    // data() {
    //     return {
    //         clothes: [
    //             {
    //                 name: "Черная ночь",
    //                 article: 1,
    //             },
    //             {
    //                 name: "Багровая луна",
    //                 article: 2,
    //             },
    //         ],
    //         accessories: [
    //             {
    //                 name: "Брошь с красным камнем",
    //                 article: 1,
    //             },
    //             {
    //                 name: "Чёрная пуговица \"Светлана\"",
    //                 article: 2,
    //             },
    //         ],
    //         previous: [
    //             {
    //                 id: 0,
    //                 article: 0,
    //                 name: "qwerty",
    //                 width: 0,
    //                 length: 0,
    //                 image: "qwerty",
    //                 comment: "qwerty",
    //                 price: 0,
    //                 clothes: [
    //                     {
    //                         article: 0,
    //                         name: "qwerty",
    //                         color: "qwerty",
    //                         print: "qwerty",
    //                         image: "qwerty",
    //                         composition: "qwerty",
    //                         width: 0,
    //                         price: 0
    //                     }
    //                 ],
    //                 accessories: [
    //                     {
    //                         article: 0,
    //                         name: "qwerty",
    //                         type: "qwerty",
    //                         width: 0,
    //                         length: 0,
    //                         weight: 0,
    //                         image: "qwerty",
    //                         price: 0
    //                     }
    //                 ],
    //                 previouss: "qwerty"
    //             },
    //         ],
    //     }
    // },
}
</script>

<style lang="scss">
    .Used {
        display: flex;
        flex-direction: column;
        margin: 35px 70px 35px;
        line-height: 1.5;

        a {
            text-decoration: none;
            color: #FF6C2E;
            transition: color 0.25s ease-in-out;

            &:hover, &:active {
                color: #aecec3;
            }
        }

        &_clothes {
            margin-top: 15px;

            :not(:last-child) {
                &::after {
                    content: ", ";

                }
            }
        }

        &_access {
            margin-top: 15px;
            :not(:last-child) {
                &::after {
                    content: ", ";

                }
            }
        }
    }
</style>
