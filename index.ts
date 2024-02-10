// 타입지정
let 이름 :string = '윤효정';
let array :string[] = ['윤효정',];
let object :{name? : string} = {name:'윤효정'};
let union : string | number = '윤효정';

// 타입을 변수에 담을 수 있다.
type Name  = string | number; 
type Player = {
    name:string,
    age?:number,
}

// 함수 파라미터, 리턴 값 모두 타입 지정 가능(리턴 값은 파라미터 오른쪽에 명시)
function 함수( x: number) : number{
    return x * 2
};

function playerMaker(name: string) :Player{
    return{
        name
    }
};

const nico = playerMaker("nico");
nico.age = 24

//어레이 튜플: minimum length, 특정 위치에 특정 타입
type Info = [number, boolean];

let jonh :Info = [2, false];

//object
type Info2 = {
    [key:string] : string,
};
let jack: Info2 = {
    school: '학교',
    age: '13',
}

//class
class User {
    name: string;
    constructor(name:string){
        this.name = name;
    }
}

//readonly

const numarr : readonly number[] = [1,2,3,4];
// numarr.push(5) -> 에러 발생

//unknown
let a:unknown;
if(typeof a === "number"){
    let b = a + 1; 
    //문제없이 동작 a가 숫자인 경우에만 해당하는 코드이기 때문에!
}
if(typeof a === "string"){
    let b = a.toUpperCase();
}

//void :아무것도 리턴하지 않을 때, 따로 지정할 필요 없다!
function noreturn(){
    console.log('void');
}

//never
function neverfun():never{
    throw new Error("x");
}

function hi(name:string|number){
    if(typeof name === 'string'){

    }else if(typeof name === 'number'){

    }else{
        name 
        //이때의 name은 never이다.절대 실행되면 안돼
    }
}