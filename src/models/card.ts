import { Suits } from './suits.enum';

export interface Card {
  id: number;
  suit: Suits;
  value: number | string;
  selected: boolean;
}
