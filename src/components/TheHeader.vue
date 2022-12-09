<script lang="ts" setup>
import { computed } from 'vue';
import { useGameState } from '@/stores/game';

const store = useGameState();
const winStreak = computed(() => store.winStreak);
</script>

<template>
  <header class="header">
    <img class="header__img" src="@/assets/images/logo-bonus.svg" alt="logo" />
    <div class="header__score-container">
      <span class="header__score-label">Score</span>
      <span class="header__current-score">{{ winStreak }}</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid $header-outline;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__img {
    display: block;
    max-width: 40%;
    padding: 1rem 0;

    @include tablet {
      max-width: 100%;
    }
  }

  &__score-container {
    display: grid;
    align-items: center;
    background-color: #d9dde8;
    grid-auto-rows: min-content;
    padding: 0.8rem 1.5rem;
    place-items: center;
    border-radius: 8px;

    @include tablet {
      padding: 1rem 2rem;
    }
  }

  &__score-label {
    color: $score-text;
    font-size: fluid(12px, 16px);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &__current-score {
    color: $dark-text;
    font-size: #{fluid(50px, 64px)};
    letter-spacing: 2px;
    line-height: 1;
  }
}
</style>
