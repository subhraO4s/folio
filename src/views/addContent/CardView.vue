<template>
  <section class="p-0">
    <div class="flex justify-center items-center h-full p-8">
      <Card :image="img" :title="title" :details="abstract" />
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  props: {
    img: {
      type: String,
      defaut: ''
    },
    title: {
      type: String,
      defaut: ''
    },
    abstract: {
      type: String,
      defaut: ''
    }
  },
  components: {
    Card
  }
}
</script>
