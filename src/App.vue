<script setup lang="ts"></script>

<template>
  <div class="app">
    <TheHeader class="container" />
    <main class="container game-board">
      <div>Game Board</div>
    </main>

    <CustomButton class="app__button" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: relative;
  padding: 3rem 2rem 2rem;
  min-height: 100vh;
  display: grid;
  gap: 4rem;
  grid-auto-rows: max-content;

  @include tablet {
    gap: 2rem;
  }
}

.app__button {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  @include tablet {
    left: auto;
    right: 2rem;
    transform: translate(0);
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.game-board {
  max-width: 800px;
  margin: 0 auto;
}
</style>
