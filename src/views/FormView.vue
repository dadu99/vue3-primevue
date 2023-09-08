<script setup>
import FormFields from '../components/FormFields.vue';

  
</script>

<template>
   <div class="form-fields-components">
    <h1 class="title-form">Form fields components</h1>
    <FormFields></FormFields>
    <FormData :formData="formData"></FormData>
   </div>
 
</template>

<style lang="scss" scoped>
.form-fields-components {
    padding: 44px;
    background-color: white;

    .title-form{
        text-align: center;
        margin: 20px 0;
    }
}
</style>

