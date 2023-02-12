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
        // console.log(`I am ${this.name} I love ${item}`);
        })
       
    },


          print2 : ()=>{
        console.log(this.name);  // this is used in window 
        this.lib.forEach(item=>{
        // console.log(`I am ${this.name} I love ${item}`);  // get error 
        })
       
           }

}

JavaScript.print()




const myObj = {
  name: "John",
  sayName: function() {
    // console.log(this.name);
  },
  sayNameArrow: () => {
    // console.log(this.name);
  }
};

myObj.sayName(); // Output: John
myObj.sayNameArrow(); // Output: undefined



// using arrow function this is known in current property it is not known this 


/******* Check truthy and falsy value  ******** */

// const falsy = [false,NAN,undefined,"",0,null]


/**** ternary operator  */

let adult = 18 ;

// console.log(adult>18 ? "Adult " : "Children")

/************************** array find  ****************************/

let findNumber = [1,2,5,4,7,89,5]
 const search = findNumber.find((item,index,arr)=>item<7)

//  console.log(search);

 /************************** array find  ****************************/

let  nuMber = [1,2,5,4,7,89,5]
 const sEarch = nuMber.findIndex((item,index,arr)=>item===7)

//  console.log(sEarch);


 /************************** array filter  ****************************/

let  nuMBer = [1,2,5,4,7,89,5]
 const FilterItem = nuMBer.filter((item,index,arr)=>item<=7)

//  console.log(FilterItem);


 /************************** array map  ****************************/

let  arrayMap = [1,2,5,4,7,89,5]
 const mapItem = arrayMap.map((item,index,arr)=>item<=7 && index) // return something 


  /********************** array forEach   ********************/ 

 const forEachItem = arrayMap.forEach((item,index,arr)=>item<=7) // not return something 

//  console.log(mapItem); 
//  [
//   0, 1, 2,
//   3, 4, false,
//   6
// ]
//  console.log(forEachItem); // undefined 


const NumberSlice = [1,5,6,7,8,4]
const resultSlice = NumberSlice.slice(1,4);
// console.log(resultSlice); // output :: 5,6,7


const NumberSplice = [1,5,6,7,8,4]
const resultSplice = NumberSplice.splice(1,2,3);
//    splice(startIndex, number_of_removeItem,ifIwant_to_be_addItem)
// console.log(resultSplice); // output :: [5,6]
// console.log(NumberSplice); // output :: [1,3,7,8,4]



const conNum1 = [1,2,3]
const conNum2 = [4,5,6]

const Concatination = conNum1.concat(conNum2)
// console.log(Concatination)  output :: [1,2,3,4,5,6]



const pushNumber = [1,2,3]
const pushResult = pushNumber.push(4,5,6)
const pushResult2 = pushNumber.push("mim")

// console.log(pushNumber)


/************************ Array Reduce Method ********************* */
const ReduceNumber = [1,2,3,4,5]
 const Summation = ReduceNumber.reduce((pre,curr)=>{
 return pre+curr;
 })

//  console.log(Summation)




