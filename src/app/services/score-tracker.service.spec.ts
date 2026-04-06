import { TestBed } from '@angular/core/testing';
import { ScoreTrackerService } from './score-tracker.service';

describe('ScoreTrackerService', () => {
  let service: ScoreTrackerService;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    localStorage.clear();
    service = TestBed.inject(ScoreTrackerService);
  });

  it('increments passed rounds when target is matched', () => {
    service.updateScore(true);

    expect(service.score().passedRounds).toBe(1);
    expect(service.score().highestScore).toBe(1);
  });

  it('does not increment passed rounds when target is not matched', () => {
    service.updateScore(false);

    expect(service.score().passedRounds).toBe(0);
    expect(service.score().highestScore).toBe(0);
  });

  it('loads highest score from persisted storage', () => {
    localStorage.setItem('crps.highestScore', '7');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    const loaded = TestBed.inject(ScoreTrackerService);

    expect(loaded.score().highestScore).toBe(7);
  });

  it('updates persisted highest score only when current score exceeds it', () => {
    localStorage.setItem('crps.highestScore', '2');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    const loaded = TestBed.inject(ScoreTrackerService);

    loaded.updateScore(true); // 1
    expect(localStorage.getItem('crps.highestScore')).toBe('2');

    loaded.updateScore(true); // 2
    expect(localStorage.getItem('crps.highestScore')).toBe('2');

    loaded.updateScore(true); // 3
    expect(localStorage.getItem('crps.highestScore')).toBe('3');
  });

  it('resets passed rounds to zero on reset', () => {
    service.updateScore(true);
    service.updateScore(true);

    service.resetGame();

    expect(service.score().passedRounds).toBe(0);
    expect(service.score().highestScore).toBe(2);
    expect(service.latestRound()).toBeNull();
    expect(service.isGameOver()).toBeFalse();
  });
});
