<script lang="ts" setup>
import { useGameState } from '@/stores/game';
import type { GameChoices } from '@/types';
import { storeToRefs } from 'pinia';

const { choices, userChoice } = storeToRefs(useGameState());

const setButtonClass = (index: number) => {
  return `welcome-board__choice-${index + 1}`;
};

const handleChooseOption = (option: GameChoices) => {
  userChoice.value = option;
};
</script>

<template>
  <div class="welcome-board">
    <ChooseButton
      @click="handleChooseOption(choice)"
      :class="setButtonClass(index)"
      v-for="(choice, index) in choices"
      :choice="choice"
      :key="choice"
    />
  </div>
</template>

<style lang="scss" scoped>
.welcome-board {
  background-image: url(@/assets/images/bg-pentagon.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  max-width: 200px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-height: 500px;

  & > * {
    position: absolute;
  }

  @include mobile {
    max-width: 300px;
  }

  @include tablet {
    max-width: 400px;
  }

  @include desktop {
    margin-top: 6rem;
  }

  &__choice-1 {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);

    @include mobile {
      top: -10%;
    }

    @include tablet {
      top: 0%;
    }
  }

  &__choice-2 {
    left: -10%;
    top: 45%;
    transform: translateY(-50%);

    @include mobile {
      top: 35%;
    }
  }

  &__choice-3 {
    top: 45%;
    left: 90%;
    transform: translate(-50%, -50%);

    @include mobile {
      top: 35%;
      left: 95%;
    }
  }

  &__choice-4 {
    top: 75%;
    left: 20%;
    transform: translate(-50%, -50%);

    @include mobile {
      top: 85%;
    }

    @include tablet {
      top: 80%;
    }
  }

  &__choice-5 {
    left: 80%;
    top: 75%;
    transform: translate(-50%, -50%);

    @include mobile {
      top: 85%;
    }

    @include tablet {
      top: 80%;
    }
  }
}
</style>
