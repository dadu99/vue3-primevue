<script setup>
    import {ref} from 'vue'
    import FormDataFields from './FormDataFields.vue';
    const formData = ref([]);
    const showData = ref(false);

    const cities =  ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);

    const groupedCities = ref([
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
]);
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);


function validateField(value) {
    if (!value) {
        return 'Fields are required.';
    }
    return true;
}

function onSubmit ()  {
    console.log("Form submitted with data:", formData.value);
    showData.value = true;
  
};
</script>

<template>

   <!---- <InputText type="text" v-model="value" placeholder="Type name" size="normal"/> -->

  
    <form @submit.prevent="onSubmit">
        <div class="form-content-first">
            <span class="p-float-label">
                <InputText id="name" v-model="formData.name" type="text" size="normal" />
                <label for="name">Name</label>
            </span>

            <span class="p-float-label">
                <InputText size="big" id="email" v-model="formData.email" type="email" />
                <label for="email">Email</label>
            </span>
        </div>

        <div class="form-content-second">
            <span class="p-float-label">
                <Textarea v-model="formData.address" rows="5" cols="52"></Textarea>
                <label for="address">Complete address</label>
            </span>
            
            <div class="city-and-chips mt-4">
                <Dropdown v-model="formData.city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />

            <span class="p-float-label">
                <Chips id="chips" v-model="formData.hobbies"  />
                <label for="chips">Your Hobbies</label>
             </span> 
            </div>
           
        </div>

        <div class="card flex flex-wrap justify-content-center gap-3 p-3 mt-2">
            <div class="flex align-items-center">
                <Checkbox v-model="formData.pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2"> Cheese </label>
            </div>
            <div class="flex align-items-center">
                <Checkbox v-model="formData.pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2"> Mushroom </label>
            </div>
            <div class="flex align-items-center">
                <Checkbox v-model="formData.pizza" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2"> Pepper </label>
            </div>
            <div class="flex align-items-center">
                <Checkbox v-model="formData.pizza" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2"> Onion </label>
            </div>
        </div>

        <div class="form-content-first">
            <span class="p-float-label">
                <InputNumber id="height" v-model="formData.height" inputId="integeronly" />
                <label for="height">Height (cm)</label>
            </span>

            <span class="p-float-label">
                <InputNumber id="weight" v-model="formData.weight" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100"/>
                <label for="weight">Weight (kg)</label>
            </span>
            <span class="p-float-label">
            <InputMask id="basic" v-model="formData.phone" mask="07-99999999" placeholder="07-999999" />
            <label for="basic">Phone Number</label>
        </span>
        </div>

        <div class="card flex justify-content-center p-2 mt-3">
        <label for="basic">Please select where you want to travel next summer:</label>
        <Listbox v-model="formData.favouriteCity" :options="groupedCities" filter optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-14rem" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Listbox>
    </div>

    <div class="card flex justify-content-center p-2 mt-4">
        <div class="flex flex-column gap-3">
            <p>Select a category:</p>
            <div v-for="category in categories" :key="category.key" class="flex align-items-center">
                <RadioButton v-model="formData.category" :inputId="category.key" name="pizza" :value="category.name" />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>

        <div class="description-section">
            <p>Tell us in some few words a self personality description :)</p>
             <Editor v-model="formData.description" editorStyle="height: 320px" />  
        </div>

        <p class="mt-4">Give a rating according to PRIME_VUE components:</p>
        <Rating v-model="formData.rating" :stars="10" />

        <div class="mt-4">
            <label class="p-3">How much love vue js as front-end framework?</label>
            <Slider v-model="formData.slider" :step="20" class="w-14rem" />
        </div>


        <div class="button-for-submit">
            <Button type="submit" label="Submit" severity="success" /> 
        </div>
    </form>

    <FormDataFields :data="formData" v-if="showData"></FormDataFields>

   
</template>

<style lang="scss" scoped>
.form-content-first, .city-and-chips {
    display: flex;
    gap: 4px;
   
}
.button-for-submit, .form-content-second, .form-content-first, .description-section {
        padding-top: 25px;
}

</style>