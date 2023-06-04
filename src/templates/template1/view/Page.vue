<template>
  <Nav />
  <div class="container vh100">
    <Main />
    <About />
    <Details />
    <Mission />
    <Footer />
  </div>
</template>

<script>
import '../assets/style.css'
import Main from '../sections/Main.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import About from '../sections/About.vue'
import Blog from '../sections/Blog.vue'
import Details from '../sections/Details.vue'
import Mission from '../sections/Mission.vue'

export default {
  components: {
    Main,
    Nav,
    Footer,
    About,
    Blog,
    Details,
    Mission
  }
}
</script>
