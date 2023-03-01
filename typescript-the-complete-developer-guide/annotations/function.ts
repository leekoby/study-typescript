// 함수 안의 실제 로직을 검토하고 올바른걸 하고 있는지 확인하지 않음 이 문제에 대해서는 추후 다룸
const add = (a: number, b: number): number => {
  return a + b;
};
// 인수를 생각하면 항상 annotation을 쓰는 것이 바람직함. 추론되지 않기 때문
// 함수의 반환값은 inference 되긴 하지만 annotation 할 것
// 아래 같은 상황이 벌어질 수 있음
// const subtract = (a: number, b: number) => {
//   a - b;
// };
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//void 반환 값이 없음  return null, undefined 가능
const logger = (message: string): void => {
  console.log(message);
};
// never 함수가 아무것도 반환하지 않고 함수의 끝에 도달하지 못할때만 사용가능
const throwError = (message: string): never => {
  throw new Error(message);
};
//* 반환 값이 있을 경우 never가 아닌 반환하려는 값의 타입
// const throwError2 = (message: string): string => {
//   if (!message) {
//     throw new Error(message);
//   }
//   return message;
// };
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

//* destructuring
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// //es2015
// const logWeather = ({ date, weater }) => {
//   console.log(date);
//   console.log(weather);
// };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);
