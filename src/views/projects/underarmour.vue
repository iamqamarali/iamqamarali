<template>
    <div class="project-single page">
        
        <div class="page-content">
            <h1 class="page-heading">Underarmour-clone</h1>
            <p class="project-company-description">
                A fun project i did of recreating <a href="https://www.underarmour.com/en-us/" target="_blank">underarmour</a> front-end using vue.js, bootstrap and custom styling.
                In this template i created all the core pages of an ecommerce store like landing page, category page, listing page and product page.
            </p>
            
            <a href="https://github.com/iamqamarali/underarmour-template" target="_blank" class="btn btn-outline-primary">View Repository <span class="ml-2  ti-github"></span> </a>

            <div class="technology-stack  poject-detail-section">
                <div class="tags">
                    <span class="tag">Vue.js</span>
                    <span class="tag">Bootstrap</span>                
                    <span class="tag">Scss</span>                
                    <span class="tag">JavaScript</span>
                    <span class="tag">AWS</span>
                </div>
            </div>


            <br/>
            <img src="/images/projects/underarmour/screencapture_localh_fSGg5.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/underarmour/screencapture_localh_TGay0.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/underarmour/screencapture_localh_HUHzJ.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/underarmour/Webp.net-compress-image.jpg" class="img img-fluid project-img" />
        </div> 

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

