<template>
    <div class="home page">
         <div class="my-info"> 

            
            <div class="hi-text">
                Hi, my name is
            </div>
            <h1 class="cta-title page-heading">
                Qamar Ali. </br> 
                <span class="cta-subtitle">I build things for the web.</span>
            </h1>
            <div class="work-title">Full Stack Web Developer</div>
            <div class="about-text">
                I'm a Full Stack Developer based in Lahore, Pakistan specializing is building exceptional websites, applications, and everything in between.
                <br>
                <br>
                <!-- I work with startups and companies to help them launch their digital products and website. -->
            </div>

            <router-link :to="{name : 'contact'}" class="btn  btn-outline-primary">
                Get In Touch
            </router-link>

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