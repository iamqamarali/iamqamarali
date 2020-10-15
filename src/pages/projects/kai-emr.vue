<template>
    <div class="project-single page">
        
        <div class="page-content">
            <h1 class="page-heading">KAI EMR (Oscar Pro)</h1>
            <p class="project-company-description">
                Kai EMR is an (Electronic Medical Record) system by 
                <a href="https://www.kaiinnovations.com/" target="_blank">Kai innovations</a>.
                For KAI EMR i developed the <b>Front End</b> of the EMR system. On this project i worked in collaboration with a UI designer from Ontario, Canada.
            </p>

            <div class="technology-stack  poject-detail-section">
                <div class="tags">
                    <span class="tag">Bulma Framework</span>
                    <span class="tag">Quill.js</span>
                    <span class="tag">Scss</span>                
                    <span class="tag">JavaScript</span>
                    <span class="tag">Webpack</span>
                </div>
            </div>


            <div class="project-responsibilities poject-detail-section">
                <h3>My Responsibilities</h3>

                <ul>
                    <li>
                        Developed the front-end of EMR system using Bulma, Scss and JS.
                    </li>
                    <li>
                        Created reusable CSS3 components to be used anywhere inside or outside of the project.
                    </li>
                    <li>
                        Created a rich WYSIWYG editor using Quill.js and styled it to match the overall theme of website.
                    </li>
                </ul>

                The main challenge was keeping the code modular and making UI components reusable throughout the project.

            </div>

            <!-- <br/>
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-billing-php-2020-08-08-17_26_30.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-clinician-reply-php-2020-08-08-17_24_46.jpg" class="img img-fluid project-img" />        
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-clinician-message-php-2020-08-08-17_24_56.jpg" class="img img-fluid project-img" />        
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-manage-renewal-requests-php-2020-08-08-17_24_28.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-rx-php-2020-08-08-17_24_08.jpg" class="img img-fluid project-img" />
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-inbox-php-2020-08-08-17_42_39.jpg" class="img img-fluid project-img" />        
            <img src="/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-inbox-php-2020-08-08-17_33_20.jpg" class="img img-fluid project-img" />         -->

        </div> 


        <!-- images grid -->
        <div class="project-images-grid ">
            <div class="row">
                <div class="col-lg-6">
                    <a href="http://kai-oscar-emr.herokuapp.com/billing.php" target="_blank" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-billing-php-2020-08-08-17_26_30.jpg')">
                            <div class="img-hover-box">

                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6">
                    <a href="http://kai-oscar-emr.herokuapp.com/manage-renewal-requests.php" target="_blank" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-manage-renewal-requests-php-2020-08-08-17_24_28.jpg')">
                            <div class="img-hover-box">
                                
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6">
                    <a href="http://kai-oscar-emr.herokuapp.com/inbox.php" target="_blank" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-inbox-php-2020-08-08-17_42_39.jpg')">
                            <div class="img-hover-box">
                                
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6">
                    <a href="http://kai-oscar-emr.herokuapp.com/rx.php" target="_blank" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-rx-php-2020-08-08-17_24_08.jpg')">
                            <div class="img-hover-box">
                                
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6">
                    <a href="http://kai-oscar-emr.herokuapp.com/clinician/message.php" target="_blank" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-clinician-message-php-2020-08-08-17_24_56.jpg')">
                            <div class="img-hover-box">
                                
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-lg-6">
                    <a href="http://kai-oscar-emr.herokuapp.com/clinician/compose.php" target="_blank" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-clinician-reply-php-2020-08-08-17_24_46.jpg')">
                            <div class="img-hover-box">
                                
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6">
                    <a href="" class="preview-box">
                        <div class="project-img" style="background-image:url('/images/projects/kai-emr/screencapture-prototypes-freshcontrast-oscar-pages-inbox-php-2020-08-08-17_33_20.jpg')">
                            <div class="img-hover-box">
                                
                            </div>
                        </div>
                    </a>
                </div>
            </div>

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

