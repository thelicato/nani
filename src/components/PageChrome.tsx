import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { BrandLogo } from './BrandLogo';

type PageChromeProps = {
  children: ReactNode;
};

export function PageChrome({ children }: PageChromeProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-6 py-6 text-slate-900">
      {children}
    </main>
  );
}

export function PageHeader() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <Link to="/" className="flex items-center gap-4 rounded-3xl focus:outline-none focus:ring-4 focus:ring-orange-300">
        <BrandLogo size="sm" className="shrink-0" />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">Nani</p>
          <h1 className="text-2xl font-black">Hiragana flashcards</h1>
        </div>
      </Link>
      <nav className="flex flex-wrap gap-3">
        <Link
          to="/practice"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Practice
        </Link>
        <Link
          to="/hiragana"
          className="rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
        >
          All hiragana
        </Link>
      </nav>
    </header>
  );
}
