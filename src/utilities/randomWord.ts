import { randomIndex } from "./randomIndex";
import { words } from "./words";

export function randomWord(): string {
  return words[randomIndex(words)];
}
