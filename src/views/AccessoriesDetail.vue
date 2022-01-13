<template>
    <div class="Layout">
    <div class="InnerLayout">
        <div class="Item">
        <img class="Item_img" src="@/assets/images/logo-01.jpg" alt="">
        <div class="Item_table">
            <div class="Item_properties">
                <span class="Item_property">Артикул</span>
                <span class="Item_property">Тип</span>
                <span class="Item_property">Длина</span>
                <span class="Item_property">Ширина</span>
                <span class="Item_property">Вес</span>
                <span class="Item_property">Количество</span>
            </div>
            <div class="Item_properties">
                <span class="Item_property">Артикул</span>
                <span class="Item_property">Тип</span>
                <span class="Item_property">Длина</span>
                <span class="Item_property">Ширина</span>
                <span class="Item_property">Вес</span>
                <span class="Item_property">Количество</span>
            </div>
        </div>
    </div>
    <div class="Cancel">
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Количество товара" name="name" id='name' required v-model="login"/>
            <label for="name" class="form__label">Количество товара</label>
        </div>
        <button class="Cancel_button Button" type="button">Списать</button>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "AccessoriesDetail",
}
</script>

<style scoped lang="scss">
    .Item {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-top: 40px;
        align-items: flex-start;

        &_table {
            display: flex;
            flex-direction: row;
        }

        &_img {
            display: block;
            max-width: 300px;
            height: auto;
            object-fit: scale-down;
            margin-right: 30px;
        }

        &_properties {
            display: flex;
            flex-direction: column;
        }

        &_property {
            border: solid 1px;
            padding: 20px;
            font-size: 1.25rem;
        }
    }

    .Cancel {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-top: 30px;
        margin-bottom: 50px;

        &_button {
            margin-left: 20px;
        }
    }
</style>