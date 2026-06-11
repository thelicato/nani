import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { groupHiraganaByRow, type KanaCard } from '../data/hiragana';
import { playPronunciation } from '../utils/audio';
import { PageChrome, PageHeader } from './PageChrome';

export function HiraganaPage() {
  const [audioUnavailable, setAudioUnavailable] = useState(false);
  const groupedRows = groupHiraganaByRow();

  const handlePlay = (card: KanaCard) => {
    const played = playPronunciation(card);
    setAudioUnavailable(!played);
  };

  return (
    <PageChrome>
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <PageHeader />

        <section className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-700">Hiragana chart</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">All basic hiragana</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Browse every kana in the practice deck. Each card includes the kana, romaji, pronunciation guide, and mnemonic.
              </p>
            </div>
            <Link
              to="/practice"
              className="rounded-full bg-slate-950 px-6 py-4 text-center font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Start practice
            </Link>
          </div>
          <p className="mt-5 rounded-full border border-orange-200 bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700">
            🔊 Turn your volume up, then use any Hear button to replay the kana sound.
          </p>
          {audioUnavailable ? (
            <p className="mt-3 rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-slate-600">
              Audio is not available in this browser. Try Chrome, Edge, or Safari with system voices enabled.
            </p>
          ) : null}
        </section>

        <section className="space-y-6">
          {groupedRows.map((row) => (
            <div key={row.id} className="rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur sm:p-6">
              <h3 className="text-2xl font-black text-slate-950">{row.label}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {row.cards.map((card) => (
                  <article key={card.kana} className="rounded-3xl border border-orange-100 bg-white/85 p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-7xl font-black leading-none text-slate-950">{card.kana}</div>
                        <div className="mt-3 text-3xl font-black text-orange-600">{card.romaji}</div>
                      </div>
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-4xl">
                        {card.visualCue}
                      </div>
                    </div>
                    <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">Pronunciation</p>
                      <p className="mt-2 font-bold">{card.pronunciation}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{card.mnemonic}</p>
                    <button
                      type="button"
                      onClick={() => handlePlay(card)}
                      className="mt-5 w-full rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 font-black text-sky-800 transition hover:-translate-y-0.5 hover:bg-sky-100 focus:outline-none focus:ring-4 focus:ring-sky-200"
                      aria-label={`Hear ${card.kana} pronounced`}
                    >
                      🔊 Hear {card.romaji}
                    </button>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </PageChrome>
  );
}
