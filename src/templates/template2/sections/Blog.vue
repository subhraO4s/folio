<template>
  <section class="center template-section" id="blog">
    <div>
      <div class="home">
        <h1>Our Regular Updated Blog Posts</h1>
        <div></div>
      </div>
      <div class="about-bottom mt-16">
        <AboutUsCards />
        <AboutUsCards />
        <AboutUsCards />
      </div>
    </div>
  </section>
</template>

<script>
import AboutUsCards from '../components/Cards.vue'
export default {
  components: {
    AboutUsCards
  }
}
</script>
