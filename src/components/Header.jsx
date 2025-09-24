import { languages } from "../utilities/languages";

const Header = () => {
  return (
    <header className="text-center mb-7">
      <h1 className="text-2xl sm:text-3xl">Assembly: Endgame</h1>
      <p className="max-w-[350px] text-[#8E8E8E]">
        Guess the word in under {languages.length - 1} attempts to keep the
        programming world safe from Assembly!
      </p>
    </header>
  );
};

export default Header;
