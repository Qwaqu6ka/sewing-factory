<template>

</template>

<script>
export default {
    name: "OrderDetails",
    data() {
        console.log(this.$route.params.id)
        return {
            order_id: this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>
