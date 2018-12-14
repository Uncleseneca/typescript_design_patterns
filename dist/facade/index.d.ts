export declare class AnyFile {
    name: string;
    content: string;
    ext: string;
    constructor(name: string, content: string, ext: string);
}
export declare class MusicMachine {
    static convert(file: AnyFile, ext: string): AnyFile;
}
