<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="Item">
            <img class="Item_img" src="@/assets/images/logo-01.jpg" alt="">
            <div class="Item_table">
                <div class="Item_properties">
                    <span class="Item_property">Название</span>
                    <span class="Item_property">Артикул</span>
                    <span class="Item_property">Цвет</span>
                    <span class="Item_property">Изображение</span>
                    <span class="Item_property">Ширина</span>
                    <span class="Item_property">Стоимость за метр</span>
                </div>
                <div class="Item_properties">
                    <span class="Item_property">Артикул</span>
                    <span class="Item_property">Тип</span>
                    <span class="Item_property">Длина</span>
                    <span class="Item_property">Ширина</span>
                    <span class="Item_property">Вес</span>
                    <span class="Item_property">Количество</span>
                </div>
            </div>
        </div>

        <h2 class="Rolls_title">Рулоны</h2>
        <div class="Rolls">
            <span v-show="rolls.length == 0" class="Rolls_nothing">Нет в наличии</span>
            <Roll
                v-for="roll in rolls"
                v-bind:key="roll.num"
                v-bind:item="roll"
            />
        </div>

    </div>
    </div>
</template>

<script>
import Roll from "@/components/Roll.vue"

export default {
    name: "MaterialDetail",
    components: {
        Roll,
    },
    data() {
        return {
            rolls: [
                // {
                //     num: 1,
                //     len: 12,
                // },
                // {
                //     num: 2,
                //     len: 0,
                // },
                // {
                //     num: 3,
                //     len: 12,
                // },
                // {
                //     num: 4,
                //     len: 12,
                // },
                // {
                //     num: 5,
                //     len: 124,
                // },
                // {
                //     num: 6,
                //     len: 12,
                // },
            ],
        }
    }
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