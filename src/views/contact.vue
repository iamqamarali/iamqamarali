<template>
    <div class="contact page">
        <div class="page-content">
            <h1 class="hello-heading page-heading">
            Contact
            </h1>
            <p>Have a project?</p>
            <p>Shoot me an email at <a href="mailto:iamqamarali1@gmail.com">iamqamarali1@gmail.com</a> and lets discuss it.</p>
            <p>Or click to find me on following social platforms and leave a message there.</p>

            <ul class="nav">
                <li class="nav-item"
                v-for="(link, index) in socialLinks" :key="index">
                    <a :href="link.url" class="nav-link"> 
                        <i :class="link.icon"></i>
                    </a>                
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                socialLinks: [
                    {icon:'ti-skype' , url:'https://join.skype.com/invite/cCY7K0wD42SJ'},
                    {icon: 'ti-facebook' , url: 'https://www.facebook.com/iamqamarali1'},
                    {icon: 'ti-github' , url: 'https://github.com/iamqamarali'},
                    {icon: 'ti-stack-overflow' , url: 'https://stackoverflow.com/users/8663952/qamar-ali'},
                ]
            }
        }        
    }
</script>

<style lang="sass">

</style>