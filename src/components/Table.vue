<script setup>

import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import {useProductsStore} from '../stores/product'
import {useToast} from 'primevue/usetoast';

const toast = useToast();

const {products, error, filteredPrices} = storeToRefs(useProductsStore())
const {fetchProducts} = useProductsStore()
const selectedProduct = ref();

fetchProducts();


//console.log('products =>', products);

const chartData = ref({
  // labels: ['Price', 'Category'],
  datasets: [
    {
      label: 'Product',
      data: filteredPrices,
      backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
      borderWidth: 1,
      tension: 0.1,
    }
  ]
});

const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true
    }
  },
  responsive: true,
});

const onRowSelect = (event) => {
  console.log('event 1:', event.data.title);

  toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.title, life: 3000});
};
const onRowUnselect = (event) => {
  console.log('event 2:', event.data.title);
  toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.title, life: 3000});
}
const reloadPage = () => {
  window.location.reload();
}
</script>

<template>
  <h1 class="title-edit"> 1.Table data edit:</h1>

  <DataTable :value="products"
             v-model:selection="selectedProduct"
             stripedRows
             showGridlines
             paginator
             :rows="10"
             selectionMode="single"
             dataKey="id"
             :metaKeySelection="false"
             :rowsPerPageOptions="[5, 10, 20]"
             tableStyle="min-width: 50rem"
             @rowSelect="onRowSelect"
             @rowUnselect="onRowUnselect">
    <template #header>
      <div class="header">
        <span class="header-title">Products</span>
        <Button icon="pi pi-refresh" rounded raised @click="reloadPage"/>
      </div>
    </template>
    <Column field="id" sortable header="ID"></Column>
    <Column field="price" sortable header="Price"></Column>
    <Column field="title" sortable header="Title"></Column>
    <!--    <Column field="image" header="Image"></Column>-->
    <Column field="category" header="Category"></Column>
    <Column field="description" header="Description"></Column>
    <template #footer> In total there are {{ products ? products.length : 0 }} products.</template>
  </DataTable>

  <div class="card">
    <h1 class="title-chart"> Chart based on first table:</h1>
    <Chart type="bar" :data="chartData" :options="chartOptions"/>
  </div>


</template>

<style lang="scss" scoped>

%titles {
  margin: 20px;
  color: black;
  font-weight: 300;
}
.title-edit {
  @extend %titles;
}

.title-chart {
  @extend %titles;
  text-align: center;
}

.header {
  display: flex;
  align-items: center;
  gap: 25px;

  .header-title {
    font-size: 22px;
    font-weight: 800;
  }
}

.card {
  background-color: white;
  position: relative;
  padding: 50px;
  margin: 0 auto;
}
</style>
