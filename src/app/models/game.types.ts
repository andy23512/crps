export type Move = 'rock' | 'paper' | 'scissors';
export type RoundResult = 'player' | 'computer' | 'draw';
export type TargetOutcome = RoundResult;

export interface ScoreState {
  passedRounds: number;
}

export interface RoundState {
  playerMove: Move;
  computerMove: Move;
  result: RoundResult;
  targetOutcome: TargetOutcome;
  targetMatched: boolean;
}
