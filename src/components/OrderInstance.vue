<template>
    <div class="Order" @click="push_to_id">
        <img v-if="wait" class="Order_img" src="@/assets/icons/waiting_status.svg">
        <img v-if="reject" class="Order_img" src="@/assets/icons/reject_status.svg">
        <img v-if="complete" class="Order_img" src="@/assets/icons/complete_status.svg">
        <div class="Order_feautersContainer">
            <span class="Order_feature Order_text">Номер:</span>
            <span class="Order_feature Order_text">Заказчик:</span>
            <span class="Order_feature Order_text">Статус:</span>
        </div>
        <div class="Order_feautersContainer">
            <span class="Order_value Order_text">{{ card.id }}</span>
            <span class="Order_value Order_text">{{ card.customer.name }}</span>
            <span class="Order_value Order_text">{{ card.stage }}</span>
        </div>
    </div>
</template>

<script>

import { useRouter } from 'vue-router';

export default {
    name: "OrderInstance",
    props: {
        card: {
            type: Object,
            requred: true
        }
    },
    data() {
        let complete = false, wait = false, reject = false
        if (this.card.status == 2 || this.card.status == 4)
            complete = true
        else if (this.card.status == 1)
            wait = true
        else if (this.card.status == 3)
            reject = true

        return {
            complete,
            wait,
            reject,
            router: useRouter()
        }
    },
    methods: {
        push_to_id(){
            this.router.push("/orders/"+this.card.id)
        }
    }
}
</script>

<style scoped lang="scss">
    .Order {
        display: flex;
        flex-direction: row;
        border: solid 1px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        align-items: center;
        justify-content: flex-start;
        margin-left: 80px;
        margin-right: 80px;
        background-color: #EEF9FF;
        padding: 20px;
        transition: box-shadow 0.25s ease-in-out;

        &:hover, &:focus {
            box-shadow: 5px 10px 16px 0px rgba(0,0,0,0.5);
        }

        &_img {
            width: 100px;
            padding: 10px;
            margin-right: 30px;
        }

        &_feautersContainer {
            display: flex;
            flex-direction: column;
        }

        &_feature {
            align-self: flex-end;
            padding: 5px;
        }

        &_value {
            align-self: flex-start;
            padding: 5px;
        }

        &_text {
            font-size: 1.25rem;
        }
    }
</style>
