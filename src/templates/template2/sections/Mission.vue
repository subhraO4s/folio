<template>
  <section class="center template-section" id="mission" v-if="data.show">
    <div class="home">
      <div class="home-left">
        <h4 class="color-primary mb-4" v-if="data.topHeading.show">{{ data.topHeading.value }}</h4>
        <h1 class="mb-4" v-if="data.title.show">{{ data.title.value }}</h1>
        <h4 class="mb-4 color-secondary" v-if="data.deatils.show">
          {{ data.deatils.value }}
        </h4>
        <Button v-if="data.ctaButton.show" :label="data.ctaButton.value" />
      </div>
      <div class="home-right">
        <img :src="data.image.value" :alt="data.topHeading.value" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  components: {
    Button
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
