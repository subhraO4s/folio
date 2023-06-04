<template>
  <section class="center" id="about">
    <div class="about">
      <div class="about-top">
        <div>
          <h4 class="color-primary mb-4">What we do</h4>
          <h1 class="mb-4">Grwow your business with us and see the imapct</h1>
        </div>
        <div>
          <h4 class="mt-10 mb-4 color-secondary">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </h4>
        </div>
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
