<template>
    <div class="Layout">
        <div class="InnerLayout">
            <h1 class="Login_title">Создать ткань</h1>
            <h2 class="Login_title" v-if="success">Успешно создана</h2>
            <h2 class="Login_title" v-if="error">Возникла ошибка, проверьте артикул</h2>
            <form  @submit="onSubmit">

                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Артикул" name="article" required v-model="article"/>
                    <label for="article" class="form__label">Артикул</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Название" name="name"  required v-model="name"/>
                    <label for="name" class="form__label">Название</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Цвет" name="color"  required v-model="color" type="number"/>
                    <label for="color" class="form__label">Цвет</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Принт" name="print"  required v-model="print"/>
                    <label for="print" class="form__label">Принт</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Ширина" name="width"  required type="number" v-model="width"/>
                    <label for="width" class="form__label">Ширина</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Состав" name="composition"  required v-model="composition"/>
                    <label for="composition" class="form__label">Состав</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input class="form__field" placeholder="Цена" name="price"  required v-model="price" type="number"/>
                    <label for="price" class="form__label">Цена</label>
                </div>
                <div class="AddInput Login_form form__group field">
                    <input id="smth" class="form__field" placeholder="Фото" name="image"  required  type="file"/>
                    <label for="imag" class="form__label">Фото</label>
                </div>

                <button class="Login_button Button" type="submit">Создать</button>
            </form>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    name: "AddAccessory",
    setup() {
        const name = ref('')
        const price = ref(0)
        const weight = ref(0)
        const width = ref(0)
        const length = ref(0)
        const type = ref('')
        const article = ref(0)
        const store = useStore()
        const error = ref(false)
        const success = ref(false)
        // const update = ref(false)

        let onSubmit = e => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', name.value)
            formData.append('price', price.value)
            formData.append('weight', weight.value)
            formData.append('length', length.value)
            formData.append('type', type.value)
            formData.append('article', article.value)
            formData.append('width', width.value)
            formData.append('image', document.getElementById('smth').files[0])
            // formData.append('update', update.value)
            store.dispatch("createNewAccessory", formData)
            .then((data) => {
                error.value = false
                success.value = true
            }).catch(() => {
                error.value = true
                success.value = false
            })
        }

        return {
            onSubmit,
            name,
            price,
            weight,
            width,
            length,
            type,
            article,
            error,
            success,
            // update
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        max-width: 70%;
    }

    .InnerLayout {
        display: flex;
        align-items: center;
        flex-grow: 1;
        background-color: white;
        button {
            margin-top: 10px;
        }
    }

    .Button {
        margin-bottom: 30px;
    }

    .AddInput {
        margin-bottom: 15px;
    }
</style>
