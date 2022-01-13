<template>
    <div class="Layout">
        <div class="ProfileCard">
            <span class="ProfileCard_name">{{ userdata.name }}</span>
            <span class="ProfileCard_account">Тип аккаунта: {{ userdata.role }}</span>
            <button class="ProfileCard_button" type="button" @click="logout">Выйти</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    setup() {
        const userdata = ref({})
        const store = useStore()

        store.dispatch('getProfile').then((data)=> {
            data.role = ({
                "1": "Заказчик",
                "2": "Менеджер",
                "3": "Кладовщик",
                "4": "Швея",
                "5": "Директор"
            })[data.role.toString()]
            userdata.value = data
        })

        return {
            userdata,
            logout: store.commit.bind(null, 'setToken', '')
        }

    },
}
</script>

<style scoped lang="scss">
    .ProfileCard {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        margin-top: 20px;

        &_name {
            margin-bottom: 20px;
        }

        &_account {

        }

        &_button {
            background-color: #FF6C2E;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px;
            margin-top: 20px;
            font-size: 1.25rem;
        }
    }
</style>
