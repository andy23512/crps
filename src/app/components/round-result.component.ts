import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RoundState } from '../models/game.types';

@Component({
  selector: 'app-round-result',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  template: `
    <mat-card class="result-area" appearance="outlined" aria-live="polite">
      <p class="moves" *ngIf="round">
        You: {{ round.playerMove }} vs Computer: {{ round.computerMove }}
      </p>
      <mat-chip-set *ngIf="round && showChallengeOutcome" class="challenge-outcome">
        <mat-chip [class.met]="round.targetMatched" [class.failed]="!round.targetMatched">
          {{ challengeMessage }}
        </mat-chip>
      </mat-chip-set>
      <p
        class="result"
        [class.win]="round?.result === 'player'"
        [class.lose]="round?.result === 'computer'"
        [class.draw]="round?.result === 'draw'"
      >
        {{ message }}
      </p>
    </mat-card>
  `,
})
export class RoundResultComponent {
  @Input() round: RoundState | null = null;
  @Input() showChallengeOutcome = false;

  get message(): string {
    if (!this.round) return '';
    if (this.round.result === 'player') return 'You win!';
    if (this.round.result === 'computer') return 'Computer wins!';
    return "It's a draw!";
  }

  get challengeMessage(): string {
    if (!this.round || !this.showChallengeOutcome) return '';
    if (this.round.targetMatched) return `Target met: ${this.round.targetOutcome}`;
    return `Target failed: ${this.round.targetOutcome}`;
  }
}
