import { Injectable, signal } from '@angular/core';
import { RoundState, ScoreState } from '../models/game.types';

@Injectable({ providedIn: 'root' })
export class ScoreTrackerService {
  private readonly highestScoreStorageKey = 'crps.highestScore';
  readonly score = signal<ScoreState>({ passedRounds: 0, highestScore: 0 });
  readonly latestRound = signal<RoundState | null>(null);
  readonly isGameOver = signal(false);

  constructor() {
    const highestScore = this.loadHighestScore();
    this.score.set({ passedRounds: 0, highestScore });
  }

  updateScore(targetMatched: boolean): void {
    if (!targetMatched) {
      return;
    }

    const current = this.score();
    const nextPassedRounds = current.passedRounds + 1;
    const nextHighestScore = Math.max(current.highestScore, nextPassedRounds);

    if (nextHighestScore > current.highestScore) {
      this.storeHighestScore(nextHighestScore);
    }

    this.score.set({ passedRounds: nextPassedRounds, highestScore: nextHighestScore });
  }

  setLatestRound(round: RoundState): void {
    this.latestRound.set(round);
  }

  setGameOver(value: boolean): void {
    this.isGameOver.set(value);
  }

  resetGame(): void {
    const current = this.score();
    this.score.set({ passedRounds: 0, highestScore: current.highestScore });
    this.latestRound.set(null);
    this.isGameOver.set(false);
  }

  private loadHighestScore(): number {
    try {
      const value = localStorage.getItem(this.highestScoreStorageKey);
      if (!value) {
        return 0;
      }
      const parsed = Number(value);
      if (!Number.isFinite(parsed) || parsed < 0) {
        return 0;
      }
      return Math.floor(parsed);
    } catch {
      return 0;
    }
  }

  private storeHighestScore(highestScore: number): void {
    try {
      localStorage.setItem(this.highestScoreStorageKey, String(highestScore));
    } catch {
      // Ignore storage write failures and continue with in-memory score.
    }
  }
}
