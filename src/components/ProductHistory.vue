<template>
    <div class="Card">
        <div class="Used">
            <span class="Used_item">Длина: {{ data.length }}</span>
            <span class="Used_item">Ширина: {{ data.width }}</span>
            <span class="Used_item">Стоимость: {{ data.price }}</span>
            
            <div class="Used_clothes">
                Используемые ткани: 
                <router-link 
                    class="Used_link"
                    v-for="cloth in data.clothes"
                    v-bind:key="cloth.article"
                    :to="'/materials/'+cloth.article"
                >
                    {{ cloth.name }}
                </router-link>
            </div>
            <div class="Used_access">
                Используемая фурнитура: 
                <router-link 
                    class="Used_link"
                    v-for="access in data.accessories"
                    v-bind:key="access.article"
                    :to="'/accessories/'+access.article"
                >
                    {{ access.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductHistory",
    props: {
        data: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
    .Card {
        display: flex;
        flex-direction: column;
        border: solid 1px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 80px;
        margin-right: 80px;
        margin-bottom: 35px;
        background-color: #EEF9FF;
    }
</style>