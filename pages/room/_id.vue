<script setup>
const route = useRoute();
const router = useRouter();
</script>

<template>
  <h2>房型詳細頁面 {{ route.fullPath }}</h2>

  <button @click="router.go(-1)">回上一頁</button>
</template>

<style scoped></style>
