<template>
    <div>
        <div>hello,world!</div>
        <Home></Home>
    </div>

</template>
<style>
div{
    background: red;
}
</style>

<script>
    import Home from './components/Home.vue';

    export default {
        components: {Home}
    }
</script>
