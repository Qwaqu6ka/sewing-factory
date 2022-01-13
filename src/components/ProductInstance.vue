<template>
    <div class="Product">
        <img class="Product_img" src="@/assets/icons/profile.svg" alt="">
        <div class="Product_description">
            <span class="Product_name">{{ card.name }}</span>
            <span class="Product_article">Артикул: {{ card.article }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductInstance",
    props: {
        card: {
            type: Object,
            requred: true
        }
    }
}
</script>

<style scoped lang="scss">
    $paddingX: 20px;

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
        transition: box-shadow 0.25s ease-in-out;

        &:hover, &:focus {
            box-shadow: 5px 10px 16px 0px rgba(0,0,0,0.5);
        }

        &_img {
            width: 140px;
            padding: 10px;
        }

        &_description {
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            align-items: center;
            margin-left: 30px;
            padding-top: $paddingX;
            padding-bottom: $paddingX;
        }

        &_name {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        &_article {
            color: #949494;
            font-size: 1.25rem;
        }
    }
</style>