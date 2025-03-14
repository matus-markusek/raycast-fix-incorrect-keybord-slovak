import { Clipboard } from "@raycast/api";
import { getTextForReplacements } from "./functions";

const replacements: { [key: string]: string } = {
  "ľ" : "2",
  "š" : "3",
  "č" : "4",
  "ť" : "5",
  "ž" : "6",
  "ý" : "7",
  "á" : "8",
  "í" : "9",
  "é" : "0",
  "ú" : "[",
  "ä" : "]",
  "ô" : ";",
  "ň" : "\\",
};

function replaceCharacters(input: string): string {
  let finalString = "";
  const stringInput = String(input);

  stringInput.split(" ").forEach((word, index) => {
    if (index > 0) {
      finalString += " ";
    }

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!replacements[char]) {
        finalString += char;
        continue;
      }

      finalString += replacements[char];
    }
  });

  return finalString;
}

export default async function Command() {
  await Clipboard.paste(
      replaceCharacters(
          String(
              await getTextForReplacements()
          )
      )
  );

  return;
}
