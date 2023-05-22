<template>
    <section class="c-section c-section--home">
        <div class="c-hero">
            <div class="c-wrapper">
                <div class="d-md-flex align-items-center justify-content-center">
                    <div class="c-hero__content">
                        <h1 class="c-hero__title text-center text-center text-md-start">
                            Lightweight, scalable animations 
                            <span>for your</span>
                            <div class="c-hero__title-animation">
                                <span>docs</span>       
                                and
                                <span>pitches</span>
                            </div>
                        </h1>
                        <p class="c-hero__text text-center text-md-start">
                            LottieFiles takes away the complexity from 
                            Motion Design. It lets you Create, Edit, Test, 
                            Collaborate and Ship a Lottie in the easiest 
                            way possible
                        </p>
                        <div class="text-center text-md-start mb-5">
                            <a href="" class="c-button c-button--primary">
                                Get Started 
                                <span> - It's Free</span>     
                            </a>
                        </div>
                    </div>
                    <div class="c-hero__ilustration">
                        <figure>
                            <img class="w-100" src="@/assets/images/hero-ilus.png" alt="">
                        </figure>
                    </div>
                </div>
            </div>
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
