import type { KanaCard } from '../data/hiragana';

function getJapaneseVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return undefined;
  }

  return window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith('ja'));
}

export function playPronunciation(card: KanaCard): boolean {
  if (
    typeof window === 'undefined' ||
    !('speechSynthesis' in window) ||
    !('SpeechSynthesisUtterance' in window)
  ) {
    return false;
  }

  const utterance = new window.SpeechSynthesisUtterance(card.kana);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.82;
  utterance.pitch = 1;

  const japaneseVoice = getJapaneseVoice();
  if (japaneseVoice) {
    utterance.voice = japaneseVoice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return true;
}
