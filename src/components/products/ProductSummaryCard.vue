<template>
  <div class="card">
    <h3>{{ product.name }}</h3>

    <h5 class="price">Price: £{{ product.price.toFixed(1) }}</h5>
    <p class="description">Description: {{ description }}</p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">
      View Product
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 20px;
  background-color: white;

  h5.price {
    color: rgb(56, 56, 56);
  }

  p.description {
    font-size: 0.85rem;
  }

  p.text-muted {
    color: gray;
  }
}

button.view-product-button {
  padding: 10px;
  background-color: rgb(255, 167, 95);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: rgb(255, 151, 65);
  }
}
@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>
