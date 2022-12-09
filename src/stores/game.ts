import { defineStore } from 'pinia';
import { GameChoices } from '@/types';

interface State {
  userChoice: null | GameChoices;
  winStreak: number;
  choices: GameChoices[];
}

export const useGameState = defineStore('game', {
  state: (): State => {
    return {
      userChoice: null,
      winStreak: 0,
      choices: [
        GameChoices.scissors,
        GameChoices.spock,
        GameChoices.paper,
        GameChoices.lizard,
        GameChoices.rock,
      ],
    };
  },
});
