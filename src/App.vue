<template>
    <Header/>
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.Layout {
    flex-grow: 1;
    background-color: #057D9F;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.InnerLayout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: white;
    width: 65vw;
}

$primary: #FF6C2E;
$secondary: #db5015;
$white: black;
$gray: #9f9f9f;
.form__group {
    position: relative;
    padding: 15px 0 0;
}

.form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
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
    background-color: $primary;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.25rem;
    transition: background-color 0.25s ease-in-out;

    &:hover, &:active, &:focus {
        background-color: $secondary;
    }
}
</style>
