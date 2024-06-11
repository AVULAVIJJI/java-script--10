function findMaxiNumber(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1

    }else if(num2>=num1 && num2>=num3){
        return num2

    }else{
        return num3
    }
}
let number1 = 19
let number2 = 20
let number3 = 45
let maximumnumber = findMaxiNumber(number1,number2,number3)
console.log("The Greastest Number is :" + maximumnumber )