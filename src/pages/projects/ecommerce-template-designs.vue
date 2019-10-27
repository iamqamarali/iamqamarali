<template>
    <div class="project page">
        
        <h1 class="page-heading">Caafinancial</h1>
        <p class="project-company-description" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis .</p>


        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag">Laravel</span>
                <span class="tag">Php</span>
                <span class="tag">Mongodb</span>
                <span class="tag">Vue.js</span>
                <span class="tag">Sass</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Css3</span>
                <span class="tag">Html</span>
                <span class="tag">Google Cloud Services</span>
            </div>
        </div>

        <a href="http://caafinancial.com" class="btn btn-outline-primary website-link">Visit Website</a>

        <div  class="project-problem poject-detail-section">
            <h3>Problem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi odio autem tempora, perspiciatis molestias dicta incidunt quasi dolor asperiores! Facere esse aperiam iure ex modi velit, similique est dolor aliquid.</p>
        </div>

        <div class="project-solution poject-detail-section">
            <h3>Solution</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi odio autem tempora, perspiciatis molestias dicta incidunt quasi dolor asperiores! Facere esse aperiam iure ex modi velit, similique est dolor aliquid.</p>
        </div>

        <div class="project-responsibilities poject-detail-section">
            <h3>My Responsibilities</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi odio autem tempora, perspiciatis molestias dicta incidunt quasi dolor asperiores! Facere esse aperiam iure ex modi velit, similique est dolor aliquid.</p>
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
        <img src="/images/projects/caafinancial/screencapture-caafinancial-insurance-2019-08-09-04_29_15.png" class="img img-fluid" />
        
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

