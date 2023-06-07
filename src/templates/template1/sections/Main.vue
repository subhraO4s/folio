<template>
  <main class="main">
    <div class="home mt-16" id="home">
      <div class="home-left">
        <h4 class="color-primary mb-4">Award winning Company</h4>
        <h1 class="mb-4">Digital Marketing Agency and Design</h1>
        <h4 class="mb-4 color-secondary">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters
        </h4>
        <Button label="Get in touch" />
      </div>
      <div class="home-right">
        <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  components: {
    Button
  }
}
</script>

<style scoped></style>
