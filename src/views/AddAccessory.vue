<template>
    <div class="Layout">
        <div class="InnerLayout">
            <h1 class="Login_title">Создать фурнитуру</h1>
            <h2 class="Login_title" v-if="success">Успешно создана</h2>
            <h2 class="Login_title" v-if="error">Возникла ошибка, проверьте артикул</h2>
            <form  @submit="onSubmit">
<!--                <div class="Login_form form__group field" style="text-align:left;">-->
<!--                    <input class="form__field" placeholder="Обновить" name="update" v-model="update" type="checkbox"/>-->
<!--                    <label for="login" class="form__label">Обновить</label>-->
<!--                </div>-->

                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Артикул" name="article" required v-model="article"/>
                    <label for="login" class="form__label">Артикул</label>
                </div>

                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Название" name="name"  required v-model="name"/>
                    <label for="login" class="form__label">Название</label>
                </div>
                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Тип" name="type"  required v-model="type"/>
                    <label for="login" class="form__label">Тип</label>
                </div>
                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Ширина" name="width"  required type="number" v-model="width"/>
                    <label for="login" class="form__label">Ширина</label>
                </div>
                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Длина" name="length"  required v-model="length" type="number"/>
                    <label for="login" class="form__label">Длина</label>
                </div>
                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Вес" name="weight"  required v-model="weight" type="number"/>
                    <label for="login" class="form__label">Вес</label>
                </div>
                <div class="Login_form form__group field">
                    <input class="form__field" placeholder="Цена" name="price"  required v-model="price" type="number"/>
                    <label for="login" class="form__label">Цена</label>
                </div>
                <div class="Login_form form__group field">
                    <input id="smth" class="form__field" placeholder="Фото" name="image"  required  type="file"/>
                    <label for="login" class="form__label">Фото</label>
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
        button {
            margin-top: 10px;
        }
    }
</style>
