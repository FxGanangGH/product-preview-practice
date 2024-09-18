<script setup lang="ts">
import { useProductStore } from "./stores/productStore";
import ProductPerfumePreview from "./components/ProductPerfumePreview.vue";
import { onMounted } from "vue";

const data = useProductStore();

onMounted(() => {
  data.fill();
});
</script>

<template>
  <ProductPerfumePreview />
</template>
