import { Injectable, signal } from '@angular/core';
import { RoundState, ScoreState } from '../models/game.types';

@Injectable({ providedIn: 'root' })
export class ScoreTrackerService {
  readonly score = signal<ScoreState>({ passedRounds: 0 });
  readonly latestRound = signal<RoundState | null>(null);
  readonly isGameOver = signal(false);

  updateScore(targetMatched: boolean): void {
    if (!targetMatched) {
      return;
    }

    const current = this.score();
    this.score.set({ passedRounds: current.passedRounds + 1 });
  }

  setLatestRound(round: RoundState): void {
    this.latestRound.set(round);
  }

  setGameOver(value: boolean): void {
    this.isGameOver.set(value);
  }

  resetGame(): void {
    this.score.set({ passedRounds: 0 });
    this.latestRound.set(null);
    this.isGameOver.set(false);
  }
}
