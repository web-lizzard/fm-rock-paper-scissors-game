<script lang="ts" setup>
import { computed } from 'vue';
import { useShockWaveAnimation } from '@/composables/use-shock-wave-animation';

interface Props {
  light?: boolean;
  big?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{ (e: 'click'): void }>();

const {
  isAnimationRunning,
  shockWavePosition,
  handleShockWaveAnimationEnd,
  handleShockWaveAnimationStart,
} = useShockWaveAnimation();

const sizeModifier = computed(() => props.big && 'custom-button--big');
const alternateColorModifier = computed(
  () => props.light && 'custom-button--light'
);

const handleClickButton = (event: MouseEvent) => {
  handleShockWaveAnimationStart(event);
  emit('click');
};
</script>

<template>
  <button
    @click="handleClickButton"
    @animationend="handleShockWaveAnimationEnd"
    :class="['custom-button', sizeModifier, alternateColorModifier]"
  >
    <slot>Rules</slot>
    <span
      v-if="isAnimationRunning"
      :style="shockWavePosition"
      class="custom-button__shock-wave"
    />
  </button>
</template>

<style lang="scss" scoped>
.custom-button {
  $self: &;

  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  background: transparent;
  color: #d9dde8;
  border: 2px solid $header-outline;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }

  &--light {
    background: #d9dde8;
    color: $dark-text;

    #{$self}__shock-wave {
      background-color: $dark-text;
    }
  }

  &--big {
    padding: 0.5rem 4rem;
  }

  &__shock-wave {
    position: absolute;
    width: 80%;
    aspect-ratio: 1;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    animation: shock-wave 0.3s ease-in-out;
    opacity: 0.3;
  }

  @keyframes shock-wave {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }

    90% {
      transform: translate(-50%, -50%) scale(1);
    }

    100% {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
}
</style>
