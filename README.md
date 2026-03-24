# Assembly: Endgame

A fun, interactive word-guessing game built with React and TypeScript. Guess the
word before Assembly language takes over the programming world!

## 🎮 Game Overview

**Guess the word. Beat the board.**

In Assembly: Endgame, you have a limited number of wrong guesses before Assembly
wins. Each wrong guess "defeats" a programming language (HTML, CSS, JavaScript,
React, and more). Can you save the world of programming?

## ✨ Features

- **Interactive Word Guessing**: Guess one letter at a time to uncover the
  hidden word
- **Dynamic Difficulty**: Visual tracker showing which languages have been
  "defeated"
- **Celebration Confetti**: Win animations when you successfully guess a word
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Clean UI**: Built with Tailwind CSS and DaisyUI for a modern look

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4 + DaisyUI
- **Linting**: ESLint
- **Animations**: react-confetti for victory celebrations

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/programmerrakibul/assembly-endgame.git
cd assembly-endgame
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## 📁 Project Structure

- `src/App.tsx` - Main game logic and state management
- `src/components/` - React components (Header, Welcome, GameOver)
- `src/utilities/` - Helper functions (word selection, language data, messages)
- `src/types.ts` - TypeScript type definitions
- `public/` - Static assets

## 🎯 How to Play

1. The game picks a random word
2. Guess letters one at a time
3. Each incorrect guess defeats a programming language
4. Survive with fewer than 6 wrong guesses to win
5. Win: All letters guessed before running out of languages
6. Lose: All languages defeated before guessing the word

## 📝 License

This project is open source and available under the MIT License.
