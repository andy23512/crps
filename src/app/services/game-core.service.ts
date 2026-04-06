import { Injectable } from '@angular/core';
import { Move, RoundResult, TargetOutcome } from '../models/game.types';

@Injectable({ providedIn: 'root' })
export class GameCoreService {
  private readonly validMoves: Move[] = ['rock', 'paper', 'scissors'];
  private readonly targetOutcomes: TargetOutcome[] = ['player', 'computer', 'draw'];

  isValidMove(move: string): move is Move {
    return this.validMoves.includes(move as Move);
  }

  resolveRound(playerMove: Move, computerMove: Move): RoundResult {
    if (playerMove === computerMove) {
      return 'draw';
    }

    if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'scissors' && computerMove === 'paper') ||
      (playerMove === 'paper' && computerMove === 'rock')
    ) {
      return 'player';
    }

    return 'computer';
  }

  getTargetOutcome(): TargetOutcome {
    const randomIndex = Math.floor(Math.random() * this.targetOutcomes.length);
    return this.targetOutcomes[randomIndex];
  }
}
