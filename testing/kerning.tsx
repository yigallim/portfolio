import { ReactNode } from "react";

export function splitWord(input: string): string[] {
  return input.match(/\S+|\s+/g) || [];
}

export function splitLetter(input: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(input)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}

export function splitStringWithSpan(input: string): ReactNode {
  return (
    <>
      {splitWord(input).map((wordOrSpace, wordIndex) => (
        <span
          className="inline-block [&>*]:inline-flex leading-tight overflow-y-clip"
          key={wordIndex}
        >
          {splitLetter(wordOrSpace).map((letter, letterIndex) => (
            <span className={letter} key={letterIndex}>
              <span>{letter === " " ? "\u00A0" : letter}</span>
            </span>
          ))}
        </span>
      ))}
    </>
  );
}
const Help = () => {
  // Define the variable for the second letter
  const secondLetter = "e"; // Change this to modify the second letter in all instances
  const lowerCase = false; // Change this to false for uppercase

  // Array of first letters
  const firstLetters1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
  const firstLetters2 = ["O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // Helper function to adjust the case based on the lowerCase boolean
  const adjustCase = (letter: string) => (lowerCase ? letter.toLowerCase() : letter.toUpperCase());

  return (
    <div className="min-h-[50rem] w-full grid place-content-center">
      <div className="text-5xl font-semibold flex flex-col">
        <div>
          <div className="text-xs">Splitted</div>
          {/* Use the variable to change the case of the first letter */}
          {firstLetters1.map((letter) => splitStringWithSpan(adjustCase(letter) + secondLetter))}
          <br />
          {firstLetters2.map((letter) => splitStringWithSpan(adjustCase(letter) + secondLetter))}
        </div>
        <div>
          <div className="text-xs">Not Splitted</div>
          {firstLetters1.map((letter) => adjustCase(letter) + secondLetter).join("")}
          <br />
          {firstLetters2.map((letter) => adjustCase(letter) + secondLetter).join("")}
        </div>
      </div>
    </div>
  );
};
export default Help;
// Letters problems:

// TaVaWaXaYa
// FeKeTeVeWeXeYe
// vewexeye
// Tu
// FoKoToVoWoXoYo
// vowoxoyo
//
