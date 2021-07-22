const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7;
    return ageInDogYears;
}
console.log(calculateAgeInDogYears(22));

// -----------------------------------------

const dogBreedSentence = (dogBreed) => {
    if (dogBreed === "meow") {
        return `I like cats`;
    }
    return `my favorite dog breed is ${dogBreed}`;
}
const favoriteDogBreed = dogBreedSentence("pug");
console.log(`When it comes to pets, ${favoriteDogBreed}`);

// ----------------------------------------

const add = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
console.log(add(17, 4, 11));

// ------------------------------------

const go = (direction, speed) => {
    if (speed > 75) {
        return `The car is moving ${direction} at ${speed}mph. SLOW DOWN!`;
    } 
    return `The car is moving ${direction} at ${speed}mph.`;
}
const speedAndDirection = go("uphill", 70);
console.log(speedAndDirection);

// -------------------------------------

const evenOrOdd = (num) => {
    if ((num % 2) != 0) {
        return `${num} is an odd number`;
    }
    return `${num} is an even number`;
}
console.log(evenOrOdd(-3));

const numArray = [2, 11, 23, 6, 0, 90];

for (const num of numArray) {
    console.log(evenOrOdd(num));
}

// -------------------------------------

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
let newWords = [];

const filterOutK = (array) => {
    for (const word of words) {
        if (!word.startsWith("k")) {
            newWords.push(word);
        }
    }   
    return newWords; 
}

const joinWords = (array) => {
    return array.join(' ');
}

const filteredArray = filterOutK(words);
const newSentence = joinWords(filteredArray);
console.log(newSentence);

// Alt way:

console.log(joinWords(filteredArray));

// ---------------------------------------

const didSvenHookATuna = () => {
    const ranNum = Math.random() * 3;
    if (ranNum <= 1) {
        return true;
    } else {
        return false;
    }
}

if (didSvenHookATuna()) {
    console.log("Sven hooked a tuna!  :)");
} else {
    console.log("Sven came up empty-handed  :(");
}

// -------------------------------------

const searchTerm = "Collie";

dogs = [
    {
        type: "dog",
        kind: "Collie"
    },
    {
        type: "cat",
        kind: "chesire"
    }
]

const favoriteDog = (dogArray) => {
    for (const dog of dogArray) {
        if (dog.kind === searchTerm) {
            return `My favorite dog is a ${dog.kind}`;
        } else {
            return `I like cats`;
        }
    }
}

const favDogResult = favoriteDog(dogs);
console.log(favDogResult);