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
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-billing-php-2020-08-08-17_26_30.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-clinician-reply-php-2020-08-08-17_24_46.jpg" class="img img-fluid project-img" />        
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-clinician-message-php-2020-08-08-17_24_56.jpg" class="img img-fluid project-img" />        
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-manage-renewal-requests-php-2020-08-08-17_24_28.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-rx-php-2020-08-08-17_24_08.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-inbox-php-2020-08-08-17_42_39.jpg" class="img img-fluid project-img" />        
        <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-inbox-php-2020-08-08-17_33_20.jpg" class="img img-fluid project-img" />        
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

