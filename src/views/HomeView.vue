<template>
  <div class="table">
    <Table></Table>
  </div>

  <div class="table-edit">
    <TableWithEdit></TableWithEdit>
  </div>
</template>


<script setup>
import Table from '../components/Table.vue'
import TableWithEdit from "@/components/TableWithEdit.vue";
</script>

<style scoped>
h3 {
  color: black;
}
</style>
