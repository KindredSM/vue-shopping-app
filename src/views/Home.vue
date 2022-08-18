<template>
  <div class="home">
    <product-description-drawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer"
    />
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import items from "../data/items.js";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
import productDescriptionDrawer from "../components/products/ProductDescriptionDrawer.vue";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    productDescriptionDrawer,
  },

  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>

<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
