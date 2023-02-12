let name = "Ehsan marketing"
const name2 = "Employee of Ehsan Marketing "

// console.log(name +"\n"+ name2)  


/* Arrow Function  */

const number = num =>2*num;   // if it has one parameter 
// console.log(number(10))


const summation =(a,b,c)=>a+b+c;
// console.log(summation(1,2,5))

const ByePhone  = taka =>{
    var brand ; 
    if(taka<5000) {
        brand = "Button"
    }
    else { brand = "Smart"}

    return `you have bye a ${brand} phone`;
}

console.log(ByePhone(2658));