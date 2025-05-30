/*
算術演算子
*/ 
// 加算
let add = 10 + 5;
console.log(add);

// 文字列の結合
let str = "Java" + "Script";
console.log(str);

let result1 = 3 + 3;
let result2 = "3" + "3";

console.log(result1); 
console.log(result2); 


// 減算
let sub = 10 - 5;
console.log(sub);

// 乗算
let mul = 10 * 5;
console.log(mul);

// 除算
let div = 10 / 5;
console.log(div);

// インクリメント
let incr = 10;
incr++;
console.log(incr);

// デクリメント
let decr = 10;
decr--;
console.log(decr);

/*
代入演算子
*/

// 加算して代入
let add2 = 1;
add2 += 2;
console.log(add2);

// 文字列を連結して代入
let str2 = "Java";
str2 += "Script";
console.log(str2);

// 減算して代入
let sub2 = 10;
sub2 -= 5; // 10 - 5
console.log(sub2); // 5

// 乗算して代入
let mul2 = 10;
mul2 *= 5; // 10 x 5
console.log(mul2); // 50

// 除算して代入
let div2 = 10;
div2 /= 5; // 10 ÷ 5
console.log(div2); // 2

/*
比較演算子
*/

// 等しいかどうか
let isEqual = (10 == 10);
console.log(isEqual);

// 等しくないかどうか
let isNotEqual = (10 != 5);
console.log(isNotEqual);

// より大きいかどうか
let isGreater = (10 > 5);
console.log(isGreater);

// より小さいかどうか
let isLess = (10 < 5);
console.log(isLess);

// より大きいか等しいかどうか
let isGreaterOrEqual = (10 >= 10);
console.log(isGreaterOrEqual);

// より小さいか等しいかどうか
let isLessOrEqual = (10 <= 5);
console.log(isLessOrEqual);