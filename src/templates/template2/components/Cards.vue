<template>
  <div class="about-us-card">
    <div>
      <img
        v-if="cardType == 'blog'"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />
      <img v-else src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </div>
    <h3 class="mb-4">Search Engine Optimization</h3>
    <h5 class="mb-4 color-secondary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequatP
    </h5>
    <a href="" class="explore-link">
      <span v-if="cardType == 'blog'"> 5min Read</span>
      <span v-else>Explore More</span>
      ->
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cardType: {
      type: String,
      default: 'services'
    },
    title: {},
    details: {}
  }
}
</script>
