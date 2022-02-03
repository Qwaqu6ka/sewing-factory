<template>
    <Header/>
    <div class="ExternalLayout">
        <div class="InnerLayout">
            <router-view></router-view>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        return {
            profile: store.state.profile
        }
    },
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ExternalLayout {
    flex-grow: 1;
    background-color: $background-color;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.InnerLayout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: $primary-color;
    width: 65vw;

    @include vw-lg-down {
        width: 85vw;
    }

    @include vw-md-down {
        width: 100vw;
    }
}

.MainLayout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

// Стили таблиц в детализациях
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

// Стили для input'ов
$primary: $secondary-color;
$secondary: $hover-secondary-color;
$white: black;
$gray: gray;
.form__group {
    position: relative;
    padding: 15px 0 0;
}

.form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $secondary-font-color;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
}

.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
}

.form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $primary;
        font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary,$secondary);
    border-image-slice: 1;
}
/* reset input */
.form__field{
    &:required,&:invalid { box-shadow:none; }
}

.Button {
    background-color: $secondary-color;
    color: $primary-color;
    border: none;
    border-radius: 8px;
    padding: 10px 30px 10px;
    font-size: toRem(20px);
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: $hover-secondary-color;
    }
    &:active, &:focus {
        background-color: $active-secondary-color;
    }
}
</style>
