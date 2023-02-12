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

// console.log(ByePhone(2658));



/*************** Arrow  function and this keyward ************ */

const JavaScript = {
    name : " Javascript",
    lib  :['react','vue','angular'],


    print : function(){
        // console.log(this);
        this.lib.forEach(item=>{
        console.log(`I am ${this.name} I love ${item}`);
        })
       
    },


          print2 : ()=>{
        console.log(this.name);  // this is used in window 
        this.lib.forEach(item=>{
        console.log(`I am ${this.name} I love ${item}`);  // get error 
        })
       
           }

}

JavaScript.print()




const myObj = {
  name: "John",
  sayName: function() {
    console.log(this.name);
  },
  sayNameArrow: () => {
    console.log(this.name);
  }
};

myObj.sayName(); // Output: John
myObj.sayNameArrow(); // Output: undefined



// using arrow function this is known in current property it is not known this 


/******* Check truthy and falsy value  ******** */

// const falsy = [false,NAN,undefined,"",0,null]


/**** ternary operator  */

let adult = 18 ;

console.log(adult>18 ? "Adult " : "Children")