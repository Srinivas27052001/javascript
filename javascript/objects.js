// let stud={} //creating object literal way
//    let stud={
//     name:"srini",
//     age:10
//    }
// console.log(stud);
// console.log(typeof stud);
// stud.name1="raj"
// stud.age=19
// stud.skill=["html","css","js"]
// console.log(stud);
// console.log(stud.age);
// console.log(stud.skill);

// var stud=new Object() //creating object using new keyword calling object constructor
// //Diffterentiaing b/w array and object without using typeof 
// console.log(stud);
// let arr=[12,18]
// console.log(typeof arr);
// console.log(Array.isArray(stud));
// console.log(Array.isArray(arr));

// object methods
// 
// var stud={
//     name:"raj",
//     skills:["html","css","js"],
//     behaviour:()=>{console.log("im a student")},
//     id:10,
//     fname:"rajappa",
//     mname:"rajamma"
// }


// 1.object keynames

// console.log(stud)

// console.log(Object.keys(stud))

//  2.object values()

// console.log(Object.values(stud))

// 3.object entries()

// console.log(Object.entries(stud))

// 4.object freeze(): to freeze the object we can't add or alter changes to object

// console.log(Object.freeze(stud))

// 5. object isfrozen() : used to check object is frozen or not it return o/p in boolean form
 
// console.log(Object.isFrozen(stud))

// 6.object seal() we can't add or delet key but we can modify values

// console.log(Object.seal(stud))
// stud.id=20

// console.log(stud)

// 7.object issealed() to check object is sealed or not

// console.log(Object.isSealed(stud))

// 25/01/2024

// console.log(Math.PI);
// console.log(Math.sin(0));
// console.log(Math.sin(30));
// console.log(Math.cos(0));
// console.log(Math.tan(0));
// console.log(Math.cbrt(8));
// console.log(Math.sqrt(64));
// console.log(Math.pow(2,4));
// console.log(Math.ceil(1.001));
// console.log(Math.floor(1.999));
// console.log(Math.round(1.888888));
// console.log(Math.round(1.000001));
// console.log(Math.random());
// console.log(Math.max(23,87,88,6,99));
// console.log(Math.min(23,87,88,6,99));
// let random=(Math.floor(Math.random()*9999+1000));
// console.log(random);
// let ans=Number(prompt("enter otp"))
// if(ans==random)
// console.log("successfully loggedin");
// else
// console.log("login failed")

let max=70
let min=20
console.log(Math.floor(Math.random()*(max-min)+min))
// console.log(Math.abs(-67));
// console.log(Math.random(40)+30);


// 26/01/24

//  arrays object /array destuctive

// let raj={
//     fname:{
//         bike:"tvs",
//         rajGF:{
//             car:"ambassadar"
//         }

//         },
//     mname:"rajamma"
    
//     }
//     console.log(raj.fname.rajGF.car)
//     let{fname:{bike,rajGF:{car}},mname}=raj
//     let{fname:{rajGF}}=raj
//     console.log(bike)
//     console.log(car);
//     console.log(mname);

// let stud={
//     name:"raj",
//     id:123,
//     skills:"js"
// }
// console.log(stud.name);
// let{name,id,skills}=stud
// console.log(name);
// console.log(id);
// console.log(skills);

// array destructive

// let arr1=[1,["hi","hello",[200,0,7]]];
// console.log(arr1[0])
// let[one,[two,three,[twohundred]]]=arr1
// console.log(one);
// console.log(three);










 
  


 