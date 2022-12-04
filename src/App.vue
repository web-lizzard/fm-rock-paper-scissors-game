<script setup lang="ts">
import { GameChoices } from './types';
</script>

<template>
  <div class="app">
    <TheHeader class="container" />
    <main class="container game-board">
      <ChooseButton :choice="GameChoices.lizard" />
      <ChooseButton :choice="GameChoices.scissors" />
      <ChooseButton :choice="GameChoices.spock" />
      <ChooseButton :choice="GameChoices.paper" />
      <ChooseButton :choice="GameChoices.rock" />
    </main>

    <CustomButton class="app__button" />
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

  @include tablet {
    gap: 2rem;
  }
}

.app__button {
  place-self: center;

  @include tablet {
    place-self: end;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
}

.game-board {
  background-image: url(@/assets/images/bg-pentagon.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  display: flex;

  @include tablet {
    background-size: contain;
  }
}
</style>
