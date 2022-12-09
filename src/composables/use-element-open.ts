import { ref } from 'vue';

export const useElementOpen = () => {
  const isElementOpen = ref(false);

  const handleElementOpen = () => {
    isElementOpen.value = true;
  };

  const handleElementClose = () => {
    isElementOpen.value = false;
  };

  return {
    handleElementClose,
    handleElementOpen,
    isElementOpen,
  };
};
