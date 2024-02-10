//call signatures

const add = (a:number, b:number) => a+b;

type Add = (a:number, b:number) => number;
const add2:Add = (a,b) => a+b;

//overloading
//mutiple and diff call signatures

type Add2 = {
    (a:number, b:number) : number
    (a:number, b:string) : number

};

const add3: Add2 = (a, b) => {
    if(typeof b === "string") return a
    return a + b
}

type Config = {
    path: string,
    state: object,
}
type Push = {
    (path: string ): void
    (config: Config ): void
}

const push:Push = (config) => {
    if(typeof config == "string") console.log('')
    else console.log(config.path)
}

//polymorphism
type SuperPrint = {
    (arr:number[]):void
    (arr:boolean[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3])
superPrint([true,false,true])

type Generic = {
    <T> (arr:T[]):void
}

const generic: Generic = (arr) => {
    arr.forEach(i => console.log(i))
}

generic([1,2,3]) //인수를 보고 call signature가 알아서 유추
generic([true,false,true])
generic([1,2,true])

type A = Array<number>
let e:A = [1,2,3]

// useState<number>() -> react에서 사용하는 예시

type PlayerInfo<T> = {
    name: string,
    extraInfo: T
}
type HjExtraInfo = PlayerInfo<{favFood: string}> 

const hj: HjExtraInfo = {
    name: '효정',
    extraInfo: {
        favFood:'mandu'
    }
}

//class

abstract class Users {
    constructor(
        private firstname: string,
        private lastname: string,
        public nickname: string,
    ){}
    getFullName(){
        return `${this.lastname} ${this.firstname}`
    }
    abstract getNickname():void
}

class Players extends Users{
    getNickname(){
        return console.log(this.nickname)
    }
}
//protected -> 상속받은 클래스에서는 접근 가능.

const hjs = new Players("효정", "윤", "효효");