import { TestBed } from '@angular/core/testing';
import { ScoreTrackerService } from './score-tracker.service';

describe('ScoreTrackerService', () => {
  let service: ScoreTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreTrackerService);
  });

  it('increments passed rounds when target is matched', () => {
    service.updateScore(true);

    expect(service.score().passedRounds).toBe(1);
  });

  it('does not increment passed rounds when target is not matched', () => {
    service.updateScore(false);

    expect(service.score().passedRounds).toBe(0);
  });

  it('resets passed rounds to zero on reset', () => {
    service.updateScore(true);
    service.updateScore(true);

    service.resetGame();

    expect(service.score().passedRounds).toBe(0);
    expect(service.latestRound()).toBeNull();
    expect(service.isGameOver()).toBeFalse();
  });
});
