<template>
    <div class="OrderTable_row">
        <router-link
            class="OrderTable_cell"
            :to="'/nomenclature/products/'+product.article"
        >
            {{ product.name }}
        </router-link>
        <span class="OrderTable_cell OrderTable_count">{{ count }}</span>
    </div>
</template>

<script>
export default {
    name: "OrderTableElem",
    props: {
        product: Object,
        count: Number,
    },
    setup(props) {
        console.log(props.product)
        return {
            product: props.product,
            count: props.count,
        }
    }
}
</script>
