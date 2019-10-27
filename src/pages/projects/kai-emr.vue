<template>
    <div class="project-single page">
        
        <h1 class="page-heading">KAI EMR</h1>
        <p class="project-company-description">Kai innovations is a SAAS company, they provide, physicians and doctors a EMR (Electronic Medical Record) system which they can use to keep track of their patients acconts etc more efficiently </p>

        <a href="http://kaiinnovations.com" target="_blank" class="btn btn-outline-primary website-link">Visit Website</a>
        <br>
        <br>

        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag">Css3</span>
                <span class="tag">Sass</span>                
                <span class="tag">Html5</span>
                <span class="tag">JavaScript</span>
                <span class="tag">jQuery</span>
                <span class="tag">Git</span>
                <span class="tag">Webpack</span>
             </div>
        </div>


        <div class="project-responsibilities poject-detail-section">
            <h3>My Responsibilities</h3>
            <p>For KAI EMR system i was supposed to develop front-end of the EMR system. I worked on this project in collaboration with a UI designer. The main challenge of this project was that the UI components has to be build in a way that all the UI components could be reused any where again.</p>
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
        <br/>
        <img src="/images/projects/kai/screencapture-localhost-kai-billing-php-2019-08-14-16_52_59.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai/screencapture-localhost-kai-inbox-php-2019-08-14-16_52_34.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai/screencapture-localhost-kai-lab-queue-php-2019-08-14-16_55_17.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai/screencapture-localhost-kai-booking-clinic-settings-php-2019-08-14-16_53_31.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai/kai 1.JPG" class="img img-fluid project-img" />
        <img src="/images/projects/kai/kai 2.JPG" class="img img-fluid project-img" />        
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

