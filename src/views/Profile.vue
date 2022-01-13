<template>
    <div class="Layout">
        <div class="ProfileCard">
            <span class="ProfileCard_name">Клевчау Юрий Александрович</span>
            <span class="ProfileCard_account">Тип аккаунта: {{ accountType }}</span>
            <button class="ProfileCard_button Button" type="button">Выйти</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accountType: "Бог"
        }
    }
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
            margin-top: 20px;
        }
    }
</style>
