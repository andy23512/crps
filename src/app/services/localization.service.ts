import { Injectable, signal } from '@angular/core';

export type UiLanguage = 'en' | 'ja';

const TRANSLATIONS: Record<UiLanguage, Record<string, string>> = {
  en: {
    'app.title': 'Conditional RPS',
    'language.label': 'Language',
    'language.en': 'English',
    'language.ja': 'Japanese',
    'score.passedRounds': 'Passed Rounds',
    'button.startGame': 'Start Game',
    'button.newGame': 'New Game',
    'label.currentComputerMove': 'Current Computer Move',
    'label.requiredRoundOutcome': 'Required Round Outcome',
    'label.moveSelection': 'Move selection',
    'label.timeRemaining': 'Time remaining',
    'status.gameOver': 'Game Over: required outcome was not met. Press New Game to try again.',
    'move.rock': 'Rock',
    'move.paper': 'Paper',
    'move.scissors': 'Scissors',
    'outcome.player': 'player',
    'outcome.computer': 'computer',
    'outcome.draw': 'draw',
  },
  ja: {
    'app.title': 'Conditional RPS',
    'language.label': '言語',
    'language.en': '英語',
    'language.ja': '日本語',
    'score.passedRounds': 'クリアラウンド',
    'button.startGame': 'ゲーム開始',
    'button.newGame': '新しいゲーム',
    'label.currentComputerMove': '現在のコンピューターの手',
    'label.requiredRoundOutcome': '必要なラウンド結果',
    'label.moveSelection': '手の選択',
    'label.timeRemaining': '残り時間',
    'status.gameOver':
      'ゲームオーバー: 必要な結果を満たせませんでした。新しいゲームでもう一度試してください。',
    'move.rock': 'グー',
    'move.paper': 'パー',
    'move.scissors': 'チョキ',
    'outcome.player': 'プレイヤーの勝ち',
    'outcome.computer': 'コンピューターの勝ち',
    'outcome.draw': '引き分け',
  },
};

@Injectable({ providedIn: 'root' })
export class LocalizationService {
  private readonly currentLanguage = signal<UiLanguage>('en');

  language() {
    return this.currentLanguage();
  }

  setLanguage(language: UiLanguage): void {
    this.currentLanguage.set(language);
  }

  t(key: string): string {
    const selected = TRANSLATIONS[this.currentLanguage()][key];
    if (selected) {
      return selected;
    }
    return TRANSLATIONS.en[key] ?? key;
  }
}
