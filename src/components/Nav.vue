<template>
    <nav class="Nav" :class="{ Nav_vertical: vertical }">
        <div class="Nav__dropdown">
            <a class="Nav__dropbutton Nav__link" :class="{ Nav__link_vertical: vertical }">
                Номенклатура
            </a>
            <div class="Nav__droplinks">
                <router-link to="/nomenclature/products">Готовая продукция</router-link>
                <router-link to="/nomenclature/materials">Материалы</router-link>
                <router-link to="/nomenclature/accessories">Фурнитура</router-link>
                <router-link to="/add/accessory">Добавить фурнитуру</router-link>
                <router-link to="/add/material">Добавить ткань</router-link>
                <router-link to="/add/product">Добавить продукт</router-link>
                
            </div>
        </div>

        <router-link class="Nav__link" to="/orders">
            Заказы
        </router-link>

        <router-link class="Nav__link" to="/profile">
            Профиль
        </router-link>
    </nav>
</template>

<script>
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        return {
            profile: store.state.profile
        }
    },
    props: {
        vertical: false,
    },
    name: 'Nav',
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/media.scss";

.Nav {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    @include vw-sm-down {
        display: none;
    }
    
    &_vertical {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }

    a {
        font-size: toRem(18px);
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        transition: color 0.25s ease-in-out;
    }

    /* The container <div> - needed to position the dropdown content */
    &__dropdown {
        position: relative;
        display: inline-block;
    }

    &__dropbutton {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }

    /* Dropdown Content (Hidden by Default) */
    &__droplinks {
        display: none;
        position: absolute;
        background-color: #EEF9FF;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        /* Links inside the dropdown */
        a {
            font-size: none;
            display: block;
        }
    }

    &__link {
        &:hover, &:active, &.router-link-active {
            color: #FF6C2E;
        }

        &_vertical {
            a {
                font-size: toRem(18px);
                color: white;
                padding: 12px 16px;
                text-decoration: none;
                transition: color 0.25s ease-in-out;
            }
        }
    }
}
/* Change color of dropdown links on hover */
.Nav__droplinks a:hover {background-color: #D1EEFC;}

/* Show the dropdown menu on hover */
.Nav__dropdown:hover .Nav__droplinks {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.Nav__dropdown:hover .dropbtn {background-color: #E0A9AF;}
</style>