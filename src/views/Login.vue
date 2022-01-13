<template>
    <div class="Login">
        <div class="Login_layout">
            <h1 class="Login_title">Вход</h1>

            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Логин" name="login" id='login' required />
                <label for="login" class="form__label">Логин</label>
            </div>

            <div class="form__group field">
                <input type="password" class="form__field" placeholder="Пароль" name="pass" id='pass' required />
                <label for="pass" class="form__label">Пароль</label>
            </div>

            <button class="Login_button" type="button">Войти</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
}
</script>

<style scoped lang="scss">
    .Login {
        align-self: center;
        width: 30vw;

        &_layout {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
        }

        &_button {
            background-color: #FF6C2E;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px;
            min-width: 100%;
            font-size: 1.5rem;
            margin-top: 20px;
        }
    }

    $primary: #FF6C2E;
    $secondary: #f3b9a0;
    $white: black;
    $gray: #9f9f9f;
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        margin-bottom: 20px;
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
</style>