import { Injectable } from '@angular/core';
import { Move } from '../models/game.types';

@Injectable({ providedIn: 'root' })
export class ComputerPlayerService {
  private readonly moves: Move[] = ['rock', 'paper', 'scissors'];

  getComputerMove(): Move {
    const randomIndex = Math.floor(Math.random() * this.moves.length);
    return this.moves[randomIndex];
  }
}
