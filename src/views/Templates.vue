<template>
  <section class="p-4 md:ml-64 h-auto pt-20">
    <div class="rounded-lg mb-4">
      <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Templates</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 mt-4">
        <template v-for="(data, index) in templateData" :key="index">
          <Card
            :image="data.img"
            :title="data.title"
            :details="data.details"
            leftButtonText="View"
            rightButtonText="Publish"
            :leftButtonAction="data.leftButtonAction"
            :rightButtonAction="data.rightButtonAction"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '../components/Card.vue'
import TemplateImage1 from '@/assets/images/template-1.png'
export default {
  components: {
    Card
  },
  data() {
    return {
      templateData: [
        {
          name: 'Digital agency',
          title: 'A Digital Design Agency Website',
          details:
            'A digital design agency website with dedicated blog and projects section and an amazing footer',
          img: TemplateImage1,
          leftButtonAction: () => {
            window.open('/portfolio-templates/template-2', '_blank')
          },
          rightButtonAction: () => {
            this.publishTemplate()
          }
        }
      ]
    }
  },
  methods: {
    routeToPage(route) {
      this.$router.push(route)
    },
    publishTemplate() {
      this.routeToPage('/dashboard')
    }
  }
}
</script>
