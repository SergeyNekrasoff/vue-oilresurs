<template>
    <a-col class="header">
        <app-logo />
    </a-col>
</template>

<script>
const appLogo = () => import('@/components/UI/AppLogo')

export default {
    components: { appLogo }
}
</script>

<style lang="scss" scoped>
.header {
    padding: 16px 0;
}
</style>