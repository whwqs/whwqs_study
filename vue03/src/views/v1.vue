<template>
    <div>v1: {{time}} rnd:{{rnd}}</div>
</template>
<script>
export default {
    data(){
        return {
            time:new Date(),
            rnd:Math.random()
        }
    }
}
</script>

