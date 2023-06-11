<template>
  <div class="flex flex-col justify-center items-center">
    <img src="@/assets/images/no-results.png" alt="" />
    <div class="text-md font-semibold">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'No Results Found'
    }
  }
}
</script>
