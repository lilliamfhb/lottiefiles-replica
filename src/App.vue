<template>
  <component :is="this.$route.meta.layout || 'div' ">
    <router-view></router-view>
  </component>
</template>

<script>

export default {
  name: 'App',
}
</script>
