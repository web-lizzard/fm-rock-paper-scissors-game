import { defineStore } from 'pinia';

export const useGameState = defineStore('game', {
  state: () => {
    return {
      winStreak: 0,
    };
  },
});
