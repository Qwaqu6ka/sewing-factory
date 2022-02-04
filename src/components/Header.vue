<template>
    <header>
        <router-link to="/">
           <img
                class="Logo"
                src="@/assets/icons/logo-white.svg" 
                alt="logo"
            >
        </router-link>
        
        <Nav/>

        <a href="tel: {{ phoneNum }}" class="PhoneNum">
            <img
                src="@/assets/icons/phone.svg"
                alt="Телефон"
                class="PhoneNum__icon"
            >
            {{ phoneNum }}
        </a>

        <button type="button" class="offCanvasButton" v-if="!isOpen" @click="isOpen=true">
            <img
                src="@/assets/icons/offcanvas_button.svg"
                alt="Меню"
            >
        </button>

        <teleport to="body">
            <Slide 
                right :burgerIcon="false" 
                :isOpen="isOpen" 
                @closeMenu="isOpen = false" 
                
                noOverlay
            >
            <!-- :closeOnNavigation="true" -->
                <Nav :vertical="true" />
            </Slide>
        </teleport>
    </header>
</template>

<script>
import Nav from '@/components/Nav.vue'
import { Slide } from 'vue3-burger-menu'

export default {
    
    name: "Header",
    components: {
        Nav,
        Slide,
    },
    data() {
        return {
            phoneNum: '8 (800)555-35-35',
            isOpen: false,
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/media.scss";

header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 70px;
    border: solid lightgray 1px;

    @include vw-md-down {
        padding: 20px 0px;
    }

    .Logo {
        margin-right: 30px;
        margin-left: 10px;
        width: 280px;

        @include vw-md-down {
            margin: 0;
            width: 250px;
        }
    }

    a {
        text-decoration: none;

        &:hover, &:active, &:focus {
            text-decoration: underline;
        }
    }
    .PhoneNum {
        display: flex;
        flex-direction: row;
        color: $primary-font-color;
        align-items: center;
        height: 15%;
        font-size: toRem(18px);
        margin-left: 200px;

        @include vw-xl-down {
            margin-left: 30px;
        }

        @include vw-lg-down {
            display: none;
        }
        
        
        &__icon {
            height: 20px;
            margin-right: 8px;
        }
    }

    .offCanvasButton {
        padding: 0;
        margin: 0;
        border: none;
        background-color: white;
        margin-left: auto;
        margin-right: 20px;

        @include vw-sm-up {
            display: none;
        }
    }
}

.bm-menu {
    background-color: $dim-white;
}
</style>
