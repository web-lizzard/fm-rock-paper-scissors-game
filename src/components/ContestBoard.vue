<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useGameState } from '@/stores/game';
import { storeToRefs } from 'pinia';

const { computerChoice } = storeToRefs(useGameState());
let timeoutId: number;

onMounted(() => {
  timeoutId = setTimeout(() => {
    useGameState().setComputerChoice();
  }, 6000);
});

onUnmounted(() => clearTimeout(timeoutId));
</script>

<template>
  <div class="container contest-board">
    <div class="contest-board__choices-box">
      <div class="contest-board__choice"></div>
      <div class="contest-board__choice"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contest-board {
  &__choices-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  &__choice {
    height: 90px;
    background-color: $dark-text;
    aspect-ratio: 1;
    border-radius: 50%;

    @include mobile {
      height: 110px;
    }

    @include tablet {
      height: 140px;
    }
  }
}
</style>
