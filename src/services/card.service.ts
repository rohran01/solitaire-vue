import { Card } from "../models/card";
import { Game } from "../models/game";
import { AllCards } from "../assets/all-cards";

export default {
  deal(): Game {
    let dealt: Game = new Game();
    const shuffledDeck = this.shuffleCards();
    console.log('dealt before', dealt);
    console.log('deck before', shuffledDeck);

    dealt.columns.first = shuffledDeck.splice(0, 1);
    dealt.columns.second = shuffledDeck.splice(0, 2);
    dealt.columns.third = shuffledDeck.splice(0, 3);
    dealt.columns.fourth = shuffledDeck.splice(0, 4);
    dealt.columns.fifth = shuffledDeck.splice(0, 5);
    dealt.columns.sixth = shuffledDeck.splice(0, 6);
    dealt.columns.seventh = shuffledDeck.splice(0, 7);

    dealt.deck = [...shuffledDeck];

    console.log('dealt after', dealt);
    console.log('deck after', shuffledDeck);



    return dealt;
  },

  shuffleCards(): Card[] {
    return [...AllCards].sort(() => Math.random() - 0.5);
  }
};
