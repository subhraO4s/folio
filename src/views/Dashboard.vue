<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Nav />
    <Sidenav />
    <RouterView />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Sidenav from '../components/Sidenav.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    Sidenav,
    Nav
  }
}
</script>
