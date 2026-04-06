import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <section class="scoreboard" aria-label="Score board">
      <mat-card class="score-item" appearance="outlined">
        <span class="label">Passed Rounds</span>
        <span class="value">{{ passedRounds }}</span>
      </mat-card>
    </section>
  `,
})
export class ScoreboardComponent {
  @Input({ required: true }) passedRounds!: number;
}
