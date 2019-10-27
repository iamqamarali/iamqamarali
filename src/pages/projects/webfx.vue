<template>
    <div class="project-single page">
        
        <h1 class="page-heading">WebFx</h1>
        <div class="project-company-description" >
            <p>WebFx is a SEO company, whose experties are to increase local search rankings of companies.</p>
        </div>

        <div class="technology-stack  poject-detail-section">
            <h3>Technology Stack</h3>
            <div class="tags">
                <span class="tag">PHP</span>
                <span class="tag">Web Scraping</span>
                <span class="tag">Scripting</span>
                <span class="tag">Mongodb</span>
                <span class="tag">HTML5</span>
                <span class="tag">CSS3</span>
            </div>
        </div>

        <div class="project-my-responsibilities poject-detail-section">
            <h3>My Responsibilities</h3>
            <p>
                Webfx do seo analysis of their clients by using another service. They didn't wanted their customers to see 
                their SEO reports on that other service which is why they asked me scrap their customer's 
                reports from that website and put it on theirs.
            </p>
        </div>
        
        <img src="/images/projects/webfx/screencapture-finalsite-herokuapp-scanned-reports-abrahamjoshua-0014000000gyz2d-2019-08-18-09_14_36.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/webfx/screencapture-finalsite-herokuapp-scanned-reports-2019-08-18-09_13_01.jpg" class="img img-fluid project-img" />
        
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

