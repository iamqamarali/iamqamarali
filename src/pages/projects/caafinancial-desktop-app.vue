<template>
    <div class="project-single page">
        
        <h1 class="page-heading d-inline-block">Caafinancial</h1> <span class="ml-3">(Desktop App Development)</span>
        <div class="project-company-description" >
            <p>This is a Desktop application that i build on <strong>Electron Framework</strong> for caafinancial. 
            They wanted to have a software like their web dashboard that their employees can install on their system to manage automation of insurances easily.</p>
        </div>


        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag">Electron Framework</span>
                <span class="tag">Node.js</span>
                <span class="tag">Vue.js</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Css3</span>
                <span class="tag">HTML5</span>
            </div>
        </div>

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

        <img src="/images/projects/caafinancial-employee/screencapture-app-caafinancial-customers-5d2f5e04ec7a672d41426a92-named-insured-2019-08-09-03_44_21.png" class="img img-fluid project-img" />
        <img src="/images/projects/caafinancial-employee/screencapture-app-caafinancial-customers-5d2f5e04ec7a672d41426a92-new-policy-2019-08-09-03_44_36.png" class="img img-fluid project-img" />
        <img src="/images/projects/caafinancial-employee/screencapture-app-caafinancial-customers-5d2f5e04ec7a672d41426a92-quotes-2019-08-08-11_42_48.png" class="img img-fluid project-img" />
        
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

