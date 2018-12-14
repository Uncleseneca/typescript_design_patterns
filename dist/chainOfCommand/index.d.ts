interface ComponentWithContextualHelp {
    showHelp: () => string;
}
declare abstract class Component implements ComponentWithContextualHelp {
    tooltipText?: string;
    container: Container;
    showHelp(): any;
}
declare class Container extends Component {
    children: Component[];
    add(child: Component): void;
}
export declare class Application {
    ui: Container;
    constructor();
    test(): any;
}
export {};
