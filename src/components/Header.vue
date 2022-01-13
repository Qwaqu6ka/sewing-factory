<template>
    <header>
        <nav class="Nav">
            <div class="Nav_dropdown">
                <a class="Nav_dropbutton Nav_link">
                    <img 
                        class="Nav_img"
                        src="@/assets/icons/products_active.svg" 
                        alt=""
                    >
                    <span class="Nav_text">Номенклатура</span>
                </a>
                <div class="Nav_droplinks">
                    <router-link to="/nomenclature/products">Готовая продукция</router-link>
                    <router-link to="/nomenclature/materials">Материалы</router-link>
                    <router-link to="/nomenclature/accessories">Фурнитура</router-link>
                </div>
            </div>

            <router-link class="Nav_link" to="/orders">
                <div class="Nav_elem">
                    <img 
                        class="Nav_img" 
                        src="@/assets/icons/orders_active.svg" 
                        alt=""
                    >
                    <span class="Nav_text">Заказы</span>
                </div>
            </router-link>
            
            <router-link class="Nav_link" to="/profile">
                <div class="Nav_elem">
                    <img 
                        class="Nav_img" 
                        src="@/assets/icons/profile_active.svg" 
                        alt=""
                    >
                    <span class="Nav_text">Профиль</span>
                </div>
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #FFFCD6;
}

.Nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    &_elem {
        display: flex;
        flex-direction: column;
        align-items: center
    }

    a { 
        font-size: 1.25rem;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        transition: color 0.25s ease-in-out;
    }

    &_img {
        width: 50px;
        margin-bottom: 10px;
        margin-left: 5px;
    }

    /* The container <div> - needed to position the dropdown content */
    &_dropdown {
        position: relative;
        display: inline-block;
    }

    &_dropbutton {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }

    /* Dropdown Content (Hidden by Default) */
    &_droplinks {
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

    &_link {
        &:hover, &:active, &.router-link-active {
            color: #FF6C2E;
        }
    }
}
/* Change color of dropdown links on hover */
.Nav_droplinks a:hover {background-color: #D1EEFC;}

/* Show the dropdown menu on hover */
.Nav_dropdown:hover .Nav_droplinks {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.Nav_dropdown:hover .dropbtn {background-color: #E0A9AF;}
</style>
