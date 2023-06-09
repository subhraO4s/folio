<template>
  <template v-if="loadingTemplate">
    <div class="flex justify-center items-center w-screen h-screen">
      <SpinnerVue />
    </div>
  </template>
  <template v-else>
    <template v-if="dataLoadFailed">
      <div>We couldn't load the data</div>
    </template>
    <template v-else>
      <template v-if="tid == 1">
        <Template1 :pageData="pageContent" />
      </template>
    </template>
  </template>
</template>

<script>
import { getUserIdFromUserName, getProtfolioDocument } from '@/api/apis'
import { defineAsyncComponent } from 'vue'
import SpinnerVue from '../components/Spinner.vue'
export default {
  components: {
    SpinnerVue,
    Template1: defineAsyncComponent(() => import('../templates/template2/view/Page.vue'))
  },
  data() {
    return {
      tid: -1,
      uid: -1,
      loadingTemplate: true,
      dataLoadFailed: false,
      pageContent: ''
    }
  },
  methods: {
    async fetchUserDetails() {
      this.loadingTemplate = true
      const userName = this.$route.params.id
      const docId = this.$route.params.doc
      let resp = await getUserIdFromUserName(userName)
      if (resp.success) {
        resp = resp.data
        this.$store.dispatch('auth/saveUserId', resp.uid)
        this.uid = resp.uid
        resp = await getProtfolioDocument(docId)
        if (resp.success) {
          if (resp.data.uid != this.uid) {
            this.dataLoadFailed = true
          } else {
            resp = resp.data
            this.pageContent = JSON.parse(resp.content)
            this.tid = 1
          }
        } else {
          this.dataLoadFailed = true
        }
      } else {
        this.dataLoadFailed = true
      }
      this.loadingTemplate = false
    }
  },
  beforeMount() {
    this.fetchUserDetails()
  }
}
</script>
