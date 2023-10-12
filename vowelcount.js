function countVowels(str) {
    let vowelCount = 0;
    const lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
      const char = lowerStr[i];
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
    return vowelCount;
  }