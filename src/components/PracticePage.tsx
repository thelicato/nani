import { useCallback, useMemo, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { BrandLogo } from './BrandLogo';
import { hiraganaCards, type KanaCard } from '../data/hiragana';
import { playPronunciation as speakKana } from '../utils/audio';

function shuffleCards(cards: KanaCard[]): KanaCard[] {
  const copy = [...cards];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function PracticePage() {
  const [deck, setDeck] = useState<KanaCard[]>(() => shuffleCards(hiraganaCards));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  const currentCard = deck[index];
  const complete = index >= deck.length;
  const progress = Math.min(index + (complete ? 0 : 1), deck.length);
  const percent = useMemo(() => Math.round((Math.min(index, deck.length) / deck.length) * 100), [deck.length, index]);

  const playPronunciation = useCallback((card: KanaCard) => {
    const played = speakKana(card);
    setAudioUnavailable(!played);
  }, []);

  const startPractice = () => {
    setDeck(shuffleCards(hiraganaCards));
    setIndex(0);
    setRevealed(false);
    setKnownCount(0);
    setReviewCount(0);
    setAudioUnavailable(false);
  };

  const revealAnswer = () => {
    if (!currentCard) return;
    setRevealed(true);
    playPronunciation(currentCard);
  };

  const nextCard = (knewIt: boolean) => {
    if (knewIt) {
      setKnownCount((count) => count + 1);
    } else {
      setReviewCount((count) => count + 1);
    }
    setRevealed(false);
    setAudioUnavailable(false);
    setIndex((currentIndex) => currentIndex + 1);
  };

  const restartWithReview = () => {
    const reviewDeck = deck.filter((_, cardIndex) => cardIndex >= index);
    setDeck(reviewDeck.length > 0 ? shuffleCards(reviewDeck) : shuffleCards(hiraganaCards));
    setIndex(0);
    setRevealed(false);
    setKnownCount(0);
    setReviewCount(0);
    setAudioUnavailable(false);
  };

  if (complete) {
    const score = Math.round((knownCount / deck.length) * 100);

    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-8 text-slate-900">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center text-center">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-2xl shadow-orange-200/60 backdrop-blur sm:p-12">
            <BrandLogo size="md" className="mx-auto" />
            <div className="mt-6 text-7xl">🎉</div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Deck complete!</h1>
            <p className="mt-4 text-lg text-slate-600">
              You marked {knownCount} of {deck.length} cards as known. Score: {score}%.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={startPractice}
                className="rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Shuffle and restart
              </button>
              <button
                type="button"
                onClick={restartWithReview}
                className="rounded-2xl border border-orange-200 bg-orange-50 px-6 py-4 font-bold text-orange-700 transition hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Practice again
              </button>
            </div>
            <Link
              to="/hiragana"
              className="mt-4 inline-flex rounded-2xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              Review all hiragana
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-6 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="rounded-full focus:outline-none focus:ring-4 focus:ring-orange-300">
              <BrandLogo size="sm" className="shrink-0" />
            </Link>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">Nani practice</p>
              <h1 className="text-2xl font-black">Tap the card to reveal the sound</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">🔊 Turn your volume up before you reveal each card.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/hiragana"
              className="rounded-full border border-orange-200 bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              All hiragana
            </Link>
            <button
              type="button"
              onClick={startPractice}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              Restart
            </button>
          </div>
        </header>

        <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
          <div className="mb-2 flex items-center justify-between text-sm font-black text-slate-600">
            <span>Progress</span>
            <span>{index} of {deck.length} completed</span>
          </div>
          <div className="relative h-6 overflow-hidden rounded-full bg-white shadow-inner">
            <div className="h-full rounded-full bg-orange-500 transition-all duration-500" style={{ width: `${percent}%` }} />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-slate-700">
              {percent}% complete
            </div>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <button
            type="button"
            onClick={revealAnswer}
            className="group min-h-[28rem] rounded-[2.5rem] border border-white/80 bg-white/85 p-8 text-left shadow-2xl shadow-orange-200/50 backdrop-blur transition hover:-translate-y-1 hover:shadow-orange-300/60 focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Reveal the answer"
          >
            <div className="flex items-center justify-end">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
                Card {progress} / {deck.length}
              </span>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center text-center">
              <div className="text-[11rem] font-black leading-none text-slate-950 sm:text-[14rem]">
                {currentCard.kana}
              </div>
              <p className="mt-8 rounded-full bg-slate-950 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white transition group-hover:bg-orange-600">
                {revealed ? 'Answer revealed' : 'Tap to reveal'}
              </p>
            </div>
          </button>

          <aside className="rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-orange-200/40 backdrop-blur sm:p-8">
            {!revealed ? (
              <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                <div className="text-7xl">👀</div>
                <h2 className="mt-6 text-3xl font-black">Guess first.</h2>
                <p className="mt-3 max-w-sm text-slate-600">
                  Say the sound out loud, then tap the large kana card to check yourself.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">Correct answer</p>
                    <h2 className="mt-2 text-5xl font-black">{currentCard.romaji}</h2>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-5xl">
                    {currentCard.visualCue}
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Pronunciation</p>
                  <p className="mt-2 text-xl font-bold">{currentCard.pronunciation}</p>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Audio</p>
                      <p className="mt-2 text-sm font-semibold text-slate-600">Turn your volume up, then listen for “{currentCard.romaji}”.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => playPronunciation(currentCard)}
                      className="rounded-2xl bg-slate-950 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
                      aria-label={`Hear ${currentCard.kana} pronounced again`}
                    >
                      🔊 Hear again
                    </button>
                  </div>
                  {audioUnavailable ? (
                    <p className="mt-3 rounded-2xl bg-white/75 px-4 py-3 text-sm font-semibold text-slate-600">
                      Audio is not available in this browser. Try Chrome, Edge, or Safari with system voices enabled.
                    </p>
                  ) : null}
                </div>

                <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">Mnemonic</p>
                  <p className="mt-2 text-lg leading-8 text-slate-700">{currentCard.mnemonic}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => nextCard(true)}
                    className="rounded-2xl bg-emerald-600 px-5 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                  >
                    I knew it
                  </button>
                  <button
                    type="button"
                    onClick={() => nextCard(false)}
                    className="rounded-2xl bg-orange-600 px-5 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
                  >
                    Review again
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>

        <footer className="grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/65 px-4 py-3 shadow-sm">Known: {knownCount}</div>
          <div className="rounded-2xl bg-white/65 px-4 py-3 shadow-sm">Needs review: {reviewCount}</div>
          <div className="rounded-2xl bg-white/65 px-4 py-3 shadow-sm">Remaining: {deck.length - index - 1}</div>
        </footer>
      </section>
    </main>
  );
}
