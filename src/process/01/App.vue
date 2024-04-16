<template>
    <div>
        <h1>进程间通信</h1>
        <button @click="setTitleHandle">设置标题</button>
    </div>
</template>

<script setup>

const setTitleHandle = () => {
    window.electronAPI.setTitle("change title call");
}

</script>

<style lang="scss" scoped>

</style>