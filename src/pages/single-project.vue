<template>
    <div class="project page">
        
        <h1 class="page-heading">{{ project.title  }}</h1>
        <p class="project-company-description" v-if="project.company_description">{{ project.company_description }}</p>


        <h3>Technology Stack</h3>
        <div class="technology-stack  poject-detail-section">
            <div class="tags">
                <span class="tag" v-for="(technology, index) in project.technologies" :key="index">
                    {{technology}}
                </span>
            </div>
        </div>

        <a :href="project.website_link" class="btn btn-outline-primary website-link">Visit Website</a>

        <div v-if="project.problem" class="project-problem poject-detail-section">
            <h3>Problem</h3>
            {{ project.problem }}
        </div>

        <div v-if="project.solution" class="project-solution poject-detail-section">
            <h3>Solution</h3>
            {{ project.solution }}
        </div>

        <div v-if="project.responsibilities" class="project-responsibilities poject-detail-section">
            <h3>My Responsibilities</h3>

            {{project.responsibilities}}
        </div>
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
        <img src="/images/projects/caafinancial/screencapture-caafinancial-insurance-2019-08-09-04_29_15.png" class="img img-fluid" />
        
    </div>
</template>

<script>
 import {tns} from 'tiny-slider/src/tiny-slider';
    export default {
        data(){
            return {
                project : null,
                projects :[
                    { 
                        id : 1,
                        title: 'Webfx',
                        company_description: 'Webfx does abciasduias dyiaywid iauy siudy oiaw yiuyd io yiuy yuiawydiayiow duiaywdi aiowdyuioaw doiawyd ioa.',
                        technologies:[
                            'Web Scraping',
                            'Data Mining',
                            'Laravel',
                            'SASS',
                            'HTML5 and CSS3'
                        ],
                        images : [
                            '/images/projects/caafinancial/main.jpg',
                            '/images/projects/caafinancial/main.jpg',
                            '/images/projects/caafinancial/main.jpg',
                            '/images/projects/caafinancial/main.jpg',
                            '/images/projects/caafinancial/main.jpg',
                        ],
                        website_link : 'https://webfx.com',
                        problem : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        solution : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        responsibilities : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        type : 'Product Development'
                    },
                    { 
                        id : 2,
                        title: 'Webfx',
                        company_description: 'Webfx does abciasduias dyiaywid iauy siudy oiaw yiuyd io yiuy yuiawydiayiow duiaywdi aiowdyuioaw doiawyd ioa.',
                        technologies:[
                            'Web Scraping',
                            'Data Mining',
                            'Laravel',
                            'SASS',
                            'HTML5 and CSS3'
                        ],
                        images : [
                            '/images/projects/finalsite/client details.jpg',
                            '/images/projects/finalsite/contact listing.jpg',
                            '/images/projects/finalsite/create scanned reports.jpg',
                            '/images/projects/finalsite/scanned report listing.jpg',
                            '/images/projects/finalsite/scanned report.jpg',
                        ],
                        website_link : 'https://webfx.com',
                        problem : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        solution : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        responsibilities : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        type : 'Product Development'
                    },
                    { 
                        id : 3,
                        title: 'Webfx',
                        company_description: 'Webfx does abciasduias dyiaywid iauy siudy oiaw yiuyd io yiuy yuiawydiayiow duiaywdi aiowdyuioaw doiawyd ioa.',
                        technologies:[
                            'Web Scraping',
                            'Data Mining',
                            'Laravel',
                            'SASS',
                            'HTML5 and CSS3'
                        ],
                        images : [
                            '/images/projects/finalsite/client details.jpg',
                            '/images/projects/finalsite/contact listing.jpg',
                            '/images/projects/finalsite/create scanned reports.jpg',
                            '/images/projects/finalsite/scanned report listing.jpg',
                            '/images/projects/finalsite/scanned report.jpg',                            
                        ],
                        website_link : 'https://webfx.com',
                        problem : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        solution : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        responsibilities : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias, voluptatum nihil sit a facilis ex inventore quis, libero at saepe debitis dolorum laboriosam possimus adipisci iure suscipit repudiandae! Adipisci!' ,
                        type : 'Product Development'
                    },
                ]
            }
        },
        created(){
            let projectId = this.$route.params.id

            let project = this.projects.find((p)=>{
                return p.id == projectId
            })
            console.log(project);
            if(!project)
                this.$router.replace({name: 'work'})
            
            this.project = project
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

<style lang="sass">

</style>