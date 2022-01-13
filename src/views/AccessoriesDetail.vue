<template>
    <div class="Layout">
    <div class="InnerLayout">
        <h2 class="Title" style="text-align:center;">{{ data.accessory.name }}</h2> <br>
        <div class="Item">
            <img class="Item_img" :src="baseStaticURL+data.accessory.image" alt="">
            <div class="Item_table">
                <div class="Item_properties">
                    <span class="Item_property">Наименование</span>
                    <span class="Item_property">Артикул</span>
                    <span class="Item_property">Тип</span>
                    <span class="Item_property">Длина</span>
                    <span class="Item_property">Ширина</span>
                    <span class="Item_property">Вес</span>
                    <span class="Item_property">Количество</span>
                </div>
                <div class="Item_properties">
                    <span class="Item_property">{{ data.accessory.name }}</span>
                    <span class="Item_property">{{ data.article }}</span>
                    <span class="Item_property">{{ data.accessory.type }}</span>
                    <span class="Item_property">{{ data.accessory.length }}</span>
                    <span class="Item_property">{{ data.accessory.width }}</span>
                    <span class="Item_property">{{ data.accessory.weight }}</span>
                    <span class="Item_property">{{ data.count }}</span>
                </div>
            </div>
        </div>
        <div class="Cancel">
            <div class="form__group field">
                <input type="number" class="form__field" placeholder="Количество товара" name="name"  id='name' required v-model="count"/>
                <label for="name" class="form__label">Количество товара</label>
            </div>
            <button class="Cancel_button Button" type="button" @click="onDecommision">Списать</button>
        </div>
    </div>
    </div>
</template>

<script>

import { useStore } from "vuex";
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "AccessoriesDetail",
    setup(props) {
        const store = useStore()
        const data = ref({})
        const count = ref(0)
        const router = useRoute()

        store.dispatch("getAccessoryDetails", router.params.id).then((data_) => {
            console.log(data_)
            data.value = data_
        })

        const onDecommision = () => {
            store.dispatch("accessoryDecommission", {article:data.value.article, count:count.value})
            .then(()=>{
                data.value.count -= count.value
            }).catch((err) => {
                console.log(err)
            })
        }

        return {
            data,
            count,
            onDecommision,
            baseStaticURL: store.state.baseStaticURL
        }
    }
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
