export default class Application {
    static makeCarAndManual(): {
        car: Car;
        carManual: CarManual;
    };
}
interface Car {
    wheels: number;
    engine: string;
    gps: string;
}
interface CarManual {
    wheels: string;
    engine: string;
    gps: string;
}
export {};
