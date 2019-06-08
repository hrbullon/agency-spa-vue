<template>
    <div>
        <section class="page-section" id="services">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">{{ title }} </h2>
                        <h3 class="section-subheading text-muted">{{ description }}</h3>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-4" v-for="service in services">
                        <template>
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-stack-1x fa-inverse" :class="service.icon"></i>
                        </span>
                        <h4 class="service-heading">{{ service.title }}</h4>
                        <p class="text-muted">{{ service.text }}</p>
                        </template>
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
            title: 'Services',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            services: [
                { icon: 'fa-shopping-cart', title: 'E-Commerce', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' },
                { icon: 'fa-laptop', title: 'Responsive Design', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' },
                { icon: 'fa-lock', title: 'Web Security', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' }
            ]
        }
    },
}
</script>