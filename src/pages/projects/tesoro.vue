<template>
    <div class="project-single page">
        
        <div class="page-content">
            <h1 class="page-heading">Tesoro</h1>
            <p class="project-company-description">
                For <a href="https://tesoro.pk" target="_blank">Tesoro.pk</a> i've developed the complete front-end using vue.js. 
                It was a great experience for me creating a fully functional front-end template in vue.js. After this, i think my front-end development skills have improved immensely.
            </p>

            <a href="https://tesoro.pk" target="_blank" class="btn btn-outline-primary">Visit Website</a>

            <div class="technology-stack  poject-detail-section">
                <div class="tags">
                    <span class="tag">Nuxt.js</span>
                    <span class="tag">Vue.js</span>
                    <span class="tag">Bootstrap</span>                
                    <span class="tag">Scss</span>                
                    <span class="tag">JavaScript</span>
                    <span class="tag">AWS</span>
                </div>
            </div>


            <br/>
            <img src="/images/projects/tesoro/screencapture_tesoro_rHS6k.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/tesoro/screencapture_tesoro_s8MHX.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/tesoro/screencapture_tesoro_F9qNL.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/tesoro/screencapture_tesoro_Bo0pC.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/tesoro/screencapture_tesoro_oKDRI.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/tesoro/screencapture_tesoro_MYsuS.jpg" class="img img-fluid project-img" />

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

