<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20">
    <div
      v-if="stage == 1"
      class="flex flex-col items-center justify-center gap-8"
      style="height: calc(100vh - 100px)"
    >
      <div class="grid grid-cols-4 w-4/5">
        <div class="col-span-full pb-8">
          <div class="space-y-4 md:space-y-6">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"
            >
              Please Enter Project Details
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="project-title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Project Title</label
                >
                <input
                  type="text"
                  name="project-title"
                  id="project-title"
                  v-model="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Noteworthy technology acquisitions 2021"
                />
              </div>
              <div>
                <label
                  for="project-abstract"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Project Abstract</label
                >
                <textarea
                  name="project-abstract"
                  id="project-abstract"
                  v-model="abstract"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div class="col-span-full pb-8">
          <label
            for="project-details"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Project Details</label
          >
          <Editor v-model="details" />
        </div>
        <div class="col-start-2 col-span-2">
          <button
            type="submit"
            @click="submitDetails"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <Preview @goback="moveToPreviousStage" />
    </div>
  </section>
</template>

<script>
import Card from '../components/CmsCard.vue'
import Editor from '../components/Editor/Editor.vue'
import Preview from './ProjectPreview.vue'
export default {
  components: {
    Card,
    Editor,
    Preview
  },
  data() {
    return {
      stage: 1,
      title: '',
      abstract: '',
      details: ''
    }
  },
  methods: {
    submitDetails() {
      this.$store.dispatch('addContent/saveAllData', this.generateData())
      this.moveToNextStage()
    },
    moveToNextStage() {
      this.stage++
    },
    moveToPreviousStage() {
      this.stage--
    },
    generateData() {
      return {
        title: this.title,
        abstract: this.abstract,
        details: this.details
      }
    }
  }
}
</script>
