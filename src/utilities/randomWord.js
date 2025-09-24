import { words } from "./words";

export function randomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
