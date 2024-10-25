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
          className="inline-block [&>*]:overflow-y-clip [&>*]:inline-flex leading-tight"
          key={wordIndex}
        >
          {splitLetter(wordOrSpace).map((letter, letterIndex) => (
            <span key={letterIndex}>
              <span>{letter === " " ? "\u00A0" : letter}</span>
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

const Help = () => {
  return (
    <div className="text-5xl font-semibold flex flex-col">
      <div>
        <div className="text-xs">Splitted</div>
        {splitStringWithSpan("Young")}
      </div>
      <div>
        <div className="text-xs">Not Splitted</div>Young
      </div>
    </div>
  );
};

export default Help;
