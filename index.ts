// 타입지정
let 이름 :string = '윤효정';
let array :string[] = ['윤효정',];
let object :{name? : string} = {name:'윤효정'};
let union : string | number = '윤효정';

// 타입을 변수에 담을 수 있다.
type Name  = string | number; 

// 함수 파라미터, 리턴 값 모두 타입 지정 가능(리턴 값은 파라미터 오른쪽에 명시)
function 함수( x: number) : number{
    return x * 2
};

//어레이 튜플
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