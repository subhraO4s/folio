<template>
  <section class="center template-section" id="blog">
    <div>
      <div class="home">
        <h1>Our Regular Updated Blog Posts</h1>
        <div></div>
      </div>
      <div class="about-bottom mt-16">
        <template v-if="isTemplate">
          <AboutUsCards docId="1" />
          <AboutUsCards docId="2" />
          <AboutUsCards docId="3" />
        </template>
        <template v-else>
          <div v-if="loading">
            <Spinner />
          </div>
          <div v-else>
            <AboutUsCards
              v-for="(el, index) in postData"
              :img="el.img"
              :title="el.title"
              :details="el.abstract"
              :docId="el.$id"
              :key="index"
            />
          </div>
        </template>
      </div>
      <div class="mt-4 center">
        <Button label="Explore More Blogs" />
      </div>
    </div>
  </section>
</template>

<script>
import AboutUsCards from '../components/Cards.vue'
import { getBlogs } from '@/api/apis'
import Spinner from '../../../components/Spinner.vue'
export default {
  components: {
    AboutUsCards,
    Spinner
  },
  data() {
    return {
      loading: true,
      isTemplate: this.$route.meta.isTemplate,
      postData: []
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      let resp = await getBlogs((limit = 3))
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
