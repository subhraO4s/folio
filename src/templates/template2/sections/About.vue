<template>
  <section class="center template-section" id="about">
    <div class="about">
      <div class="about-top">
        <div>
          <h4 class="color-primary mb-4" v-if="data.topHeading.show">
            {{ data.topHeading.value }}
          </h4>
          <h1 class="mb-4" v-if="data.title.show">{{ data.title.value }}</h1>
        </div>
        <div>
          <h4 class="mt-10 mb-4 color-secondary" v-if="data.deatils.show">
            {{ data.deatils.value }}
          </h4>
        </div>
      </div>
      <div class="about-bottom mt-16">
        <template v-if="isTemplate">
          <AboutUsCards docId="1" />
          <AboutUsCards docId="2" />
          <AboutUsCards docId="3" />
        </template>
        <template v-else>
          <template v-if="loading">
            <Spinner />
          </template>
          <template v-else>
            <AboutUsCards
              v-for="(el, index) in postData"
              :img="el.img"
              :title="el.title"
              :details="el.abstract"
              :docId="el.$id"
              :key="index"
            />
          </template>
        </template>
      </div>
      <div class="mt-4 center">
        <Button @click="showBlogsView" label="Explore More Blogs" />
      </div>
    </div>
  </section>
</template>

<script>
import { getBlogs } from '@/api/apis'
import AboutUsCards from '../components/Cards.vue'
import Button from '../components/Button.vue'
import Spinner from '../../../components/Spinner.vue'
export default {
  components: {
    AboutUsCards,
    Button,
    Spinner
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      isTemplate: this.$route.meta.isTemplate,
      postData: []
    }
  },
  methods: {
    showBlogsView() {
      this.$router.push(this.$route.fullPath + '/blogs')
    },
    async fetchData() {
      this.loading = true
      let resp = await getBlogs('', 3)
      if (resp.success) {
        this.postData = resp.data.documents
      }
      this.loading = false
    },
    initialize() {
      if (!this.isTemplate) {
        this.fetchData()
      }
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
