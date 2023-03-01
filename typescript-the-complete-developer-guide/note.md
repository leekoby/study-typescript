# Section 1

Typescript를 사용해야하는 이유 체험.

# Section 2

## type 이란?

- what is types? => An shortcut to refer to the different properties and functions that a value has
- In Typescript, what has a type? => Any value
- Why do we care about types? => They give the Typescript compiler information to analyze our code for errors

## 14 댜양한 type

string = 'hi there' | '' | 'Today is Monday'
number = .000025 | -20 | 40000
boolean = true | false
Date = new Date()
Todo = {id:1, completed: true, title:"Trash"}

### 자료형

Primitive Types : number, boolean, void, undefined / string, symbol, null
Object Types : function, arrays / classes, objects

### Why do we care about types?

- Type은 TypeScript 컴파일러가 오류에 대한 코드를 분석하기 위해 사용됨
- 다른 개발자들이 코드 내에서 어떤 값이 돌아다니는지 알 수 있게 함

## 16 where do we use types? => everywhere!

# Section 3

## 17 Type Annotations(주석) and Inference(추론)

우리가 타입스크립트에게 알려주는것 / 타입스크립트가 타입을 추측하는 것

### Annotations(주석) : Typescript 에게 우리가 어떤 타입의 변수를 입력할 것인지 알려주는 것

- vairables :
- Functions :
- Objects :

### Inference(추론) : typescript는 변수가 의미하는 값의 Type을 파악하려고 합니다

- vairables :
- Functions :
- Objects :

### Annotations(주석) and Inference(추론)을 언제 사용해야하는가?

Annotations :

1.  함수가 'any' type을 반환하고 값을 명확히 해야 할 때
2.  한 줄에 변수를 선언한 후 나중에 초기화할 때
3.  정확히 유형을 추론할 수 없는 변수가 있을 때

Inference : 항상

예시

## 22.

1. Function that returns the 'any' type
   ex) JSON
   'false' => JSON.parse() => boolean  
   '4' => JSON.parse() => number
   '{"value":5}' => JSON.parse() => {value:number}
   '{"name":"alex"}' => JSON.parse() => {name:string}

   위 4가지의 경우 any type이 됨

any type:

- any type에 대해서 어떠한 추론도 할 수 없음
- 'string'이나 'boolean'과 같은 유형
- Typescript는 이것이 무엇인지 알지 못한다. 정확한 속성 참조를 확인할 수 없다는 의미

# Section 4

## 26.

Type annotations for function : code we add to tell Typescript what type of arguments a function will receive and what type of values it will return
Typescript에 함수가 어떤 유형의 인수를 수신하고 어떤 유형의 값을 반환하는지 알려주기 위해 추가하는 코드

Type inference for functions : Typescript tries to figure out what type of value a function will return
유형 스크립트는 함수가 반환할 값의 유형을 파악하려고 시도합니다. 반환값만 추론, 인수는 추론하지 않음

## 32. Array in Typescript

Typeed Arrays => Arrays where each element is some consistent type of value
각 요소가 일정한 유형의 값인 배열입니다

# Section 6

# Section 7

# Section 8

# Section 9

# Section 10

# Section 11

# Section 12

# Section 13

# Section 14

# Section 15

# Section 16

# Section 17

# Section 18
