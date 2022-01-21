import readlineSync from 'readline-sync';

const makeReader = label => () => readlineSync.question(label);

const readName = makeReader('May I have your name? ');

// Driver
export const main = () => {
    const name = readName();

    console.log(`Hello, ${name}`);
};

