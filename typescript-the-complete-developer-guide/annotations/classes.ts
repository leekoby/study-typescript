/*
* Interfaces + Classes => how we get really strong code reuse in Typescript
* Interfaces + Classes => Typescript에서 강력한 코드 재사용 방법
? Classes => Blueprint to create an object with some fields(values) 
?            and methods (functions) to represent a 'thing'
? Classes => 일부 필드(값)와 메서드(함수)를 사용하여 '사물'을 나타내는 개체를 만드는 Blueprint
* first => Define a set of methods (functions) to represent a 'thing'
* second => Define a set of field (values) to represent a 'thing'

* public => This method can be called any where, any time
* private => This method can only bee called by other methods in this class
* protected => This method can be called by other methods in this class, 
*               or by other methods in child classes
* 다른 사람이 접근할 수 있는 권한을 제어하기 위함.
?
*/

class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beeeeep');
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroooom');
    console.log(this.color);
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
