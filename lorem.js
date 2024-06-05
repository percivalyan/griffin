function generateLoremIpsum(paragraphs, wordsPerParagraph) {
  const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur",
    "adipiscing", "elit,", "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua.",
    "Ut", "enim", "ad", "minim", "veniam,", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip",
    "ex", "ea", "commodo", "consequat.", "Duis", "aute", "irure",
    "dolor", "in", "reprehenderit", "in", "voluptate", "velit",
    "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur.",
    "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident,",
    "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit",
    "anim", "id", "est", "laborum."
  ];

  let loremIpsumText = "";
  for (let i = 0; i < paragraphs; i++) {
    for (let j = 0; j < wordsPerParagraph; j++) {
      const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
      loremIpsumText += loremIpsumWords[randomIndex] + " ";
    }
    loremIpsumText += "\n\n";
  }
  return loremIpsumText;
}

const loremIpsum = generateLoremIpsum(3, 50);
console.log(loremIpsum);
