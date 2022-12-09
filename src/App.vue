<script setup lang="ts">
import { useElementOpen } from './composables/use-element-open';

const { handleElementClose, handleElementOpen, isElementOpen } =
  useElementOpen();
</script>

<template>
  <div class="app">
    <TheHeader class="container" />
    <GameBoard />
    <CustomButton class="app__button" @click="handleElementOpen" />
    <CustomModal
      :isOpen="isElementOpen"
      @close="handleElementClose"
      @open="handleElementOpen"
    >
      modal
    </CustomModal>
  </div>
</template>

<style lang="scss" scoped>
.app {
  padding: 3rem 2rem 2rem;
  min-height: 100vh;
  display: grid;
  gap: 4rem;
  grid-template-rows: min-content 1fr min-content;
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));

  @include desktop {
    gap: 2rem;
  }
}

.app__button {
  place-self: center;

  @include desktop {
    place-self: end;
  }
}
</style>
