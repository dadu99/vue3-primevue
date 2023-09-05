<script setup>

import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import {useProductsStore} from '../stores/product'

const {products, error, filteredPrices} = storeToRefs(useProductsStore())
const {fetchProducts} = useProductsStore()

fetchProducts();

console.log('products for edit =>', products);

const editingRows = ref([]);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value);
}
const onRowEditSave = (event) => {
  let { newData, index } = event;
  console.log('event on edit', event);
  console.log(products.value[index]);
  products.value[index] = newData;
};

</script>

<template>
  <h1>2.Table with row edit:</h1>

  <div class="card p-fluid">
    <DataTable v-model:editingRows="editingRows"
               :value="products"
               editMode="row"
               stripedRows
               showGridlines
               dataKey="id"
               @row-edit-save="onRowEditSave"
               tableClass="editable-cells-table"
               tableStyle="min-width: 30rem">
      <Column field="id" header="ID" style="width: 2%" aria-disabled="true"></Column>
      <Column field="description" header="Description" style="width: 20%">
        <template #editor="{ data, field }">
          <p>{{data[field]}}</p>
          <InputText v-model="data[field]"/>
        </template>
      </Column>
      <Column field="price" header="Price" style="width: 3%">
        <template #body="{ data, field }">
          {{ formatCurrency(data[field]) }}
        </template>
        <template #editor="{ data, field }">
          <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US"/>
        </template>
      </Column>
      <Column :rowEditor="true" style="width: 2%; min-width: 8rem" bodyStyle="text-align:center"></Column>
    </DataTable>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
h1 {
  margin: 20px;
  color: white;
}
</style>
