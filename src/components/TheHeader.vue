<script lang="ts" setup></script>

<template>
  <header class="header">
    <img src="@/assets/images/logo-bonus.svg" alt="logo" />
    <div class="header__score-container">
      <span class="header__score-label">Score</span>
      <span class="header__current-score">13</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  border: 2px solid $header-outline;
  display: flex;
  justify-content: space-between;

  &__score-container {
    display: grid;
    align-items: center;
    background-color: #d9dde8;
    grid-auto-rows: min-content;
    padding: 1rem 2rem;
    place-items: center;
    border-radius: 8px;
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
