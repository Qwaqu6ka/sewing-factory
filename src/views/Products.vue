<template>
    <div class="Layout">
        <div class="InnerLayout">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
}
</script>

<style scoped lang="scss">
    .InnerLayout {
        flex-grow: 1;
        background-color: white;
        width: 65vw;
    }

    .TableLayout {
        display: flex;
        justify-content: center;
    }

    .Nav {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-self: center;
        padding: 0;

        &_elem {
            border: solid 1px;
            font-size: 1.5rem;
            padding: 20px;
        }
    }
</style>
