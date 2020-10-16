<template>
    <div class="work page">
        <h1 class="page-heading ">Work</h1>
        <p>Here is some of my recent work. </p>
        <div class="projects">
            <div class="row">

                <div class="col-md-6">
                    <router-link to="/project/caafinancial" class="project">
                        <img src="/images/projects/caafinancial/caafinancial.jpg" alt="" class="project-img">
                        <div class="project-title">
                            Caafinancial
                            <small>Full Stack Development </small>    
                        </div>
                        <div class="technology">
                            <span class="mx-2">Laravel</span>
                            <span class="mx-2">Php</span>
                            <span class="mx-2">JS</span>
                            <span class="mx-2">Google Cloud Platform</span>
                        </div>
                    </router-link> <!-- project end -->
                </div> <!-- col end --> 


                <div class="col-md-6">
                    <router-link to="/project/kai-emr" class="project">
                        <img src="/images/projects/kai-emr/kai-emr.jpg" alt="" class="project-img">
                        <div class="project-title">KAI EMR</div>
                        <div class="project-type">Front-end Development</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->

                <div class="col-md-6">
                    <router-link to="/project/tesoro" class="project">
                        <img src="/images/projects/tesoro/tesoro.jpg" alt="" class="project-img">
                        <div class="project-title">Tesoro</div>
                        <div class="project-type">Front-end Development</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->


                <div class="col-md-6">
                    <router-link to="/project/underarmour" class="project">
                        <img src="/images/projects/underarmour/underarmour2.jpg" alt="" class="project-img">
                        <div class="project-title">Underarmour</div>
                        <div class="project-type">Front-end Development</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->


                <div class="col-md-6">
                    <router-link to="/project/iamqamarali" class="project">
                        <img src="/images/projects/iamqamarali/iamqamarali.jpg" alt="" class="project-img">
                        <div class="project-title">iamqamarali</div>
                        <div class="project-type">Front-end Development</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->

                <div class="col-md-6">
                    <router-link to="/project/servicedoer" class="project">
                        <img src="/images/projects/servicedoer/servicedoer.jpg" alt="" class="project-img">
                        <div class="project-title">Service doer</div>
                        <div class="project-type">Full Stack Development - Machine Learning</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->


                <div class="col-md-6">
                    <router-link to="/project/webfx" class="project">
                        <img src="/images/projects/webfx/webfx.jpg" alt="" class="project-img">
                        <div class="project-title">WebFx</div>
                        <div class="project-type">Web Scraping - Backend Development</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->


                <div class="col-md-6">
                    <router-link to="/project/enno" class="project">
                        <img src="/images/projects/php-enno.jpg" alt="" class="project-img">
                        <div class="project-title">Enno - A lightweight Php mvc framework build by me</div>
                        <div class="project-type">Php Development</div>
                    </router-link> <!-- project end -->
                </div> <!-- col end -->

        
                <div class="col-md-6">
                    <a href="https://codepen.io/iamqamarali" target="_blank" class="project">
                        <img src="/images/projects/codepen.jpg" alt="" class="project-img">
                        <div class="project-title">Codepen</div>
                        <div class="project-type">Check out cool front-end work i've done on codepen</div>
                    </a> <!-- project end -->
                </div> <!-- col end -->

                <div class="col-md-6">
                    <a href="https://github.com/iamqamarali"  target="_blank" class="project">
                        <img src="/images/projects/github.jpg" alt="" class="project-img">
                        <div class="project-title">Contribute to open source on github</div>
                        <div class="project-type">Opensource contribution</div>
                    </a> <!-- project end -->
                </div> <!-- col end -->

            </div>

            <div class="text-center m-3">        
                Want to see more? <a href="mailto:iamqamarali1@gmail.com">Email me.</a>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="sass">

</style>