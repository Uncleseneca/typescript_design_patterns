interface ParrotInterface {
    say: (word: string) => string;
}
export declare class Parrot implements ParrotInterface {
    private name;
    constructor(name: string);
    say(word: string): string;
}
declare class BaseDecorator implements ParrotInterface {
    parrot: Parrot;
    constructor(parrot: Parrot);
    say(word: string): string;
}
export declare class WordyParrotDecorator extends BaseDecorator {
    say(word: string): string;
}
export {};
