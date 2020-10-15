<template>
    <div class="project-single page">
        
        <div class="page-content">
            <h1 class="page-heading d-inline-block">Caafinancial</h1> 
            <div class="project-company-description" >
                <p><a href="https://caafinancial.com" target="_blank">Caafinancial</a> is an insurance agency from <strong>Aurora, Colorado in USA</strong>. They help people buying insurance policies, they also help insurance companies to find more clients.</p>            
            </div>

            <div class="technology-stack  poject-detail-section">
                <div class="tags">
                    <span class="tag">Laravel</span>
                    <span class="tag">Php</span>
                    <span class="tag">Mongodb</span>
                    <span class="tag">Websocket</span>
                    <span class="tag">Web RTC</span>
                    <span class="tag">Stripe Api</span>
                    <span class="tag">Trello Api</span>
                    <span class="tag">Google Cloud Platform (GCP)</span>
                    <span class="tag">ECMAScript 5</span>
                    <span class="tag">Scss</span>
                    <span class="tag">Bootstrap</span>
                </div>
            </div>

            <div class="project-my-responsibilities poject-detail-section">
                <h3>My Responsibilities</h3>
                <ul>
                    <li>
                        Selected the technology stack by understanding the product and complexity.
                    </li>
                    <li>
                        Software architecture and backend development using laravel framework.
                    </li>
                    <li>
                        Developed the front-end of the website using Bootstrap, Scss and JavaScript
                    </li>
                    <li>
                        Deployed a websocket server and integrated websockets on front-end for realtime communication (web RTC).
                    </li>
                    <li>
                        Database design and architecture (Mongodb).
                    </li>
                    <li>
                        Api development to be consumed by caafinancial automation bot.
                    </li>
                    <li>
                        Api integration (stripe and trello api).
                    </li>
                    <li>
                        Developed a dashboard for employees, front-end and back-end.
                    </li>
                    <li>
                        Deployment and testing on Google Cloud Platform (GCP).
                    </li>
                    <li>
                        Server administration and managing clout services.
                    </li>
                    <li>
                        Setting up a CICD (continuous integration and continuous deployment) pipeline.
                    </li>
                </ul>

                This project was really a deal breaker for me, i've learned sooooo much while developing and going through this project that i wouldn't ever have learnet. Now i see myself as a much profound developer.
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
            
            <img src="/images/projects/caafinancial/screencapture-caafinancial-2019-08-08-11_35_36.png" class="img img-fluid project-img" />
            <img src="/images/projects/caafinancial/screencapture-caafinancial-insurance-2019-08-09-04_29_15.png" class="img img-fluid project-img" />
            <img src="/images/projects/caafinancial/screencapture-caafinancial-support-2019-08-09-08_11_26.png" class="img img-fluid project-img" />
            <img src="/images/projects/caafinancial/screencapture-caafinancial-taxes-accounting-2019-08-13-20_52_48.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/caafinancial/screencapture-caafinancial-login-2019-08-09-08_11_48.png" class="img img-fluid project-img" />
            <img src="/images/projects/caafinancial/screencapture-caafinancial-dashboard-2019-08-09-08_13_30.png" class="img img-fluid project-img" />
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

