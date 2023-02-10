let num = 10;
num = num + 3;
num += 3;
num -= 2;
num *= 2;
num /= 2;
num = num + 1;
num++; //Operend Post increment
num--; //Operend Post decrement
++num; //Operend Pre increment
--num; //Operend Pre decrement
console.log(num);

//Operend Post execute code after one line and Operend Pre execute code same line
let num2 = 10;
console.log(num2++); //10
console.log(num2); //11
console.log(++num2); //12
