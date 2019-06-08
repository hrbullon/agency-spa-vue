<template>
    <div>
        <section class="bg-light page-section" id="team">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">{{ title }}</h2>
                        <h3 class="section-subheading text-muted">{{ description }}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4" v-for="member in members" :key="member.id">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" :src="member.image" alt="">
                            <h4>{{ member.name }}</h4>
                            <p class="text-muted">{{ member.text }}</p>
                            <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <p class="large text-muted">{{ paragraph }}</p>
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
            title: 'Our Amazing Team',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            members: [
                { name: 'Kay Garland', text: 'Lead Designer', image: 'assets/img/team/1.jpg' },
                { name: 'Larry Parker', text: 'Lead Marketer', image: 'assets/img/team/2.jpg' },
                { name: 'Diana Pertersen', text: 'Lead Developer', image: 'assets/img/team/3.jpg' }
            ],
            paragraph: `Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aut eaque, laboriosam veritatis, 
                        quos non quis ad perspiciatis, totam corporis ea, alias ut unde.`
        }
    },
}
</script>
