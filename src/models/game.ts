import { Card } from './card'

export class Game {
    deck: Card[];
    finished: {
        first: Card[],
        second: Card[],
        third: Card[],
        fourth: Card[]
    }
    columns: {
        first: Card[],
        second: Card[],
        third: Card[],
        fourth: Card[],
        fifth: Card[],
        sixth: Card[],
        seventh: Card[],
    }

    constructor() {
        this.deck = [];
        this.finished = {
            first: [],
            second: [],
            third: [],
            fourth: []
        };
        this.columns = {
            first: [],
            second: [],
            third: [],
            fourth: [],
            fifth: [],
            sixth: [],
            seventh: []
        };
    }
}
