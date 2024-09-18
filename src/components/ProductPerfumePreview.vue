<template>
  <div
    class="flex size-full min-h-screen items-center justify-center bg-primary-cream px-5"
  >
    <div
      class="flex w-full max-w-product-preview flex-col xl:h-1/2 xl:max-w-screen-sm xl:flex-row xl:rounded-xl xl:bg-white"
    >
      <img
        v-if="!isDesktop"
        class="rounded-t-xl"
        src="/images/image-product-mobile.jpg"
      />
      <img
        v-if="isDesktop"
        class="w-1/2 rounded-l-xl"
        src="/images/image-product-desktop.jpg"
      />
      <div class="flex flex-col gap-y-3 rounded-b-xl bg-white p-8 xl:rounded-tr-xl">
        <span
          class="font-montserrat text-sm uppercase tracking-category text-neutral-gray-blue"
        >
          {{ data.product.category }}
        </span>
        <header
          class="font-fraunces text-3xl font-bold capitalize text-neutral-dark-blue xl:text-4xl"
        >
          {{ data.product.name }}
        </header>
        <p class="font-montserrat text-sm text-neutral-gray-blue xl:mt-3 xl:text-base">
          {{ data.product.description }}
        </p>
        <div class="mt-3 flex items-center gap-x-5">
          <span class="font-fraunces text-3xl font-bold text-primary-cyan xl:text-4xl">
            ${{ data.product.price.discounted }}
          </span>
          <span class="font-montserrat text-sm text-neutral-gray-blue line-through">
            ${{ data.product.price.original }}
          </span>
        </div>
        <button class="mb-2 rounded-lg bg-primary-cyan xl:mt-5">
          <span
            class="flex size-full items-center justify-center gap-x-3 rounded-lg py-4 hover:bg-black/50"
          >
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
            <span class="font-montserrat text-sm font-semibold text-white">
              Add to Cart
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { ref, onMounted, computed } from "vue";

const data = useProductStore();
const currentSize = ref(window.innerWidth);
const isDesktop = computed(() => currentSize.value > 1280);

const checkScreen = () => {
  currentSize.value = window.innerWidth;
  console.log(currentSize.value);
  console.log(isDesktop.value);
};

onMounted(() => {
  window.addEventListener("resize", checkScreen);
});
</script>
