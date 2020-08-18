<template>
    <div class="home page">
         <div class="my-info"> 
            <h1 class="hello-heading page-heading">
                Hello, <br> 
                My name is Qamar Ali.
            </h1>
            <div class="work-title">Full Stack Web Developer</div>
            <div class="cta-text">
                I work with startups and brands to help them launch their digital products and website,
                I also write about my experiences and knowledge on <a href="https://medium.com/@iamqamarali" taret="_blank">medium</a>.
            </div>                
        </div>

        <div class="contact-cta">
            <img src="/images/home-background-graphic.svg" alt="" class="background-graphic">
            <router-link :to="{name : 'contact'}" class="contact-link">
                <img src="/images/home-contact.svg" alt="" class="contact-circle">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass">

</style>