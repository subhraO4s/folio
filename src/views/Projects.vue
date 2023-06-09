<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20">
    <div class="pb-4 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
      Projects
    </div>
    <div>
      <div class="mb-8 mt-8 flex justify-between">
        <Dropdown v-model="status" />

        <router-link
          to="/dashboard/cms/projects/add"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Project
          <svg
            fill="currentColor"
            class="w-4 ml-1 -mr-1"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
            ></path>
          </svg>
        </router-link>
      </div>
      <Table
        v-model="selected"
        :tableData="tableData"
        :tableKeys="tableKeys"
        :headers="headers"
        @edit="enterEditMode"
        @delete="removeProject"
      />
    </div>
  </section>
</template>

<script>
import Table from '../components/Table.vue'
import Dropdown from '../components/Dropdown.vue'
import { getProjects, deleteProject } from '@/api/apis'
import { STATUS_ENUM } from '../utils/constants'
export default {
  components: {
    Table,
    Dropdown
  },
  data() {
    return {
      selected: [],
      headers: ['Title', 'Abstract', 'Publish Date', 'Status', 'Actions'],
      tableData: [],
      tableKeys: ['title', 'abstract', 'published_on', 'status'],
      status: undefined
    }
  },
  methods: {
    async getData() {
      const resp = await getProjects(STATUS_ENUM.ONLINE)
      this.tableData = resp.data.documents
    },
    enterEditMode(data) {
      const payload = {
        title: data.title,
        abstract: data.abstract,
        content: data.content,
        documentId: data.$id
      }
      this.$store.dispatch('addContent/saveAllData', payload)
      this.$store.dispatch('addContent/updateEditMode', true)
      this.$router.push('/dashboard/cms/projects/add')
    },
    async removeProject(data) {
      const resp = await deleteProject(data.$id)
      if (resp.success) {
        this.getData()
      }
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
