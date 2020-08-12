<template>
    <div class="project-single page">
        
        <h1 class="page-heading ">Localworker</h1>

        <div class="project-company-description" >
            <p >
                Localworker is another side project that i've been working on.
                My view about localworker is to build a platform where people could find local professionals to get things done that can't be done remotely, for example (Wall painting, Tutors for children etc).
            </p>
        </div>        
        <a href="https://github.com/iamqamarali/localworkers" target="_blank" class="btn btn-outline-primary ml-3">Visit Repository</a> 
        <br>
        <br>
    
        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag">Laravel</span>
                <span class="tag">Mongodb</span>
                <span class="tag">Vue.js</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Css3</span>
                <span class="tag">HTML5</span>
            </div>
        </div>
        <br/>

        <!--  slider -->
        <!-- 
        <div class="project-images">
            <div class="project-images-slider">
                <div class="slide"  v-for="(img, index) in project.images" :key="index">
                    <img :src="img" alt="" class="img img-fluid"
                    style="width: 100%">
                </div>
            </div>
        </div>
        -->

        <img src="/images/projects/localworker/home – 1.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/localworker/pros-service-event-photographer-new-york – 1.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/localworker/Pro login profile.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/localworker/Signup.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/localworker/signup-wizard-personal-info – 2.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/localworker/signup-wizard-personal-info – 3.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/localworker/signup-wizard-profile.jpg" class="img img-fluid project-img" />

        
    </div>
</template>

<script>
 import {tns} from 'tiny-slider/src/tiny-slider';
    export default {
        data(){
            return {
            }
        },
        mounted(){
        //    this.initSlider()
        },
        methods:{
            initSlider(){
                let slider = tns({
                    container: '.project-images-slider',
                    items: 1,
                    slideBy: 'page',
                    autoplay: true,
                    autoplayTimeout: 3000,
                    speed: 500,
                    navPosition: 'bottom',
                    autoplayHoverPause: true,
                    mode :'carousel',
                    controlsText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
                });
            }
        }
    }
</script>

