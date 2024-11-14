<template>
  <div class="product-card">
    <ProductCardImage :imageSrc="imageSrc" :altText="altText" />
    <ProductCardTitle :title="title">{{ title }}</ProductCardTitle>
    <ProductCardPrice :price="price">{{ price }}</ProductCardPrice>
    <ProductCardButton :buttonText="buttonText">{{ buttonText }}</ProductCardButton>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: String,
  altText: String,
  title: String,
  price: String,
  buttonText: String,
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>