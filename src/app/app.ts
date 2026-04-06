import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MoveControlsComponent } from './components/move-controls.component';
import { ScoreboardComponent } from './components/scoreboard.component';
import { Move, TargetOutcome } from './models/game.types';
import { ComputerPlayerService } from './services/computer-player.service';
import { GameCoreService } from './services/game-core.service';
import { ScoreTrackerService } from './services/score-tracker.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MoveControlsComponent,
    ScoreboardComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  readonly ROUND_TIMEOUT_SECONDS = 10;
  timeRemaining = this.ROUND_TIMEOUT_SECONDS;
  gameStarted = false;

  currentComputerMove: Move | null = null;
  currentTargetOutcome: TargetOutcome | null = null;

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    private readonly gameCoreService: GameCoreService,
    private readonly computerPlayerService: ComputerPlayerService,
    private readonly scoreTrackerService: ScoreTrackerService,
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearTimer();
  }

  get score() {
    return this.scoreTrackerService.score();
  }

  get isGameOver() {
    return this.scoreTrackerService.isGameOver();
  }

  onMoveSelected(playerMove: Move): void {
    if (
      this.isGameOver ||
      !this.gameCoreService.isValidMove(playerMove) ||
      !this.currentComputerMove ||
      !this.currentTargetOutcome
    ) {
      return;
    }

    const computerMove = this.currentComputerMove;
    const result = this.gameCoreService.resolveRound(playerMove, computerMove);
    const targetMatched = result === this.currentTargetOutcome;

    this.scoreTrackerService.updateScore(targetMatched);
    this.scoreTrackerService.setLatestRound({
      playerMove,
      computerMove,
      result,
      targetOutcome: this.currentTargetOutcome,
      targetMatched,
    });

    if (!targetMatched) {
      this.clearTimer();
      this.scoreTrackerService.setGameOver(true);
      return;
    }

    this.prepareNextRound();
  }

  startGame(): void {
    this.gameStarted = true;
    this.prepareNextRound();
  }

  resetGame(): void {
    this.clearTimer();
    this.scoreTrackerService.resetGame();
    this.gameStarted = false;
  }

  private startTimer(): void {
    this.timeRemaining = this.ROUND_TIMEOUT_SECONDS;
    this.timerInterval = setInterval(() => {
      this.timeRemaining -= 1;
      if (this.timeRemaining <= 0) {
        this.clearTimer();
        this.scoreTrackerService.setGameOver(true);
      }
    }, 1000);
  }

  private clearTimer(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private revealNextComputerMove(): void {
    this.currentComputerMove = this.computerPlayerService.getComputerMove();
  }

  private generateTargetOutcome(): void {
    this.currentTargetOutcome = this.gameCoreService.getTargetOutcome();
  }

  private prepareNextRound(): void {
    this.clearTimer();
    this.generateTargetOutcome();
    this.revealNextComputerMove();
    this.startTimer();
  }
}
