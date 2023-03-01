//? Tuple
//* Array-like structure where each element represents some property of a record
//* 각 요소가 레코드의 어떤 속성을 나타내는 배열과 유사한 구조체

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//! 순서가 섞일 가능성 있음
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';

//* annotations 배열 안의 순서대로 입력해야 되게 고정시킴
// const pepsiT: [string, boolean, number] = ['brown', true, 40];
// pepsiT[0] = 40;
//! Type 'number' is not assignable to type 'string'
// pepsiT[2] = 'brown';
//! Type 'number' is not assignable to type 'number'

//~ 직접 수정하는 방법도 있지만 추후 Type alias 시용
//* 재사용 가능
type Drink = [string, boolean, number];
const pepsiT: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//? 튜플을 사용하는곳 CSV, 안쓰는 이유

//& 왜 자주 사용하지 않는지
// 튜플로만 사용했을때 상황을 이해하기 어려움
const carSpecs: [number, number] = [400, 3354];
const carStates = {
  horsepower: 400,
  weight: 3354,
};
