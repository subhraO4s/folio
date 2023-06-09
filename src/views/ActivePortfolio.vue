<template>
  <section class="p-4 md:ml-64 h-auto pt-20">
    <div class="rounded-lg mb-4">
      <div v-if="!isEditMode">
        <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
          Active Protfolio
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Following is you active portfolio, this is visible to the world
        </p>
        <div class="flex flex-row-reverse mb-4 mt-4">
          <button
            @click="toggleEditMode"
            class="max-md:w-full max-md:justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Site Settings
            <svg
              fill="currentColor"
              class="w-4 ml-1 -mr-1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-1 mb-4 mt-4">
          <PortfolioViewerVue :src="activePortfolioLink" />
        </div>
      </div>
      <div v-else>
        <template v-if="loadingData">
          <SpinnerVue />
        </template>
        <template v-else>
          <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
            Edit Active Protfolio
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Following is you active portfolio, you can make changes using the site builder given
            below, and see the preview, once your happy hit the <b>save</b> button and let the world
            see the changes.
          </p>
          <div class="flex justify-between mb-4 mt-4">
            <button
              @click="toggleEditMode"
              class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                fill="currentColor"
                class="w-4 mr-1"
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
              Cancel
            </button>
            <button
              @click="toggleEditMode"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Changes
              <svg
                fill="currentColor"
                class="w-4 ml-1 -mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="grid grid-cols-1 mb-4 mt-4">
            <PortfolioViewerVue :src="templateLink" />
          </div>
          <div>
            <Accordion v-model="data" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { getActivePortfolio } from '../api/apis'
import { templateDetails } from '@/utils/templateUtil'
import { LOCALSTORAGE_KEY, EDITMODE_LOCALSTORAGE_KEY } from '../utils/constants'
import ToggleVue from '../components/Toggle.vue'
import Accordion from '../components/EditAccordion.vue'
import PortfolioViewerVue from '../components/PortfolioViewer.vue'
import Tab from '../components/Tab.vue'
import SpinnerVue from '../components/Spinner.vue'
export default {
  components: {
    ToggleVue,
    Accordion,
    PortfolioViewerVue,
    Tab,
    SpinnerVue
  },
  data() {
    return {
      loadingData: false,
      isEditMode: false,
      templateLink: '',
      data: {}
    }
  },
  computed: {
    ...mapGetters({
      userName: 'auth/getUserName'
    }),
    activePortfolioLink() {
      return '/portfolio/' + this.userName
    }
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode
      window.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, this.isEditMode)
      if (this.isEditMode) {
        this.setLocalStorage()
      }
    },
    setLocalStorage() {
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.data))
    },
    async getAndSetActivePortFolioData() {
      this.loadingData = true
      let resp = await getActivePortfolio()
      if (resp.success) {
        resp = resp.data.documents.shift()
        const tid = resp.tid
        const content = JSON.parse(resp.content)
        this.templateLink = templateDetails.find((el) => el.tid == tid).templateLink
        this.data = content
      }
      this.loadingData = false
    }
  },
  watch: {
    data: {
      handler: function (new_value, old_value) {
        this.setLocalStorage()
      },
      deep: true
    }
  },
  mounted() {
    window.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, 'false')
    this.getAndSetActivePortFolioData()
  },
  beforeUnmount() {
    window.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, 'false')
  }
}
</script>
