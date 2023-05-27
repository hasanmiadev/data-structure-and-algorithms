const characterCount = str => {
  let characterList = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char.match(/[a-z]/)) {
      if (characterList[char] > 0) {
        characterList[char]++;
      } else {
        characterList[char] = 1;
      }
    }
  }
  return characterList;
};

console.log(characterCount("Hello Everyone"));
