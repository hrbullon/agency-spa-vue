<template>
    <section class="bg-light page-section" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">{{ title }}</h2>
                    <h3 class="section-subheading text-muted">{{ description }}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid"  v-bind:src="obj.img" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>{{ obj.caption }}</h4>
                        <p class="text-muted">{{ obj.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        title: 'Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        portfolioJSON: [
            {
                img: 'assets/img/portfolio/01-thumbnail.jpg',
                caption: 'Threads',
                title: 'Illustration'
            },
            {
                img: 'assets/img/portfolio/02-thumbnail.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: 'assets/img/portfolio/03-thumbnail.jpg',
                caption: 'Finish',
                title: 'Identity'
            },
            {
                img: 'assets/img/portfolio/04-thumbnail.jpg',
                caption: 'Lines',
                title: 'Branding'
            },
            {
                img: 'assets/img/portfolio/05-thumbnail.jpg',
                caption: 'Southwest',
                title: 'Website Design'
            },
            {
                img: 'assets/img/portfolio/06-thumbnail.jpg',
                caption: 'Window',
                title: 'Photography'
            }    
        ]
    })
}
</script>