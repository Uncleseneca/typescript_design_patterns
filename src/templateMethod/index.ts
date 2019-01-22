abstract class AbstractClass {
  public abstract method1()
  public abstract method2()

  public method3() {
    console.log('method3 of abstract class is called!')
  }
  public method4() {
    console.log('method4 of abstract class is called!')
  }

  public templateMethod() {
    this.method1()
    this.method2()
    this.method3()
    this.method4()
  }
}

class ConcreteClass1 extends AbstractClass {
  public method1() {
    console.log('method1 of concrete class 1 is called!')
  }
  public method2() {
    console.log('method2 of concrete class 1 is called!')
  }
  public method3() {
    console.log('method3 of concrete class 1 is called!')
  }
}

class ConcreteClass2 extends AbstractClass {
  public method1() {
    console.log('method1 of concrete class 2 is called!')
  }
  public method2() {
    console.log('method2 of concrete class 2 is called!')
  }
  public method4() {
    console.log('method4 of concrete class 2 is called!')
  }
}

export class Application {
  public main() {
    const concrete1 = new ConcreteClass1()
    const concrete2 = new ConcreteClass2()

    concrete1.templateMethod()
    console.log('==============')
    console.log('==============')
    concrete2.templateMethod()
  }
}
