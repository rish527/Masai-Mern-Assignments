var num1=5;
const num2=10;

function add(a,b){
    return a+b;
}

const mult=(num1,num2)=>{
    return num1*num2;
}

const result=`Sum of ${num1} and ${num2} = ${add(num1,num2)}
Product  ${num1} and ${num2} = ${mult(num1,num2)} `;


console.log(result);



