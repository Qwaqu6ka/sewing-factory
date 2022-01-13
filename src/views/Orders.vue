<template>
    <div class="Layout">
        <div class="InnerLayout">
            <h2 class="Title">Список заказов</h2>
            <OrderInstance
                class="Instance"
                v-for="card of cards"
                v-bind:key="card.number"
                v-bind:card="card"
            />
        </div>
    </div>
</template>

<script>
import OrderInstance from "@/components/OrderInstance.vue"

export default {
    name: 'Orders',
    data() {
        return {
            cards: [
                {
                    number:"88005553535",
                    customer:"Покой",
                    status: 1,
                },
                {
                    number:"12342",
                    customer:"Кто прочитал, тот здохнет 0_o",
                    status: 2,
                },
                {
                    number:"42667557",
                    customer:"Я стал трансгендерной посфеминисткой",
                    status: 3,
                },
                {
                    number:"87560434",
                    customer:"Холодый ветер из жопы выдувает кал",
                    status: 4,
                },
                {
                    number:"87560",
                    customer:"Холодый ветер из жопы выдувает кал",
                    status: 5,
                },
                {
                    number:"sdfasdf",
                    customer:"Холодый ветер из жопы выдувает кал",
                    status: "4323",
                },
            ],
        }
    },
    components: {
        OrderInstance,
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
