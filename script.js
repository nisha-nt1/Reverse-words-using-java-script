function reverseWords(sentence) {
    const words = sentence.split(' ');

    // Function to reverse a word
    const reverseWord = (word) => {
        return word.split('').reverse().join('');
    };

    const reversedWords = words.map(reverseWord);
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWords(inputSentence);
console.log('Reversed sentence:', reversedSentence);