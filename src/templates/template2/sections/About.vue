<template>
  <section class="center" id="about">
    <div class="about">
      <div class="about-top">
        <div>
          <h4 class="color-primary mb-4" v-if="data.topHeading.show">
            {{ data.topHeading.value }}
          </h4>
          <h1 class="mb-4" v-if="data.title.show">{{ data.title.value }}</h1>
        </div>
        <div>
          <h4 class="mt-10 mb-4 color-secondary" v-if="data.deatils.show">
            {{ data.deatils.value }}
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
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    AboutUsCards
  }
}
</script>
