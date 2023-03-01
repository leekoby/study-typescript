const carMakers: string[] = ['ford', 'kia', 'chevy'];
//* 배열 안의 요소가 string이므로 carMa의 타입을 string[] 으로 추론할 수 있음
const carMa = ['ford', 'kia', 'chevy'];

//* 정보가 부족해서 해당 배열 안에 어떤 유형의 값이 들어갈지 이해하지 못함
const empty = [];

//* 초기 값을 할당하지 않을 경우 annotation을 해야 any type을 피할 수 있음
const annotation: string[] = [];

const dates = [new Date(), new Date()];
//^=> const dates : Date[]

const carsByMake = [['f150'], ['mohabi'], ['camaro']];
//^=>const carsByMake : string[][]

//* 배열의 초기 요소가 없을 떄 2차원 배열의 타입 annotations
const carsMake: string[][] = [];

/**
 *  ? why do we care?
 *  * typescript can do type inference when extracting values from an array
 *  * typescript can prevent us from adding imcompatible values to the array
 *  * we can get help with 'map', 'forEach','reduce' functions
 *  * flexible - arrays can still contain multiple different types
 */

/**
 * ? 배열의 타입이 왜 필요할까?
 * * typescript는 배열에서 값을 추출할 때마다 type 추론을 하도록 도와줍니다.
 * * typescript는 배열에 호환되지 않는 값을 추가하는 것을 방지할 수 있습니다
 * * 우리는 'map', 'for each', 'reduce' 기능으로 도움을 받을 수 있습니다
 * * 유연성 - 배열은 여전히 여러 유형을 포함할 수 있습니다
 */

//& 1. help with inference when extracting values
const car = carMakers[0];
//^ const car : string
const myCar = carMakers.pop();
//^ const myCar : string

//& 2. Prevent incompatible values
// carMakers.push(100);
// ! Argument of type 'number' is not assignable to parameter of type 'string'

//& 3. Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//& 4. Flexible types
const importantDates = [new Date(), '2030-10-10'];
//^ const importantDate:(string|Date)[]

const importantDate: (Date | string)[] = [];
importantDate.push('2030-10-10');
importantDate.push(new Date());

// importantDate.push(100);
// ! Argument of type 'number' is not assignable to parameter of type 'string | Date'

//? where to use typed arrays?
//? Typed Arrays를 어디에 사용해야 할까요?
//* any time we need to represent a collection of records with some arbitrary sort order
//* 어떤 임의의 정렬 순서로 레코드 컬렉션을 표현해야 할 때
