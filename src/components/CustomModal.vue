<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{ (e: 'close'): void }>();
</script>

<template>
  <teleport v-if="isOpen" to="body">
    <div
      role="dialog"
      @click.self="emit('close')"
      @keydown="emit('close')"
      tabindex="0"
      class="custom-modal"
    >
      <div class="custom-modal__content-box">
        <header class="custom-modal__header">
          <h3 class="custom-modal__heading" id="dialog-label">Title</h3>
          <button @click="emit('close')" class="custom-modal__close-button">
            <img src="@/assets/images/icon-close.svg" alt="close" />
          </button>
        </header>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($dark-text, 0.5);

  &__header {
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.2rem;
  }

  &__close-button {
    padding: 0;
    background: transparent;
    border: 0;
    outline: 1px solid red;
    cursor: pointer;
    padding: 1rem;
  }

  &__content-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 20rem;
    min-height: 10rem;
    background-color: white;
  }
}
</style>
