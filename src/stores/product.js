import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
    id: 'product',
    state: () => ({
        products: [],
        filteredPrices: {
            'LESS THAN 500': 0,
            'MORE THAN 500': 0
        },
        error: null
      }),

      actions: {
        async fetchProducts() {
            this.products = []
            try {
              this.products =  await fetch("https://fakestoreapi.com/products")
              .then((response) => response.json())
             // console.log('data table response ->', this.products);
                this.filterByPrice();
            } catch (error) {
              this.error = error
            }
          },
          filterByPrice() {
            //console.log(this.products);
            this.products.forEach(priceRender => {
              //  console.log(priceRender);
             //   console.log(this.filteredPrices);
                if(priceRender.price > 500) {
                    this.filteredPrices['LESS THAN 500'] = this.filteredPrices['LESS THAN 500'] + 1;
                } else {
                    this.filteredPrices['MORE THAN 500'] =   this.filteredPrices['MORE THAN 500'] + 1;
                }
            })
            //  console.log('filtered', this.filteredPrices);
          }
      }
})
