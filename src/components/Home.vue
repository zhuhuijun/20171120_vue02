<template>
    <div>{{this.msg}}
        <h1>欢迎大家</h1>
    </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
    div {
        background: blue;
    }
    div
        h1
          background green
</style>

<script>
    export default {
        data() {
            return {
                msg: '首页'
            }
        }
    }
</script>
