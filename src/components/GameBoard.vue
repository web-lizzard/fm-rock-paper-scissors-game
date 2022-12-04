<script setup lang="ts">
import { GameChoices } from '@/types';

const handleChooseOption = (option: GameChoices) => {
  console.log(option);
};
</script>

<template>
  <main class="container game-board">
    <ChooseButton
      @click="handleChooseOption"
      class="game-board__choice-1"
      :choice="GameChoices.lizard"
    />
    <ChooseButton
      @click="handleChooseOption"
      class="game-board__choice-2"
      :choice="GameChoices.scissors"
    />
    <ChooseButton
      @click="handleChooseOption"
      class="game-board__choice-3"
      :choice="GameChoices.spock"
    />
    <ChooseButton
      @click="handleChooseOption"
      class="game-board__choice-4"
      :choice="GameChoices.paper"
    />
    <ChooseButton
      @click="handleChooseOption"
      class="game-board__choice-5"
      :choice="GameChoices.rock"
    />
  </main>
</template>

<style lang="scss" scoped>
.game-board {
  background-image: url(@/assets/images/bg-pentagon.svg);
  max-height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 20px));
  grid-template-rows: repeat(auto-fill, 20%);
  padding-top: 4rem;

  @include tablet {
    background-size: 500px;
    max-height: 60vh;
  }

  @include desktop {
    background-size: 500px;
  }

  &__choice-1 {
    grid-column: 2/5;
    grid-row: 1/3;
    place-self: center;
  }

  &__choice-2 {
    grid-column: 1/3;
    grid-row: 2/4;
    place-self: center;
  }

  &__choice-3 {
    grid-column: 4/6;
    grid-row: 2/4;
    place-self: center;
  }

  &__choice-4 {
    grid-row: 3/5;
    grid-column: 1/3;
    place-self: center;

    @include tablet {
      place-self: end end;
    }
  }

  &__choice-5 {
    grid-row: 3/5;
    grid-column: 4/6;
    place-self: center;

    @include tablet {
      place-self: end start;
    }
  }
}
</style>
