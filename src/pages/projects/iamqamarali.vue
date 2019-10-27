<template>
    <div class="project-single page">
        
        <h1 class="page-heading">Iamqamarali</h1>
        <p class="project-company-description" >
            This is my portfolio website and all of its designing and development is done by me.
            It's a <a href="https://dzone.com/articles/what-is-a-single-page-application">SPA(Single Page Application)</a> 
            built in <strong>Vue.js</strong>.
        </p>


        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag">Vue.js</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Sass</span>
                <span class="tag">Css3</span>
                <span class="tag">Html</span>
                <span class="tag">Spa (Single Page Application)</span>                
                <span class="tag">Adobe XD</span>                
            </div>
        </div>


        <img src="/images/projects/iamqamarali/screencapture-iamqamarali-herokuapp-2019-08-18-09_21_01.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/iamqamarali/screencapture-iamqamarali-herokuapp-about-2019-08-18-09_22_08.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/iamqamarali/screencapture-iamqamarali-herokuapp-skills-2019-08-18-09_22_21.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/iamqamarali/screencapture-iamqamarali-herokuapp-work-2019-08-18-09_22_48.jpg" class="img img-fluid project-img" />
        
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

