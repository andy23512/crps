import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Move } from '../models/game.types';

@Component({
  selector: 'app-move-controls',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <section class="moves" [attr.aria-label]="movesAriaLabel">
      <button
        class="move-btn"
        mat-stroked-button
        color="primary"
        type="button"
        [attr.aria-label]="rockLabel"
        [disabled]="disabled"
        (click)="onSelect('rock')"
      >
        <svg class="move-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M8.2 9.6c0-1 .8-1.8 1.8-1.8.5 0 1 .2 1.3.5.3-.7 1-1.2 1.8-1.2 1.1 0 1.9.9 1.9 1.9v.5h.3c1.2 0 2.2 1 2.2 2.2v2.4c0 2.7-2.2 4.9-4.9 4.9h-2.8c-2 0-3.7-1.7-3.7-3.7v-3.4c0-1 .8-1.8 1.8-1.8h.3z"
          />
          <path
            d="M8.9 9.6V8.3M11 9.2V7.7M13.2 9V7.9M15 9.5V8.8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </svg>
        <span class="sr-only">{{ rockLabel }}</span>
      </button>
      <button
        class="move-btn"
        mat-stroked-button
        color="accent"
        type="button"
        [attr.aria-label]="paperLabel"
        [disabled]="disabled"
        (click)="onSelect('paper')"
      >
        <svg class="move-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M7.5 20h7.5c2.2 0 4-1.8 4-4v-4.2c0-.9-.7-1.6-1.6-1.6-.4 0-.8.2-1.1.5V6.2c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v3.4h-.7V5.4c0-.9-.7-1.6-1.6-1.6S9.3 4.5 9.3 5.4v4.2h-.7V6.6c0-.9-.7-1.6-1.6-1.6S5.4 5.7 5.4 6.6v7.1c0 .8.3 1.6.8 2.2l1.3 1.4V20z"
          />
          <path
            d="M7.5 20v-2.7l-1.3-1.4c-.5-.6-.8-1.4-.8-2.2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </svg>
        <span class="sr-only">{{ paperLabel }}</span>
      </button>
      <button
        class="move-btn"
        mat-stroked-button
        color="warn"
        type="button"
        [attr.aria-label]="scissorsLabel"
        [disabled]="disabled"
        (click)="onSelect('scissors')"
      >
        <svg class="move-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M8.2 18.8h6.1c1.9 0 3.4-1.5 3.4-3.4V12c0-1-.8-1.8-1.8-1.8-.4 0-.8.1-1.1.4V5.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.4h-.8V4.7c0-1-.8-1.7-1.7-1.7S7 3.7 7 4.7V13c0 .7.2 1.4.6 2l.6.9v2.9z"
          />
          <path
            d="M9.2 15.2 18.8 5.6M10 11.8l3.2-3.2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          />
        </svg>
        <span class="sr-only">{{ scissorsLabel }}</span>
      </button>
    </section>
  `,
})
export class MoveControlsComponent {
  @Input() disabled = false;
  @Input() movesAriaLabel = 'Move selection';
  @Input() rockLabel = 'Rock';
  @Input() paperLabel = 'Paper';
  @Input() scissorsLabel = 'Scissors';
  @Output() moveSelected = new EventEmitter<Move>();

  onSelect(move: Move): void {
    this.moveSelected.emit(move);
  }
}
