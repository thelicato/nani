import { Link } from '@tanstack/react-router';
import { BrandLogo } from './BrandLogo';

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-8 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col items-center gap-5">
          <BrandLogo size="lg" className="shadow-2xl" />
          <div className="space-y-2">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-700">Hiragana flashcards</p>
            <h1 className="nani-wordmark bg-gradient-to-br from-rose-500 via-orange-500 to-slate-950 bg-clip-text text-7xl font-black leading-none text-transparent drop-shadow-sm sm:text-8xl md:text-9xl">
              Nani
            </h1>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            Japanese hiragana, one playful hint at a time.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Nani helps you tap through Japanese hiragana, reveal the pronunciation, hear the sound, and remember each symbol with a quick visual mnemonic.
          </p>
          <p className="mx-auto max-w-xl rounded-full border border-orange-200 bg-white/75 px-5 py-3 text-sm font-bold text-orange-700 shadow-sm">
            🔊 Turn your volume up. Nani plays each kana sound when you reveal the answer.
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
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/practice"
            className="rounded-full bg-slate-950 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Start practice
          </Link>
          <Link
            to="/hiragana"
            className="rounded-full border border-orange-200 bg-white/80 px-10 py-4 text-lg font-bold text-orange-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            View all hiragana
          </Link>
        </div>
      </section>
    </main>
  );
}
