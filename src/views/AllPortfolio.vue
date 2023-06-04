<template>
  <section class="p-4 md:ml-64 h-auto pt-20">
    <div class="rounded-lg mb-4">
      <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
        All Published Portfolios
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">All Published Portfolios</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 mt-4">
        <Card
          title="Noteworthy technology acquisitions 2021"
          details="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
          leftButtonText="View"
          rightButtonText="Edit"
        />
        <Card
          title="Noteworthy technology acquisitions 2021"
          details="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
          leftButtonText="View"
          rightButtonText="Edit"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>
