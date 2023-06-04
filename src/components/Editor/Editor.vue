<template>
  <QuillEditor
    style="height: 300px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px"
    theme="snow"
    toolbar="essential"
    contentType="html"
    v-model:content="bindValue"
  />
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  components: {
    QuillEditor
  },
  props: { modelValue: null },
  computed: {
    bindValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  }
}
</script>
