// console.log(1);
// console.log(2)
// console.log("how was ur day");
// setTimeout(()=>{confirm("are u a good boy")},0)
// console.log(3);
// console.log(4);

// let promise=new Promise((res,rej)=>{
//     // res("i am a res")
//     // rej("i am a rej")
// })
// console.log(Promise1);



// *********************
console.log(1);
console.log(2);
let myPromise=new Promise((res,rej)=>{

    // setTimeout(()=>{
        res("accepted ur proposal")
    // },2000)
    // rej("i am a rej")
}).then((e)=>{
    console.log(e);
    return "movie time"
}).then((e)=>{
    console.log(e)
    return "outing"
}).then((e)=>{
    console.log(e)
    return "get engaged"
}).then((e)=>{
    console.log(e);
    console.log("------end---------");
}).catch((err)=>{
    console.log(err);
    console.log("i am a catch method");
    console.log("maga dont worry lets try for new one");
})

// console.log(myPromise)
console.log(3);
console.log(4);