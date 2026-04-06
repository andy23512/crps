import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { App } from './app';
import { ComputerPlayerService } from './services/computer-player.service';
import { GameCoreService } from './services/game-core.service';
import { ScoreTrackerService } from './services/score-tracker.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    fixture.destroy();
  }));

  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Conditional RPS');
    expect(document.title).toContain('Conditional RPS');
    fixture.destroy();
  }));

  it('should show computer move and generated target before player selects', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValue('paper');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValue('draw');

    fixture.componentInstance.startGame();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-testid="current-computer-move"]')?.textContent).toContain(
      'Paper',
    );
    expect(compiled.querySelector('[data-testid="current-target-outcome"]')?.textContent).toContain(
      'draw',
    );
    fixture.destroy();
  }));

  it('should render svg icons and accessible labels for move controls', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.startGame();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = Array.from(compiled.querySelectorAll('.move-btn')) as HTMLButtonElement[];
    const labels = buttons.map((btn) => btn.getAttribute('aria-label'));
    const iconCount = compiled.querySelectorAll('.move-btn .move-icon').length;

    expect(buttons.length).toBe(3);
    expect(labels).toEqual(['Rock', 'Paper', 'Scissors']);
    expect(iconCount).toBe(3);
    fixture.destroy();
  }));

  it('should show only passed rounds in the scoreboard', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const scoreLabels = Array.from(compiled.querySelectorAll('.score-item .label')).map((el) =>
      (el.textContent ?? '').trim(),
    );
    const scoreValues = Array.from(compiled.querySelectorAll('.score-item .value')).map((el) =>
      (el.textContent ?? '').trim(),
    );

    expect(scoreLabels).toEqual(['Passed Rounds']);
    expect(scoreValues).toEqual(['0']);
    fixture.destroy();
  }));

  it('should not render the round-result panel', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-round-result')).toBeNull();
    expect(compiled.querySelector('.result-area')).toBeNull();
    fixture.destroy();
  }));

  it('should continue to next round when generated target matches actual result', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValues('scissors', 'rock');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValues('player', 'draw');

    fixture.componentInstance.startGame();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const moveButton = compiled.querySelector('.move-btn') as HTMLButtonElement;
    moveButton.click();
    fixture.detectChanges();

    const revealed =
      compiled.querySelector('[data-testid="current-computer-move"]')?.textContent ?? '';
    const target =
      compiled.querySelector('[data-testid="current-target-outcome"]')?.textContent ?? '';
    const scoreValue = (compiled.querySelector('.score-item .value')?.textContent ?? '').trim();

    expect(scoreValue).toBe('1');
    expect(revealed).toContain('Rock');
    expect(target).toContain('draw');
    expect(compiled.querySelector('[data-testid="game-over-status"]')).toBeNull();
    fixture.destroy();
  }));

  it('should enter game over on target mismatch and block further rounds', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValues('rock', 'paper');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValues('computer', 'player');

    fixture.componentInstance.startGame();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const moveButton = compiled.querySelector('.move-btn') as HTMLButtonElement;
    moveButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('[data-testid="game-over-status"]')).not.toBeNull();
    expect((compiled.querySelector('.score-item .value')?.textContent ?? '').trim()).toBe('0');
    expect(moveButton.disabled).toBeTrue();
    expect(computerService.getComputerMove).toHaveBeenCalledTimes(1);
    fixture.destroy();
  }));

  it('should reset to idle state with score cleared on New Game', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValues('rock', 'scissors');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValues('computer', 'player');

    fixture.componentInstance.startGame();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const moveButton = compiled.querySelector('.move-btn') as HTMLButtonElement;
    moveButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('[data-testid="game-over-status"]')).not.toBeNull();

    const resetButton = compiled.querySelector('.reset-btn') as HTMLButtonElement;
    resetButton.click();
    fixture.detectChanges();

    const scoreValues = Array.from(compiled.querySelectorAll('.score-item .value')).map((el) =>
      (el.textContent ?? '').trim(),
    );

    expect(scoreValues).toEqual(['0']);
    expect(compiled.querySelector('[data-testid="game-over-status"]')).toBeNull();
    expect(compiled.querySelector('[data-testid="current-computer-move"]')).toBeNull();
    expect(compiled.querySelector('[data-testid="current-target-outcome"]')).toBeNull();
    expect(compiled.querySelector('.start-btn')).not.toBeNull();
    fixture.destroy();
  }));

  it('should show countdown timer when a round is active', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.startGame();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const timer = compiled.querySelector('[data-testid="round-timer"]');
    const value = compiled.querySelector('[data-testid="timer-value"]')?.textContent ?? '';

    expect(timer).not.toBeNull();
    expect(value).toContain('10');
    fixture.destroy();
  }));

  it('should hide countdown timer display when game over is active', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const scoreTrackerService = TestBed.inject(ScoreTrackerService);
    fixture.componentInstance.startGame();
    fixture.detectChanges();

    scoreTrackerService.setGameOver(true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-testid="round-timer"]')).toBeNull();
    fixture.destroy();
  }));

  it('should enter game over when timer reaches zero', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.startGame();
    fixture.detectChanges();

    tick(10000);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-testid="game-over-status"]')).not.toBeNull();
    expect(compiled.querySelector('[data-testid="round-timer"]')).toBeNull();
    fixture.destroy();
  }));

  it('should reset timer to 10 when a new game is started after reset', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValues('rock', 'scissors', 'paper');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValues('computer', 'player', 'draw');

    fixture.componentInstance.startGame();
    fixture.detectChanges();

    // Advance timer partially
    tick(5000);
    fixture.detectChanges();
    expect(fixture.componentInstance.timeRemaining).toBeLessThan(10);

    // Trigger game over via mismatch
    const moveButton = fixture.nativeElement.querySelector('.move-btn') as HTMLButtonElement;
    moveButton.click();
    fixture.detectChanges();

    // Reset game returns to idle
    const resetButton = fixture.nativeElement.querySelector('.reset-btn') as HTMLButtonElement;
    resetButton.click();
    fixture.detectChanges();

    // Start a new game — timer should reset to 10
    fixture.componentInstance.startGame();
    fixture.detectChanges();

    expect(fixture.componentInstance.timeRemaining).toBe(10);
    fixture.destroy();
  }));

  it('should show Start Game button and hide in-game UI on fresh load', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.start-btn')).not.toBeNull();
    expect(compiled.querySelector('[data-testid="current-computer-move"]')).toBeNull();
    expect(compiled.querySelector('[data-testid="current-target-outcome"]')).toBeNull();
    expect(compiled.querySelector('[data-testid="round-timer"]')).toBeNull();
    expect(compiled.querySelector('app-move-controls')).toBeNull();
    fixture.destroy();
  }));

  it('should show in-game UI and start timer when Start Game is clicked', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const startButton = compiled.querySelector('.start-btn') as HTMLButtonElement;
    startButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.start-btn')).toBeNull();
    expect(compiled.querySelector('[data-testid="current-computer-move"]')).not.toBeNull();
    expect(compiled.querySelector('[data-testid="round-timer"]')).not.toBeNull();
    expect(fixture.componentInstance.timeRemaining).toBe(10);
    fixture.destroy();
  }));

  it('should render Japanese UI text when language is switched to Japanese', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValue('paper');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValue('draw');

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const languageSelect = compiled.querySelector(
      '[data-testid="language-select"]',
    ) as HTMLSelectElement;
    languageSelect.value = 'ja';
    languageSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(compiled.querySelector('h1')?.textContent).toContain('Conditional RPS');
    expect(compiled.querySelector('.start-btn')?.textContent).toContain('ゲーム開始');
    expect(compiled.querySelector('.score-item .label')?.textContent).toContain('クリアラウンド');

    fixture.componentInstance.startGame();
    fixture.detectChanges();

    expect(compiled.querySelector('[data-testid="current-computer-move"]')?.textContent).toContain(
      'パー',
    );
    expect(compiled.querySelector('[data-testid="current-target-outcome"]')?.textContent).toContain(
      '引き分け',
    );
    const labels = Array.from(compiled.querySelectorAll('.move-btn')).map((btn) =>
      btn.getAttribute('aria-label'),
    );
    expect(labels).toEqual(['グー', 'パー', 'チョキ']);
    fixture.destroy();
  }));

  it('should preserve game state when switching language during active gameplay', fakeAsync(() => {
    const fixture = TestBed.createComponent(App);
    const computerService = TestBed.inject(ComputerPlayerService);
    const gameCoreService = TestBed.inject(GameCoreService);
    spyOn(computerService, 'getComputerMove').and.returnValue('rock');
    spyOn(gameCoreService, 'getTargetOutcome').and.returnValue('player');

    fixture.componentInstance.startGame();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance.gameStarted).toBeTrue();
    expect(compiled.querySelector('[data-testid="round-timer"]')).not.toBeNull();

    const languageSelect = compiled.querySelector(
      '[data-testid="language-select"]',
    ) as HTMLSelectElement;
    languageSelect.value = 'ja';
    languageSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(fixture.componentInstance.gameStarted).toBeTrue();
    expect(compiled.querySelector('[data-testid="round-timer"]')).not.toBeNull();
    expect(compiled.querySelector('[data-testid="current-computer-move"]')?.textContent).toContain(
      'グー',
    );
    expect(compiled.querySelector('[data-testid="current-target-outcome"]')?.textContent).toContain(
      'プレイヤーの勝ち',
    );
    fixture.destroy();
  }));
});
