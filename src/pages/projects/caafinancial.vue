<template>
    <div class="project-single page">
        
        <h1 class="page-heading">Caafinancial</h1>
        <div class="project-company-description" >
            <p>Caafinancial is an insurance agency from <strong>Aurora, Colorado in USA</strong>. They help people to take better decisions while buying insurance policies, they also help insurance companies by finding and providing them more clients.</p>            
        </div>

        <a href="http://caafinancial.com" target="_blank" class="btn btn-outline-primary website-link">Visit Website</a>

        <div class="technology-stack  poject-detail-section">
            <h3>Technology Stack</h3>
            <div class="tags">
                <span class="tag">Laravel</span>
                <span class="tag">Mongodb</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Sass</span>
                <span class="tag">Html5</span>
                <span class="tag">Css3</span>
                <span class="tag">JQuery</span>
                <span class="tag">Php</span>
                <span class="tag">API Development</span>
                <span class="tag">Google Cloud Services</span>
            </div>
        </div>

        <div class="project-my-responsibilities poject-detail-section">
            <h3>My Responsibilities</h3>
            <ul>
                <li>
                    <p>
                        For caafinancial first i was hired to do <b>Full stack development</b> for their products,
                        but i ended up doing the building, testing, deploying, managing and almost everything from development to devOps for their products.  
                    </p>
                </li>
                <li>
                    <p>
                        First i created their main website which you can <a href="https://caafinancial.com" target="_blank">checkout here.</a> 
                        Then i built a <a href="https://caafinancial.com/login" target="_blank">dashboard</a> for their employees to manage insurance automation and assist their customers.
                    </p>
                </li>
                <li>
                    <p>
                        They had a windows bot which automates the insurance process, 
                        so i also developed a <b>REST API</b> for them so the bots can connect to the backend.
                    </p>
                </li>
                <li>
                    <p>Finally i step a <b>CICD pipeline </b> for the project and deployed it on <b>GCP (Goodle Cloud Platform)</b> </p>
                </li>
                <li>
                    <p>
                        I think the main challenge with this project was the automation part, 
                        we've to trigger the bots through the dashboard and also trigger backend scripts through the bot, there was alot of backend and forth communication with alot of data.
                        <br>
                        It was a very good experience for me working on this project, one of the best i should say.
                    </p>
                </li>
            </ul>
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

