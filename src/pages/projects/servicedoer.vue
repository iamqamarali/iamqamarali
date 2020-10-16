<template>
    <div class="project-single page">
        <div class="page-content">

            <h1 class="page-heading ">ServiceDoer</h1>

            <div class="project-company-description" >
                <p >
                    ServiceDoer is a side project that i've been working on and thinking of launching it in near future.
                    My view about servicedoer is to build a platform where people could find local professionals to get things done that can't be done remotely, for example (Wall painting, Tutors for children etc).
                </p>
            </div>        
            <a href="http://servicedoer.com" target="_blank" class="btn btn-outline-primary">Visit Website</a> 
            <a href="https://github.com/iamqamarali/servicedoer" target="_blank" class="btn btn-outline-primary ml-3">Visit Repository</a> 
            <br>
            <br>

            <h3>Technology Stack</h3>
            <div class="technology-stack  poject-detail-section">
                <div class="tags">
                    <span class="tag">Laravel</span>
                    <span class="tag">Mongodb</span>
                    <span class="tag">Vue.js</span>
                    <span class="tag">JavaScript</span>
                    <span class="tag">Bootstrap</span>
                    <span class="tag">Tensorflow.js</span>
                    <span class="tag">Google Cloud Platform (GCP)</span>
                </div>
            </div>

            <img src="/images/projects/servicedoer/Home.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/servicedoer/Serive Providers List.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/servicedoer/Service Provider page.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/servicedoer/Become a doer.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/servicedoer/Become a doer Step 2.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/servicedoer/Subscription page.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/servicedoer/Privider Completiton of order.jpg" class="img img-fluid project-img" />
            

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

