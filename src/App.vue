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
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
    flex-grow: 1;
    background-color: white;
    width: 65vw;
}

@function toRem($size) {
    @return $size / 16px * 1rem;
}

.Container {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
