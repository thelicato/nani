# Nani

<p align="center">
  <img src="public/logo.png" alt="Nani logo" width="220">
</p>

Nani is a friendly hiragana flashcard app for people who are starting to learn Japanese. It helps learners recognize the 46 basic hiragana characters through large visual cards, pronunciation guidance, audio playback, and short memory prompts.

The experience is designed to feel simple, warm, and focused. A learner can start practicing immediately, reveal each answer with one click, listen to the pronunciation, and track progress as they move through the deck.

## What Nani does

Nani helps learners build confidence with hiragana by combining recognition, sound, and memory cues in one lightweight practice flow.

Learners can:

- Start a randomized hiragana practice session
- Tap a card to reveal the answer
- See the romaji pronunciation for each character
- Read a short pronunciation guide
- Use a mnemonic to remember the shape and sound
- Hear the Japanese pronunciation when the answer appears
- Replay the pronunciation whenever needed
- Mark each card as known or needing review
- Track progress with a clear percentage bar
- Browse a complete hiragana reference page

## Main screens

### Home

The home screen introduces Nani with the app logo, a clear start action, and a calm visual style. It is meant to make the app feel approachable for first-time learners.

### Practice

The practice screen is the core flashcard experience. Each card starts with a single hiragana character. When the learner clicks the card, Nani reveals the pronunciation, mnemonic, and visual cue. Audio plays automatically when supported by the browser.

The progress bar includes percentage text so learners always understand how far they are in the session.

### All hiragana

The All hiragana page gives learners a complete reference view of the basic hiragana set. Characters are grouped by row and include romaji, pronunciation guidance, mnemonic text, visual cues, and a replay button for audio.

## Audio experience

Nani uses the browser's built-in Japanese text-to-speech support. This keeps the app lightweight because it does not require separate audio files.

Before practice, the app reminds learners to increase their device volume. When a card is revealed, pronunciation audio is played automatically when the browser supports it. A replay button is also available for each revealed card and each item on the All hiragana page.

Audio quality and voice availability depend on the browser, operating system, and installed voices.

## Design direction

Nani uses a soft visual style with a custom logo, large character cards, rounded panels, and clear interaction states. The interface is intended to be easy to use on both desktop and mobile screens.

The app avoids clutter so the learner can focus on one character at a time.

## Content note

The mnemonic hints and learning prompts are original. They are inspired by visual learning techniques, but they are not copied from any third-party app.

## Browser support

Nani is designed for modern browsers. The core flashcard and reference features work without special setup. Audio playback depends on browser support for speech synthesis and Japanese voices.

For the best audio experience, use a current version of Chrome, Edge, Safari, or another browser with Japanese text-to-speech support enabled.

## For developers and handoff

This section is for installing, running, and modifying the project.

### Tech stack

Nani is built with:

- Vite
- React
- TypeScript
- Tailwind CSS
- TanStack Router
- TanStack Router virtual file routes

### Package manager

This project uses pnpm.

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

### Routes

Nani uses TanStack Router with virtual file routes. The virtual route configuration lives in `routes.ts` and points to route files in `src/routes`.

Current routes:

- `/`: Home page with branding and start action
- `/practice`: Flashcard practice flow
- `/hiragana`: Complete hiragana reference page

The generated route tree is stored in `src/routeTree.gen.ts` and is imported by `src/main.tsx`.

### Project structure

```text
nani/
├── index.html
├── package.json
├── routes.ts
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── public/
│   ├── logo.png
│   └── logo.svg
└── src/
    ├── components/
    │   ├── BrandLogo.tsx
    │   ├── HiraganaPage.tsx
    │   ├── HomePage.tsx
    │   ├── PageChrome.tsx
    │   └── PracticePage.tsx
    ├── data/
    │   └── hiragana.ts
    ├── routes/
    │   ├── hiragana.tsx
    │   ├── home.tsx
    │   ├── practice.tsx
    │   └── root.tsx
    ├── utils/
    │   └── audio.ts
    ├── index.css
    ├── main.tsx
    └── routeTree.gen.ts
```

### Main files

- `src/components/HomePage.tsx`: Home screen and primary start action
- `src/components/PracticePage.tsx`: Flashcard flow, reveal state, scoring, progress, and audio replay
- `src/components/HiraganaPage.tsx`: Complete hiragana reference page
- `src/components/PageChrome.tsx`: Shared page shell and navigation
- `src/components/BrandLogo.tsx`: Shared logo component
- `src/data/hiragana.ts`: Hiragana deck content and grouping helpers
- `src/utils/audio.ts`: Japanese pronunciation playback helper
- `src/index.css`: Tailwind import, base styles, and custom wordmark styles
- `routes.ts`: Virtual route configuration
- `src/main.tsx`: React and TanStack Router entry point
- `public/logo.svg`: Favicon and scalable logo asset
- `public/logo.png`: PNG logo and icon fallback

### Customizing the hiragana content

The deck is defined in `src/data/hiragana.ts` in the `hiraganaCards` array.

Each card includes:

- `kana`: The hiragana character
- `romaji`: The romanized answer
- `row`: The kana row key used for grouping
- `rowLabel`: The display label for the row
- `pronunciation`: A short pronunciation guide
- `mnemonic`: A short memory hint
- `visualCue`: A short visual cue shown after reveal and on the reference page

To add more kana, extend the `hiraganaCards` array with new card objects.
