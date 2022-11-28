export const useShockWaveAnimation = () => {
  const shockWavePosition = reactive({
    top: '50%',
    left: '50%',
  });
  const isAnimationRunning = ref(false);

  const handleShockWaveAnimationStart = (event: MouseEvent) => {
    const { offsetY, offsetX } = event;
    shockWavePosition.left = `${offsetX}px`;
    shockWavePosition.top = `${offsetY}px`;
    isAnimationRunning.value = true;
  };

  const handleShockWaveAnimationEnd = () => {
    isAnimationRunning.value = false;
  };

  return {
    shockWavePosition,
    isAnimationRunning,
    handleShockWaveAnimationEnd,
    handleShockWaveAnimationStart,
  };
};
