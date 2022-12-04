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
  height: 100px;
  aspect-ratio: 1;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  cursor: pointer;

  @include desktop {
    height: 150px;
  }

  &::before {
    content: '';
    box-shadow: 0px -10px 12px -9px rgba(77, 77, 106, 0.8);
    height: 75%;
    aspect-ratio: 1;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
  }

  &--rock {
    background-color: rgba(225, 63, 93, 255);
    &::before {
      background-image: url(@/assets/images/icon-rock.svg);
    }
  }

  &--scissors {
    background-color: rgba(237, 163, 29, 255);
    &::before {
      background-image: url(@/assets/images/icon-scissors.svg);
    }
  }

  &--spock {
    background-color: rgba(78, 188, 209, 255);
    &::before {
      background-image: url(@/assets/images/icon-spock.svg);
    }
  }

  &--paper {
    background-color: rgba(83, 112, 243, 255);
    &::before {
      background-image: url(@/assets/images/icon-paper.svg);
    }
  }

  &--lizard {
    background-color: rgba(143, 92, 230, 255);
    &::before {
      background-image: url(@/assets/images/icon-lizard.svg);
    }
  }
}
</style>
