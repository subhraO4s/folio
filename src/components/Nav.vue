<template>
  <nav
    class="bg-white border-b border-gray-200 px-1 md:px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
  >
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center">
        <button
          @click="toggleSideBar"
          class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Toggle sidebar</span>
        </button>
        <a href="/" class="flex items-center justify-between mr-4">
          <img src="@/assets/images/siteblaze.jpg" class="mr-3 h-8 rounded" alt="SiteBlaze Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >SiteBlaze</span
          >
        </a>
      </div>
      <div class="flex items-center lg:order-2">
        <div class="mr-4">
          <ThemeSelector />
        </div>
        <button
          type="button"
          class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
        >
          <img
            class="w-8 h-8 rounded-full border-none bg-white"
            :src="imageLink"
            alt="user photo"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import defaultImage from '../assets/images/avatar.jpg'
import ThemeSelector from './ThemeSelector.vue'
import { getAvatar } from '../api/apis'
export default {
  components: {
    ThemeSelector
  },
  data() {
    return {
      imageLink: defaultImage
    }
  },
  methods: {
    async getImage() {
      const resp = await getAvatar()
      if (resp.success) {
        this.imageLink = resp.data.href
        this.$store.dispatch('auth/saveAvatar', this.imageLink)
      }
    },
    toggleSideBar() {
      const element = document.getElementById('drawer-navigation')
      const backdrop = document.getElementById('backdrop')
      document.body.classList.toggle('overflow-hidden')
      backdrop.classList.toggle('hidden')
      if (element.classList.contains('transform-none')) {
        element.ariaModal = false
        element.role = ''
        element.classList.remove('transform-none')
      } else {
        element.classList.add('transform-none')
        element.ariaModal = true
        element.role = 'dialog'
      }
    }
  },
  mounted() {
    this.getImage()
  }
}
</script>
