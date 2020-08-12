<template>
    <div class="project-single page">
        
        <h1 class="page-heading ">Enno</h1>

        <div class="project-company-description" >
            <p >
                Enno is a PHP based small web application development framework which gives developers a much reliable project structure, fast development time and scalability. 
            </p>
            <p>
                From time to time some of my clients used to ask me that they don't want any framework to be used in their project, they wanted to have code in plain PHP.
                So i thought why not create a small web framework which could save me from the hassle of always starting out from scratch.
                That's why i developed this framework so me and other developers can use it to lessen their development time. 
            </p>
            <p>It can be used by anyone and is suitable for moderate level of php based applications.</p>
        </div>

        <a href="https://github.com/iamqamarali/Eeno" target="_blank" class="btn btn-outline-primary">Visit Repository</a>

        
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

