<template>
  <section class="p-4 md:ml-64 h-auto pt-20">
    <!-- <FileUpload /> -->
    <!-- <InputWithFileUploader /> -->
  </section>
  <DashboardShell />
</template>

<script>
import DashboardShell from '../components/DashboardShell.vue'
import FileUpload from '@/components/FileUploader/FileUpload.vue'
import InputWithFileUploader from '../components/FileUploader/InputWithFileUploader.vue'
import { getFileUrlBaseOnFileId } from '@/api/apis'
export default {
  components: {
    DashboardShell,
    FileUpload,
    InputWithFileUploader
  },
  methods: {
    async test() {
      const res = await getFileUrlBaseOnFileId('648340e04093ee2df870')
      console.log(res.data.href)
    }
  },
  mounted() {
    this.test()
  }
}
</script>
