import { useState } from "react";
import Confetti from "react-confetti";
import Header from "./components/Header";
import { fareWellMessage } from "./utilities/fareWellMessage";
import { randomWord } from "./utilities/randomWord";
import { languages } from "./utilities/languages";
import Welcome from "./components/Welcome";
import GameOver from "./components/GameOver";
import "./App.css";

function App() {
  // States
  const [currentWord, setCurrentWord] = useState(() => randomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived Classes
  const langLastIn = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= langLastIn;
  const isGameOver = isGameWon || isGameLost;
  const isLastGuessWrong = !currentWord.includes(
    guessedLetters[guessedLetters.length - 1]
  );

  // Function
  const getGuessedLetter = (letter) => {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  };

  const startNewGame = () => {
    setCurrentWord(randomWord());
    setGuessedLetters([]);
  };

  // Array Methods
  const languageElements = languages.map((lang, i) => {
    const isLangLost = i < wrongGuessCount;
    const styles = {
      color: lang.color,
      backgroundColor: lang.backgroundColor,
    };

    return (
      <span
        key={lang.name}
        style={styles}
        className={`relative p-1 overflow-hidden rounded-sm ${
          isLangLost ? "language-lost" : ""
        }`}
      >
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, i) => (
    <span
      key={i}
      className={`letter-span ${
        isGameLost ? !guessedLetters.includes(letter) && "text-[#EC5D49]" : ""
      }`}
    >
      {isGameLost ? letter : guessedLetters.includes(letter) ? letter : ""}
    </span>
  ));

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboardElements = alphabets.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = currentWord.includes(letter);

    return (
      <button
        onClick={() => getGuessedLetter(letter)}
        key={letter}
        disabled={isGameOver}
        aria-description={letter}
        aria-disabled={isGameOver}
        className={`keyboard-btn ${
          isGuessed ? (isCorrect ? "!bg-[#10A95B]" : "!bg-[#EC5D49]") : ""
        }`}
      >
        {letter}
      </button>
    );
  });

  return (
    <main className="max-w-xl w-full mx-auto flex flex-col items-center px-2.5">
      <Header />

      <section className="message-section">
        {/* Welcome Message */}
        {guessedLetters.length === 0 && <Welcome />}

        {/* Game Over Message */}
        {isGameOver && (
          <GameOver isGameWon={isGameWon} isGameLost={isGameLost} />
        )}

        {/* Wrong Guessed Message */}
        {guessedLetters.length > 0 && isLastGuessWrong && !isGameOver && (
          <div className="bg-[#7A5EA7] guess-message-container">
            <h3 className="text-xl">
              {fareWellMessage(languages[wrongGuessCount - 1].name)}
            </h3>
          </div>
        )}

        {/* Correct Guessed Message */}
        {guessedLetters.length > 0 && !isLastGuessWrong && !isGameOver && (
          <div className="bg-success p-3 border border-dashed border-[#323232]">
            <h3 className="text-xl">💡 Your last guess was correct!</h3>
          </div>
        )}
      </section>

      {/* Language Section */}
      <section className="flex-center gap-2 flex-wrap max-w-[350px] w-full mb-9">
        {languageElements}
      </section>

      {/* Guessed Letter Section */}
      <section className="space-x-1 mb-9 flex">{letterElements}</section>

      {/* Keyboard Letter Section */}
      <section className="flex-center flex-wrap  gap-2 mb-10">
        {keyboardElements}
      </section>

      {/* New Game Button */}
      {isGameOver && (
        <button onClick={startNewGame} className="new-game-btn">
          New Game
        </button>
      )}

      {isGameWon && <Confetti />}
    </main>
  );
}

export default App;
