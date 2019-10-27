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
                <span class="tag">Php</span>
                <span class="tag">JavaScript</span>
                <span class="tag">JQuery</span>
                <span class="tag">Sass</span>
                <span class="tag">Css3</span>
                <span class="tag">Html</span>
                <span class="tag">API Development</span>
                <span class="tag">Google Cloud Services</span>
            </div>
        </div>

        <div class="project-my-responsibilities poject-detail-section">
            <h3>My Responsibilities</h3>
            <ul>
                <li>
                    <p>
                         For this project my responsibilities were to developed front-end. back-end and everything of their <a href="https://caafinancial.com" target="_blank">main website</a>, i choose to use <strong>Laravel</strong> for their backend.
                        i also developed a <a href="https://caafinancial.com/login" target="_blank">dashboard</a> for their customers and one <a href="http://app.caafinancial.com" target="_blank">employee dashboard</a> so their employees can do different stuff to help their customers.
                    </p>
                </li>
                <li>
                    <p>
                        I saw that they have aloooooooot of data so i choose to use <strong>MongoDB</strong> as the DB with <strong>Google Cloud Storage</strong> for storing files etc.
                    </p>
                </li>
                <li>
                    <p>
                        They had a windows bot which they use to find customer's previous insurance history data from different resources, so another part of project was to build an <strong>API</strong> and so BOT can communicate with the backend.
                    </p>
                </li>
                <li>
                    <p>
                        It was a pretty huge project, and specially the database part, all the different parts of the software were connected to the same backend a centerialized datacenter for main site, customer dashboard, employee dashboard and the API.
                        They were also planning to use AI for predicting insurance policy prices provided by different companies that was one another thing i had to take into consideration while structuring the database. 
                    </p>
                </li>   
                <li> 
                    <p>
                        At the end i also installed a VM for them did deployment on the server and did all of the server administration.
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

