<template>
  <section class="p-0">
    <div class="grid grid-cols-6 bg-white md:mt-0 xl:p-0 dark:bg-gray-800">
      <div class="col-span-full lg:col-start-2 lg:col-span-4 pb-4">
        <h1 class="pb-1">{{ title }}</h1>
        <h4 class="pb-4">{{ abstract }}</h4>
        <div v-html="details"></div>
      </div>
      <div class="col-span-full lg:col-start-2 lg:col-span-4 flex justify-between pb-4">
        <div>
          <a
            href="#"
            @click="goBack"
            type="button"
            class="inline-flex text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              fill="currentColor"
              class="w-4 h-4 mr-2 -ml-1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              ></path>
            </svg>
            Back
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Publish
            <svg
              fill="currentColor"
              class="w-4 h-4 ml-2 -mr-1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
              ></path>
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      title: 'addContent/getTitle',
      abstract: 'addContent/getAbstract',
      details: 'addContent/getDetails'
    })
  },
  methods: {
    goBack() {
      this.$emit('goback')
    }
  }
}
</script>
