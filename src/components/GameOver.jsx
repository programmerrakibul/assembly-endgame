import { languages } from "../utilities/languages";

const GameOver = ({ isGameWon, isGameLost }) => {
  return (
    <div
      className={`${isGameWon && "bg-[#10A95B]"} ${
        isGameLost && "bg-[#BA2A2A]"
      } p-3`}
    >
      <h3 className="text-xl ">
        {isGameWon && "You win!"}
        {isGameLost && "Game over!"}
      </h3>
      <span>
        {isGameWon && "Well done! 🎉"}
        {isGameLost &&
          `You lose! Better start learning ${
            languages[languages.length - 1].name
          } 😭`}
      </span>
    </div>
  );
};

export default GameOver;
