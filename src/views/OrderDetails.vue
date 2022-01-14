<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="OrderDetails">
            <h2 class="OrderDetails_text">Заказ (номер)</h2>
            <span class="OrderDetails_text">Дата создания: </span>
            <span class="OrderDetails_text">Дата завершения: </span>
            <span class="OrderDetails_text">Статус: </span>
            <span class="OrderDetails_text">Менеджер: </span>
            <span class="OrderDetails_text">Покупатель: </span>
            <span class="OrderDetails_text">Сумма заказа: </span>
            <span class="OrderDetails_text">Комментарий: </span>
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

export default {
    name: "OrderDetails",
    components: {
        TableElem,
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
