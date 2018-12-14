declare class Application {
    createUI: any;
    render: any;
    private button;
    private checkbox;
    constructor(factory: GUIFactory);
    run: () => void;
}
export declare class ApplicationConfigurator {
    static configure: () => Application;
}
interface GUIFactory {
    createButton: () => Button;
    createCheckbox: () => Checkbox;
}
interface Checkbox {
    render: () => void;
}
interface Button {
    render: () => void;
}
export {};
