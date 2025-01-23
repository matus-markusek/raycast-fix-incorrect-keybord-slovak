import { Clipboard } from "@raycast/api";
import { getTextForReplacements } from "./functions";

const replacements: { [key: string]: string } = {
  "1": "+",
  "2": "ľ",
  "3": "š",
  "4": "č",
  "5": "ť",
  "6": "ž",
  "7": "ý",
  "8": "á",
  "9": "í",
  "0": "é",
  "[": "ú",
  "]": "ä",
  ";": "ô",
  "\\": "ň",
};

function replaceNumbers(input: string): string {
  let finalString = "";

  input.split(" ").forEach((word, index) => {
    if (index > 0) {
      finalString += " ";
    }

    if (!isNaN(Number(word)) && !isNaN(parseFloat(word))) {
      finalString += word;
      return;
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
      replaceNumbers(
          String(
              await getTextForReplacements()
          )
      )
  );

  return;
}