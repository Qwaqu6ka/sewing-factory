<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="OrderDetails">
            <h2 class="OrderDetails_text">Заказ {{order.id}}</h2>
            <span class="OrderDetails_text">Дата создания: {{order.creation_date}}</span>
            <span class="OrderDetails_text">Дата завершения: {{order.completion_date}}</span>
            <span class="OrderDetails_text">Статус: {{order.stage}}</span>
            <span class="OrderDetails_text">Менеджер: {{order.manager.name}}</span>
            <span class="OrderDetails_text">Покупатель: {{order.customer.name}}</span>
            <span class="OrderDetails_text">Сумма заказа: {{order.cost}}</span>
        </div>
        <div class="OrderTable">
            <div class="OrderTable_row">
                <span class="OrderTable_cell OrderTable_name">Товар</span>
                <span class="OrderTable_cell OrderTable_count">Количество</span>
            </div>
            <TableElem
                v-for="elem in data"
                :key="elem.product.article"
                :product="elem.product"
                :count="elem.count"
            />
        </div>
    </div>
    </div>
</template>

<script>
import TableElem from "@/components/OrderTableElem.vue"
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "OrderDetails",
    components: {
        TableElem,
    },
    setup() {
        const order = ref({})
        const data = ref([])
        const store = useStore()
        const route = useRoute()

        store.dispatch("getOrderInfo", route.params.id).then((data) => {
            order.value = data
        })

        store.dispatch("getOrderProducts", route.params.id).then((data_) => {
            data.value = data_
        })

        return {
            order,
            data
        }

    },
    data() {
        return {
            data: [
                {
                    product: {
                        name: "prod1",
                        article: 1,
                    },
                    count: 5,
                },
                {
                    product: {
                        name: "prod2",
                        article: 2,
                    },
                    count: 25,
                },
            ],
        }
    }
}
</script>

<style lang="scss">
.OrderDetails {
    display: flex;
    flex-direction: column;
    margin: 10px 80px 35px;
    line-height: 1.5;
}

.OrderTable {
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    &_row {
        display: flex;
        flex-direction: row;
        align-self: center;

        a {
            text-decoration: none;
            color:black;
            transition: color 0.25s ease-in-out;

            &:hover, &:active {
               color: #FF6C2E;
            }
        }
    }

    &_cell {
        border: solid 1px black;
        padding: 10px;
        width: 350px;
        word-wrap: break-word;
    }
}
</style>
