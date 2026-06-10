import { useCallback, useMemo, useState } from 'react';

type KanaCard = {
  kana: string;
  romaji: string;
  row: string;
  pronunciation: string;
  mnemonic: string;
  visualCue: string;
};

const baseCards: KanaCard[] = [
  { kana: 'あ', romaji: 'a', row: 'vowel', pronunciation: "Like 'a' in 'father'", mnemonic: "A little apple has a stem and a leaf. Say 'a' for apple.", visualCue: '🍎' },
  { kana: 'い', romaji: 'i', row: 'vowel', pronunciation: "Like 'ee' in 'see'", mnemonic: "Two ink strokes stand side by side. Ink starts with the 'i' sound.", visualCue: '🖊️' },
  { kana: 'う', romaji: 'u', row: 'vowel', pronunciation: "Like 'oo' in 'boot'", mnemonic: "A tiny roof sits over a curved U-turn. Say 'u'.", visualCue: '↪️' },
  { kana: 'え', romaji: 'e', row: 'vowel', pronunciation: "Like 'e' in 'bed'", mnemonic: "It looks like an energetic person leaning forward. Energy starts with 'e'.", visualCue: '⚡' },
  { kana: 'お', romaji: 'o', row: 'vowel', pronunciation: "Like 'o' in 'open'", mnemonic: "An orange with a little stem and peel swirl says 'o'.", visualCue: '🍊' },

  { kana: 'か', romaji: 'ka', row: 'k', pronunciation: "'k' + 'a'", mnemonic: "A kite is caught on a hook. Kite starts with 'ka' here.", visualCue: '🪁' },
  { kana: 'き', romaji: 'ki', row: 'k', pronunciation: "'k' + 'ee'", mnemonic: "A key has little teeth across the top. Key begins with 'ki'.", visualCue: '🔑' },
  { kana: 'く', romaji: 'ku', row: 'k', pronunciation: "'k' + 'oo'", mnemonic: "A cuckoo bird opens its beak shape and says 'ku'.", visualCue: '🐦' },
  { kana: 'け', romaji: 'ke', row: 'k', pronunciation: "'k' + 'e'", mnemonic: "A keg has a tap sticking out. Keg begins with 'ke'.", visualCue: '🛢️' },
  { kana: 'こ', romaji: 'ko', row: 'k', pronunciation: "'k' + 'o'", mnemonic: "Two cozy shelves hold cocoa cups. Cocoa begins with 'ko'.", visualCue: '☕' },

  { kana: 'さ', romaji: 'sa', row: 's', pronunciation: "'s' + 'a'", mnemonic: "A satellite dish on a mast sends a signal. Satellite starts with 'sa'.", visualCue: '📡' },
  { kana: 'し', romaji: 'shi', row: 's', pronunciation: "Like 'she'", mnemonic: "A soft smile curve: she is smiling. Say 'shi'.", visualCue: '🙂' },
  { kana: 'す', romaji: 'su', row: 's', pronunciation: "'s' + 'oo'", mnemonic: "A sushi roll has a swirl and a tail. Sushi starts with 'su'.", visualCue: '🍣' },
  { kana: 'せ', romaji: 'se', row: 's', pronunciation: "'s' + 'e'", mnemonic: "A sewing frame has a thread crossing through it. Sewing starts with 'se'.", visualCue: '🧵' },
  { kana: 'そ', romaji: 'so', row: 's', pronunciation: "'s' + 'o'", mnemonic: "A zigzag spark shoots upward, so fast! Say 'so'.", visualCue: '💥' },

  { kana: 'た', romaji: 'ta', row: 't', pronunciation: "'t' + 'a'", mnemonic: "A taco stand has a roof, counter, and sign. Taco starts with 'ta'.", visualCue: '🌮' },
  { kana: 'ち', romaji: 'chi', row: 't', pronunciation: "Like 'chee'", mnemonic: "A cheese wedge curls at the end. Cheese starts with 'chi'.", visualCue: '🧀' },
  { kana: 'つ', romaji: 'tsu', row: 't', pronunciation: "Like 'tsu' in 'tsunami'", mnemonic: "A small tsunami wave rolls across the card. Tsunami starts with 'tsu'.", visualCue: '🌊' },
  { kana: 'て', romaji: 'te', row: 't', pronunciation: "'t' + 'e'", mnemonic: "A tennis swing leaves this curved trail. Tennis starts with 'te'.", visualCue: '🎾' },
  { kana: 'と', romaji: 'to', row: 't', pronunciation: "'t' + 'o'", mnemonic: "A toe with a tiny nail points down. Toe begins with 'to'.", visualCue: '🦶' },

  { kana: 'な', romaji: 'na', row: 'n', pronunciation: "'n' + 'a'", mnemonic: "A nacho chip wears a tiny flag. Nacho starts with 'na'.", visualCue: '🔺' },
  { kana: 'に', romaji: 'ni', row: 'n', pronunciation: "'n' + 'ee'", mnemonic: "Two neat lines: ni sounds like 'knee', and you have two knees.", visualCue: '🦵' },
  { kana: 'ぬ', romaji: 'nu', row: 'n', pronunciation: "'n' + 'oo'", mnemonic: "A noodle ties itself into a knot. Noodle starts with 'nu' here.", visualCue: '🍜' },
  { kana: 'ね', romaji: 'ne', row: 'n', pronunciation: "'n' + 'e'", mnemonic: "A nest with a little tail holds an egg. Nest starts with 'ne'.", visualCue: '🪺' },
  { kana: 'の', romaji: 'no', row: 'n', pronunciation: "'n' + 'o'", mnemonic: "A noodle loop says 'no' as it curls away.", visualCue: '➰' },

  { kana: 'は', romaji: 'ha', row: 'h', pronunciation: "'h' + 'a'", mnemonic: "A happy house has a wall, roofline, and chimney. Happy starts with 'ha'.", visualCue: '🏠' },
  { kana: 'ひ', romaji: 'hi', row: 'h', pronunciation: "'h' + 'ee'", mnemonic: "A hill dips and rises. Hill starts with 'hi'.", visualCue: '⛰️' },
  { kana: 'ふ', romaji: 'fu', row: 'h', pronunciation: "Soft 'fu', with light lips", mnemonic: "A puff of wind breaks into floating bits. Puff ends with 'fu'.", visualCue: '💨' },
  { kana: 'へ', romaji: 'he', row: 'h', pronunciation: "'h' + 'e'", mnemonic: "A hay roof makes a simple peak. Hay starts with 'he' here.", visualCue: '🏕️' },
  { kana: 'ほ', romaji: 'ho', row: 'h', pronunciation: "'h' + 'o'", mnemonic: "A horse trots past two fence rails. Horse begins with 'ho'.", visualCue: '🐴' },

  { kana: 'ま', romaji: 'ma', row: 'm', pronunciation: "'m' + 'a'", mnemonic: "A magic wand leaves two sparkly trails. Magic starts with 'ma'.", visualCue: '🪄' },
  { kana: 'み', romaji: 'mi', row: 'm', pronunciation: "'m' + 'ee'", mnemonic: "A mini river bends in three places. Mini starts with 'mi'.", visualCue: '🏞️' },
  { kana: 'む', romaji: 'mu', row: 'm', pronunciation: "'m' + 'oo'", mnemonic: "A moon hook catches a tiny star. Moon starts with 'mu'.", visualCue: '🌙' },
  { kana: 'め', romaji: 'me', row: 'm', pronunciation: "'m' + 'e'", mnemonic: "A messy loop crosses itself. Messy starts with 'me'.", visualCue: '🧶' },
  { kana: 'も', romaji: 'mo', row: 'm', pronunciation: "'m' + 'o'", mnemonic: "A motor road has two lanes across it. Motor starts with 'mo'.", visualCue: '🏍️' },

  { kana: 'や', romaji: 'ya', row: 'y', pronunciation: "'y' + 'a'", mnemonic: "A yacht mast catches the wind. Yacht starts with 'ya'.", visualCue: '⛵' },
  { kana: 'ゆ', romaji: 'yu', row: 'y', pronunciation: "Like 'you'", mnemonic: "A looped path makes a U-turn toward you. Say 'yu'.", visualCue: '🪝' },
  { kana: 'よ', romaji: 'yo', row: 'y', pronunciation: "'y' + 'o'", mnemonic: "A yo-yo string drops down with a loop. Yo-yo starts with 'yo'.", visualCue: '🪀' },

  { kana: 'ら', romaji: 'ra', row: 'r', pronunciation: "Light tap between 'r' and 'l' + 'a'", mnemonic: "A rabbit ear pops up, then hops away. Rabbit starts with 'ra'.", visualCue: '🐰' },
  { kana: 'り', romaji: 'ri', row: 'r', pronunciation: "Light tap between 'r' and 'l' + 'ee'", mnemonic: "Two reeds stand in the river. Reed starts with 'ri'.", visualCue: '🎋' },
  { kana: 'る', romaji: 'ru', row: 'r', pronunciation: "Light tap between 'r' and 'l' + 'oo'", mnemonic: "A ruby drops into a loop. Ruby starts with 'ru'.", visualCue: '♦️' },
  { kana: 'れ', romaji: 're', row: 'r', pronunciation: "Light tap between 'r' and 'l' + 'e'", mnemonic: "A red ribbon bends and trails off. Red starts with 're'.", visualCue: '🎀' },
  { kana: 'ろ', romaji: 'ro', row: 'r', pronunciation: "Light tap between 'r' and 'l' + 'o'", mnemonic: "A road loops around a corner. Road starts with 'ro'.", visualCue: '🛣️' },

  { kana: 'わ', romaji: 'wa', row: 'w', pronunciation: "'w' + 'a'", mnemonic: "A washing machine has a tall side and a spinning curve. Washing starts with 'wa'.", visualCue: '🧺' },
  { kana: 'を', romaji: 'wo / o', row: 'w', pronunciation: "Usually pronounced 'o' as a grammar particle", mnemonic: "A winding road makes you say 'woah!' but in sentences it usually sounds like 'o'.", visualCue: '🌀' },
  { kana: 'ん', romaji: 'n', row: 'final n', pronunciation: "A syllable-ending 'n'", mnemonic: "A final noodle curl closes the word. It is the only standalone consonant kana.", visualCue: '〰️' },
];

function shuffleCards(cards: KanaCard[]): KanaCard[] {
  const copy = [...cards];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getJapaneseVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return undefined;
  }

  return window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith('ja'));
}

function App() {
  const [started, setStarted] = useState(false);
  const [deck, setDeck] = useState<KanaCard[]>(() => shuffleCards(baseCards));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  const currentCard = deck[index];
  const complete = started && index >= deck.length;
  const progress = started ? Math.min(index + (complete ? 0 : 1), deck.length) : 0;
  const percent = useMemo(() => {
    if (!started) return 0;
    return Math.round((Math.min(index, deck.length) / deck.length) * 100);
  }, [deck.length, index, started]);

  const playPronunciation = useCallback((card: KanaCard) => {
    if (
      typeof window === 'undefined' ||
      !('speechSynthesis' in window) ||
      !('SpeechSynthesisUtterance' in window)
    ) {
      setAudioUnavailable(true);
      return;
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
    setAudioUnavailable(false);
  }, []);

  const startPractice = () => {
    setDeck(shuffleCards(baseCards));
    setIndex(0);
    setRevealed(false);
    setKnownCount(0);
    setReviewCount(0);
    setAudioUnavailable(false);
    setStarted(true);
  };

  const revealAnswer = () => {
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
    setDeck(reviewDeck.length > 0 ? shuffleCards(reviewDeck) : shuffleCards(baseCards));
    setIndex(0);
    setRevealed(false);
    setKnownCount(0);
    setReviewCount(0);
    setAudioUnavailable(false);
    setStarted(true);
  };

  if (!started) {
    return (
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-8 text-slate-900">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center gap-10 text-center">
          <div className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-orange-700 shadow-sm">
            Nani
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
              Japanese hiragana, one playful hint at a time.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Nani helps you tap through Japanese hiragana, reveal the pronunciation, hear the sound, and remember each symbol with a quick visual mnemonic.
            </p>
            <p className="mx-auto max-w-xl rounded-full border border-orange-200 bg-white/75 px-5 py-3 text-sm font-bold text-orange-700 shadow-sm">
              🔊 Turn your volume up — Nani plays each kana sound when you reveal the answer.
            </p>
          </div>
          <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="text-4xl font-black text-orange-500">46</div>
              <div className="mt-1 text-sm font-medium text-slate-600">basic hiragana</div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="text-4xl font-black text-orange-500">1</div>
              <div className="mt-1 text-sm font-medium text-slate-600">tap to reveal</div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="text-4xl font-black text-orange-500">∞</div>
              <div className="mt-1 text-sm font-medium text-slate-600">shuffle practice</div>
            </div>
          </div>
          <button
            type="button"
            onClick={startPractice}
            className="cursor-pointer rounded-full bg-slate-950 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Start practice
          </button>
        </section>
      </main>
    );
  }

  if (complete) {
    const score = Math.round((knownCount / deck.length) * 100);

    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-8 text-slate-900">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center text-center">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-2xl shadow-orange-200/60 backdrop-blur sm:p-12">
            <div className="text-7xl">🎉</div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Deck complete!</h1>
            <p className="mt-4 text-lg text-slate-600">
              You marked {knownCount} of {deck.length} cards as known. Score: {score}%.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={startPractice}
                className="cursor-pointer rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Shuffle and restart
              </button>
              <button
                type="button"
                onClick={restartWithReview}
                className="cursor-pointer rounded-2xl border border-orange-200 bg-orange-50 px-6 py-4 font-bold text-orange-700 transition hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Practice again
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-6 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">Nani practice</p>
            <h1 className="text-2xl font-black">Tap the card to reveal the sound</h1>
            <p className="mt-1 text-sm font-semibold text-slate-500">🔊 Turn your volume up before you reveal each card.</p>
          </div>
          <button
            type="button"
            onClick={startPractice}
            className="cursor-pointer rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-700"
          >
            Restart
          </button>
        </header>

        <div className="rounded-full bg-white/70 p-2 shadow-inner">
          <div className="h-3 rounded-full bg-orange-500 transition-all duration-500" style={{ width: `${percent}%` }} />
        </div>

        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <button
            type="button"
            onClick={revealAnswer}
            className="group min-h-[28rem] cursor-pointer rounded-[2.5rem] border border-white/80 bg-white/85 p-8 text-left shadow-2xl shadow-orange-200/50 backdrop-blur transition hover:-translate-y-1 hover:shadow-orange-300/60 focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Reveal the answer"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
                {currentCard.row} row
              </span>
              <span className="text-sm font-bold text-slate-400">
                {progress} / {deck.length}
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
                      className="cursor-pointer rounded-2xl bg-slate-950 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
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
                    className="cursor-pointer rounded-2xl bg-emerald-600 px-5 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                  >
                    I knew it
                  </button>
                  <button
                    type="button"
                    onClick={() => nextCard(false)}
                    className="cursor-pointer rounded-2xl bg-orange-600 px-5 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
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

export default App;
