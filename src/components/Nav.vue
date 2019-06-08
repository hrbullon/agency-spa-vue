<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">{{ text_logo }}</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
        </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item" v-for="menu in menus">
                            <a class="nav-link js-scroll-trigger" :href="menu.url">{{ menu.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text_logo: 'Start Bootstrap',
            menus: [
                { url: '#services', text:'Services' },
                { url: '#portfolio', text:'Porfolio' },
                { url: '#about', text:'About' },
                { url: '#team', text:'Team' },
                { url: '#contact', text:'Contact' }                                        
            ]
        }
    },    
}
</script>

<style lang="css">
    
</style>