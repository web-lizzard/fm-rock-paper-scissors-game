<script lang="ts" setup>
import { GameChoices } from '@/types';
import { computed } from 'vue';

interface Props {
  choice: GameChoices;
}

const props = withDefaults(defineProps<Props>(), {
  choice: GameChoices.scissors,
});

defineEmits<{ (e: 'click', choice: GameChoices): void }>();

const choiseModifier = computed(() => {
  const { choice } = props;

  switch (choice) {
    case GameChoices.lizard:
      return 'choice-button--lizard';
    case GameChoices.paper:
      return 'choice-button--paper';
    case GameChoices.rock:
      return 'choice-button--rock';
    case GameChoices.spock:
      return 'choice-button--spock';
    case GameChoices.scissors:
    default:
      return 'choice-button--scissors';
  }
});
</script>

<template>
  <button
    @click="$emit('click', choice)"
    :class="['choice-button', choiseModifier]"
  />
</template>

<style lang="scss" scoped>
.choice-button {
  border-radius: 50%;
  height: 90px;
  aspect-ratio: 1;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;

  cursor: pointer;

  @include mobile {
    height: 110px;
  }

  @include tablet {
    height: 140px;
  }

  &::before {
    background-image: linear-gradient(
      to bottom,
      rgba(194, 197, 211, 1) 1%,
      rgba(231, 233, 229, 1) 10%
    );
    content: '';
    height: 75%;
    aspect-ratio: 1;
    position: absolute;
    border-radius: 50%;
  }
  &::after {
    content: '';
    height: 75%;
    aspect-ratio: 1;
    position: absolute;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &--rock {
    background-color: rgba(225, 63, 93, 255);

    &::after {
      background-image: url(@/assets/images/icon-rock.svg);
    }
  }

  &--scissors {
    background-color: rgba(237, 163, 29, 255);

    &::after {
      background-image: url(@/assets/images/icon-scissors.svg);
    }
  }

  &--spock {
    background-color: rgba(78, 188, 209, 255);

    &::after {
      background-image: url(@/assets/images/icon-spock.svg);
    }
  }

  &--paper {
    background-color: rgba(83, 112, 243, 255);

    &::after {
      background-image: url(@/assets/images/icon-paper.svg);
    }
  }

  &--lizard {
    background-color: rgba(143, 92, 230, 255);

    &::after {
      background-image: url(@/assets/images/icon-lizard.svg);
    }
  }
}
</style>
