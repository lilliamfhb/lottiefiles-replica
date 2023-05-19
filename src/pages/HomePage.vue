<template>
    <section class="c-section c-section--home">
        <div class="c-wrapper">
            Home from vuex: {{title}}
            <button @click="modi('aaaaaa')">mofigicar</button>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'HomePage',
    props: {
        msg: String
    },
    computed: {
        ...mapState(['title'])
    },
    methods: {
        ...mapActions(['modificarAction']),
        modi(text) {  
            this.modificarAction(text)
        }
    }
}
</script>
