<template>
    <div class="project-single page">
        
        <h1 class="page-heading ">ServiceDoer</h1>

        <div class="project-company-description" >
            <p >
                ServiceDoer is a side project that i've been working on and thinking of launching it in near future.
                My view about servicedoer is to build a platform where people could find local professionals to get things done that can't be done remotely, for example (Wall painting, Tutors for children etc).
            </p>
            <p>
                My goal with this project is to build a very user friendly interface. I'm also planning to use ML(Machine Learning) to provide users an estimate cost according to their requried work.
            </p>
        </div>


        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag">Node.js</span>
                <span class="tag">Mongodb</span>
                <span class="tag">Vue.js</span>
                <span class="tag">Sass</span>                
                <span class="tag">Machine learning</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Tensorflow.js (Google ML library)</span>
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

        <img src="/images/projects/servicedoer/home – 1.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/servicedoer/Sign in.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/servicedoer/Signup.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/servicedoer/Pro login profile.jpg" class="img img-fluid project-img" />
        <img src="/images/projects/servicedoer/Hire questions.jpg" class="img img-fluid project-img" />
        
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

