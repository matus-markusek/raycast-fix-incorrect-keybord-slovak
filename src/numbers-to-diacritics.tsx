import {
    Clipboard,
    getSelectedText,
  } from "@raycast/api";
  
  async function getSelection() {
    try {
      return await getSelectedText();
    } catch (error) {
      return "";
    }
  }

  function replaceNumbers(input: string): string {
   const replacements: { [key: string]: string } = {
      '2': 'ľ',
      '3': 'š',
      '4': 'č',
      '5': 'ť',
      '6': 'ž',
      '7': 'ý',
      '8': 'á',
      '9': 'í',
      '0': 'é',
  };

  let replacedWord = '';
  for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (replacements[char]) {
          if(i === 0){
            replacedWord += char;
            continue;
          }

          if((input[i+1] == ' ' ||  /^[0-9]$/.test(input[i+1])) && (input[i-1] == ' ' ||  /^[0-9]$/.test(input[i-1]))){
            replacedWord += char;
            continue;
          }

          replacedWord += replacements[char];
      } else {
          replacedWord += char;
      }

  } 

  return replacedWord;
}

  export default async function Command() {
    const clipboard = await Clipboard.readText();
    const selected = await getSelection();
    
    let stringToBeChanged: string | undefined = clipboard;
    if(selected !== '' && selected !== undefined && selected !== "\n"){
      stringToBeChanged = selected;
    }

    if(! stringToBeChanged){
      return;
    }
    
    const valueToBePaste = replaceNumbers(stringToBeChanged)
    Clipboard.paste(valueToBePaste);
    // nemus93
    // nemus93 93 nemus93

    return;
  }
  