<template>
    <div class="sidebar ">
        <router-link to="/home" class="sidebar-logo">
            <img class="logo" src="/images/logo.png" alt="Qamar Ali">
            Qamar
        </router-link>

        <ul class="sidebar-main-menu vertical-nav ">
            <li class="nav-item" v-for="(route, index) in routes" :key="index">
                <router-link :to="{ name: route.name}" class="nav-link" >   
                    <i :class="' route-icon '+route.icon "></i>
                    <span class="route-text"> {{ route.name }} </span>
                </router-link>
            </li> 
        </ul>

        <ul class="sidebar-social-menu vertical-nav">
            <li class="nav-item" v-for="(social, index) in socialLinks" :key="index">
                <a :href="social.url" target="_blank" class="nav-link" >   
                    <i :class="' route-icon '+social.icon"></i>
                </a>
            </li> 
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        data(){
            return {
                routes :[
                    {name: 'home', icon :'ti-home'},
                    {name: 'work', icon :'ti-eye'},
                    {name: 'about', icon :'ti-user'},
                    {name: 'skills', icon :'ti-settings'},
                    {name: 'contact', icon :'ti-email'}
                 ],
                 socialLinks:[
                    {icon: 'ti-github' , url: 'https://github.com/iamqamarali'},
                    {icon: 'ti-stack-overflow' , url: 'https://stackoverflow.com/users/8663952/qamar-ali'},
                    {icon:'ti-twitter-alt' , url:'https://twitter.com/iamqamarali'},
                    {icon: 'ti-facebook' , url: 'https://www.facebook.com/iamqamarali0'}
                 ]
            }
        }
    }
</script>

<style >

</style>