<template>
    <div class="Roll">
        <span class="Roll_num">Номер: {{ item.num }}</span>
        <span class="Roll_num">Длина: {{ item.len }}</span>
        <div class="Cancel">
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Количество" :name="item.num" :id='item.num' required v-model="login"/>
                <label :for="item.num" class="form__label">Количество</label>
            </div>
            <button class="Cancel_button Button" type="button">Списать</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Roll",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.Roll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 50px;
    padding-right: 30px;
    align-items: center;
}

.Cancel {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-top: 10px;
        margin-bottom: 10px;

        &_button {
            margin-left: 20px;
        }
    }
</style>