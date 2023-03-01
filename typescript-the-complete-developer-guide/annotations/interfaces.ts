/*
* Interfaces + Classes => how we get really strong code reuse in Typescript
* Interfaces + Classes => Typescript에서 강력한 코드 재사용 방법
? Plain Definition + Overview
* Interfaces => Creates a new Type, describing the property names and value types of an object
* Interfaces => 객체의 속성 이름과 값 타입을 설명하는 새로운 타입을 생성
*/

//? Examples
//* interface 선언
//* 원하는 유형과 함수 뭐든 할당할 수 있음
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }
//* interface 내의 정의가 완벽히 일치하지 않아도 됨
//! 최소한 요구조건만 충족하면 사용가능 의미에 따라서 사용하도록 해야함
//* 단일 인터페이스를 이용해서 서로 다른 객체의 형태나 속성을 묘사할 수 있다.

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
/*
 * 기본적으로 너무 길고 oldCivic과 함께 호출돼야 할 다른 기능들이 있다면
 * 이 형식의 annotation을 여러번 반복해야할 수도 있다.
 * 이 문제를 해결하기 위해서 Interface를 사용할 수 있다.
& const printVehicle = (vehicle: {
&   name: string;
&   year: number;
&   broken: boolean;
& }): void => {
&   console.log(`Name : ${vehicle.name}
&   Year : ${vehicle.year}
&   Broken? : ${vehicle.broken}`);
& };
*/
//* annotation을 interface로 대체
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
//* 에러가 발생하지 않음!
//& oldCivic의 속성이 interface와 일치하지 않으면 에러 발생
/*
? General Strategy for Reusable Code in Typescript
? Typescript의 코드 재사용을 위한 전략
* create function that accept arguments that are typed with interfaces
* 인터페이스와 함께 입력된 인수를 받아들이는 함수를 만드는 것 
* Objects/classes can decide to 'implement' a given interface to work with a function
* 함수를 호출하기 위해서 객체/클래스는 주어진 인터페이스를 '구현'하여 기능과 함께 작동하도록 결정할 수 있다
*/
