<template>
    <main>
        <HeaderComponent />
        <router-view></router-view>
        <FooterComponent />

    </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent,
    }
}
</script>
