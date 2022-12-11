import { defineStore } from 'pinia';
import { GameChoices } from '@/types';

type Choice = null | GameChoices;
type GameState = 'welcome' | 'user-choose' | 'computer-choose';

interface State {
  userChoice: Choice;
  computerChoice: Choice;
  winStreak: number;
  choices: GameChoices[];
  gameState: GameState;
}

export const useGameState = defineStore('game', {
  state: (): State => {
    return {
      gameState: 'welcome',
      userChoice: null,
      computerChoice: null,
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
  actions: {
    setComputerChoice() {
      const randomIndex = Math.floor(Math.random() * this.choices.length);
      this.computerChoice = this.choices[randomIndex]
        ? this.choices[randomIndex]
        : null;
      this.gameState = 'computer-choose';
    },
  },
  getters: {
    isWelcomeState(state) {
      return state.gameState === 'welcome';
    },
  },
});
