class TextTransformer {
    constructor(text) {
        this.text = text;
    }

    get characterCount() {
        return this.text.length;
    }

    get uppercaseText() {
        return this.text.toUpperCase();
    }

    get lowercaseText() {
        return this.text.toLowerCase();
    }

    isPalindrome(word) {
       
        const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
        
        
        return cleanWord === cleanWord.split('').reverse().join('');
    }
}


const transformer = new TextTransformer("Anita lava la tina");

console.log("Cantidad de caracteres:", transformer.characterCount);
console.log("Texto en mayúsculas:", transformer.uppercaseText);
console.log("Texto en minúsculas:", transformer.lowercaseText);
console.log("¿Es 'reconocer' un palíndromo?", transformer.isPalindrome("reconocer"));
