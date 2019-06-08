<template>
    <div>
        <section class="page-section" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">{{ title }}</h2>
                        <h3 class="section-subheading text-muted">{{ description }}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="timeline">
                            <li :class="story.class" v-for="story in stories">
                                <div class="timeline-image">
                                    <img class="rounded-circle img-fluid" :src="'assets/img/about/'+story.image" alt="">
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>{{ story.title }}</h4>
                                        <h4 class="subheading">{{ story.subtitle }}</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">{{ getDescription }}</p>
                                    </div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <h4>Be Part
                                    <br>Of Our
                                    <br>Story!</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>   
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'About',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            stories: [
                { 
                    title:'2009-2011', 
                    subtitle: 'Our Humble Beginnings',
                    description: ``,
                    class: '',
                    image: '1.jpg'
                },
                { 
                    title:'March 2011', 
                    subtitle: 'An Agency is Born',
                    description: ``,
                    class: 'timeline-inverted',
                    image: '2.jpg'
                },
                { 
                    title:'December 2012', 
                    subtitle: 'Transition to Full Service',
                    description: ``,
                    class: '',
                    image: '3.jpg'
                },
                { 
                    title:'July 2014', 
                    subtitle: 'Phase Thow Expansion',
                    description: '',
                    class: 'timeline-inverted',
                    image: '4.jpg'
                },
            ]
        }
    },
    computed: {
        getDescription(){
            return `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!`
        }
    },
}
</script>

<style lang="css">
    
</style>