<template>
    <div @click="clicked" class="Product">
        <img class="Product_img" :src="card.image" alt="">
        <div class="Product_description">
            <h5 class="Product_name">{{ card.name }}</h5>
            <span class="Product_article">Артикул: {{ card.article }}</span>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

export default {
    name: "ProductInstance",
    props: {
        card: {
            type: Object,
            requred: true
        }
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();
        props.card.image = store.state.baseStaticURL + props.card.image

        const clicked = () => {
            router.push("accessories/"+props.card.article.toString())
        }

        return{
            card: props.card,
            clicked
        }
    }

}
</script>

<style scoped lang="scss">
    .Product {
        display: flex;
        flex-direction: row;
        border: solid 1px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 80px;
        margin-right: 80px;
        background-color: #EEF9FF;

        &_img {
            width: 140px;
            padding: 10px;
        }

        &_description {
            display: flex;
            flex-direction: column;
            margin-left: 30px;
        }

        &_name {
            font-size: 1.4rem;
        }

        &_article {
            color: #949494;
        }
    }
</style>
