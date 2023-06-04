<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20">
    <div class="pb-4 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Blogs</div>
    <div>
      <TableTop />
      <Table />
    </div>
  </section>
</template>

<script>
import Table from '../components/Table.vue'
import TableTop from '../components/TableTop.vue'
export default {
  components: {
    Table,
    TableTop
  }
}
</script>
