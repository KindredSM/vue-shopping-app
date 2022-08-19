<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
      <!-- remove items -->
      <div class="button-container">
        <button class="remove" @click="removeFromCart()">-</button>
        <button class="add" @click="addToCart()">+</button>
      </div>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },

  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  margin: 0 auto;
  margin: 5%;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-around;
}
</style>
