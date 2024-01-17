// 타입지정
var 이름 = '윤효정';
var array = ['윤효정',];
var object = { name: '윤효정' };
var union = '윤효정';
// 함수 파라미터, 리턴 값 모두 타입 지정 가능(리턴 값은 파라미터 오른쪽에 명시)
function 함수(x) {
    return x * 2;
}
;
var jonh = [2, false];
var jack = {
    school: '학교',
    age: '13',
};
//class
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
