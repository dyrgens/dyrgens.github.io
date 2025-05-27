const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

let word = "";
rl.question('Enter bulgarian: ', (input) => {
    word = input;
    let romanized = word
        .replace(/а/gi,   "a").replace(/б/gi,   "b").replace(/в/gi, "v")
        .replace(/г/gi,   "g").replace(/д/gi,   "d").replace(/е/gi, "e")
        .replace(/ж/gi,  "zh").replace(/з/gi,   "z").replace(/и/gi, "i")
        .replace(/й/gi,   "y").replace(/к/gi,   "k").replace(/л/gi, "l")
        .replace(/м/gi,   "m").replace(/н/gi,   "n").replace(/о/gi, "o")
        .replace(/п/gi,   "p").replace(/р/gi,   "r").replace(/с/gi, "s")
        .replace(/т/gi,   "t").replace(/у/gi,  "ou").replace(/ф/gi, "f")
        .replace(/х/gi,   "x").replace(/ц/gi,   "c").replace(/ч/gi, "ch")
        .replace(/ш/gi,  "sh").replace(/щ/gi, "sht").replace(/ъ/gi, "u")
        .replace(/ьо/gi, "yo").replace(/ю/gi,  "yu").replace(/я/gi, "ya")

        // for my spelling reforms
        //.replace(/ј/gi, "j")  .replace(/і/gi, "j")  .replace(/ѣ/gi, "ě")
        //.replace(/ѣ̀/gi, "ê")  .replace(/ѫ/gi, "ų")  .replace(/ѭ/gi, "jų")

        // for whitespace
        .replace(/[^а-яА-Я0-9a-zA-Z]/gi, "-");

    console.log(romanized);

    rl.close();
});

