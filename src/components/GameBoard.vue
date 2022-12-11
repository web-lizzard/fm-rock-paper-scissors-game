<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGameState } from '@/stores/game';

const { isWelcomeState } = storeToRefs(useGameState());
</script>

<template>
  <main class="game-board">
    <WelcomeBoard v-if="isWelcomeState" />
    <ContestBoard v-else />
  </main>
</template>

<style lang="scss" scoped></style>
