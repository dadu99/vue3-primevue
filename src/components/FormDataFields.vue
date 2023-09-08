<script setup>
    import {ref, onMounted} from 'vue'
    const visible = ref(false);
    const props = defineProps(['data'])

    console.log('data =>', props.data);
   
  
</script>

<template>
  <Button label="Show" icon="pi pi-external-link" @click="visible = true" style="margin-top: 5px;"/>

    <Dialog v-model:visible="visible" modal maximizable header="Form data fields" :style="{ width: '50vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
            <p>Name: {{ data.name}}</p>
            <p>Mail address: {{ data.email }}</p>
            <p>City choose: {{ data.city.name }}</p>
            <p>Address: {{ data.address }}</p>
            <p>My hobbies are : {{ data.hobbies }}</p>
            <p v-html="data.description"></p>
            <p>Favorite pizza ingredients: {{ data.pizza }}</p>
            <p>Height: {{ data.height }} kg </p>
            <p>Weight: {{ data.weight }} cm</p>
            <p>Phone number {{ data.phone }}</p>
            <p>Category: {{ data.category }}</p>
            <p>My favourite city is: {{ data.favouriteCity.label }}</p>
    </Dialog>

 
</template>

<style lang="scss" scoped>
p {
  font-size: 1.1em;
}

</style>