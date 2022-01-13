<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="Item">
            <img class="Item_img" src="@/assets/images/logo-01.jpg" alt="">
            <div class="Item_table">
                <div class="Item_properties">
                    <span class="Item_property">Название</span>
                    <span class="Item_property">Артикул</span>
                    <span class="Item_property">Длина</span>
                    <span class="Item_property">Ширина</span>
                    <span class="Item_property">Стоимость</span>
                </div>
                <div class="Item_properties">
                    <span class="Item_property">А</span>
                    <span class="Item_property">Т</span>
                    <span class="Item_property">Д</span>
                    <span class="Item_property">Ша</span>
                    <span class="Item_property">с</span>
                </div>
            </div>
        </div>
        <div class="Used">
            <div class="Used_clothes">
                Используемые ткани: 
                <router-link 
                    class="Used_link"
                    v-for="cloth in clothes"
                    v-bind:key="cloth.article"
                    :to="'/materials/'+cloth.article"
                >
                    {{ cloth.name }}
                </router-link>
            </div>
            <div class="Used_access">
                Используемая фурнитура: 
                <router-link 
                    class="Used_link"
                    v-for="access in accessories"
                    v-bind:key="access.article"
                    :to="'/accessories/'+access.article"
                >
                    {{ access.name }}
                </router-link>
            </div>
        </div>

        <ProductHistory
            v-for="item in previous"
            :key="item.id"
            :data="item"
        />

    </div>
    </div>
</template>

<script>
import ProductHistory from '@/components/ProductHistory.vue'

export default {
    name: "ProductDetail",
    components: {
        ProductHistory
    },
    data() {
        return {
            clothes: [
                {
                    name: "Черная ночь",
                    article: 1,
                },
                {
                    name: "Багровая луна",
                    article: 2,
                },
            ],
            accessories: [
                {
                    name: "Брошь с красным камнем",
                    article: 1,
                },
                {
                    name: "Чёрная пуговица \"Светлана\"",
                    article: 2,
                },
            ],
            previous: [
                {
                    id: 0,
                    article: 0,
                    name: "qwerty",
                    width: 0,
                    length: 0,
                    image: "qwerty",
                    comment: "qwerty",
                    price: 0,
                    clothes: [
                        {
                            article: 0,
                            name: "qwerty",
                            color: "qwerty",
                            print: "qwerty",
                            image: "qwerty",
                            composition: "qwerty",
                            width: 0,
                            price: 0
                        }
                    ],
                    accessories: [
                        {
                            article: 0,
                            name: "qwerty",
                            type: "qwerty",
                            width: 0,
                            length: 0,
                            weight: 0,
                            image: "qwerty",
                            price: 0
                        }
                    ],
                    previouss: "qwerty"
                },
            ],
        }
    },
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