// // var num="100"

// // var test=function (x){
// //     console.log(this);
// //     console.log(num);
// //    return x+25
   
// // }

// // var arrow=y=>{ 
// // console.log("hello");
// // console.log(this);
// // return  y+25 
// // }
// // // console.log(test(5));

// // // console.log(arrow(5));

// // // var object={
// // //     named:function()
// // //     {
// // //         console.log(this);
// // //     },
// // //     arr:()=>{
// // //         console.log(this);
// // //     }
// // // }

// // // object.named()
// // // object.arr()

// // // for(let i=0;i<10;i++){
// // //     console.log(i);
// // // }

// function* generator(){
// let num=0
//     while(num<3)
//     {
//         yield num;
//         num++
//     }
//     return "hi"
// }
// var genObj=generator()
// console.log(genObj.next().value);
// console.log(genObj.next().value);
// console.log(genObj.next().value);
// console.log(genObj.next().done);
// console.log(genObj.next().value);
// console.log(genObj.next().value);
// console.log(genObj.next().value);

// console.log(generator().next().value);
// console.log(generator().next().value);
// console.log(generator().next().value);
// console.log(generator().next().value);
// // try
// // {
// //     let num1=0
// //     while(true)
// //     {
// //       console.log(num1);
// //         num1++
// //     }
// // }

// // catch(e)
// // {
// //     console.log(e);
// // }



// // let arrow=x=>x+56
// // console.log(arrow(5));


// // let arrow=x=>{ 
// //     console.log("multiple statetement should use {}");
// //     console.log("explicit return");
// //      x+56}
// // console.log(arrow(5));



// var arr=[];
// console.log(arr);
// console.log(typeof arr);
// arr[0]=10;
// arr[1]=11;
// arr[2]=12;
// console.log(arr);


// function add()
// {
//     console.log("i ama add");
// }
// add()
// console.log(typeof add());
// console.log(typeof add);

// var arr=[12,"hi",true]
// console.log(arr);
// arr.unshift("a","b","c")
// arr.shift()
// console.log(arr);


// var brr=[]//literal way
// //declaring the array

// console.log(brr);
// console.log(typeof brr);
// //initializing the array
// brr[0]=10;
// brr[1]=20;
// console.log(brr);
// console.log(brr.length);
// //accessing the array elements
// console.log(brr[0]);
// console.log(brr[4]);


// for(let i=0;i<5;i++)
// {
//     if(i==0)
//     {
//         arr[i]=10
//     }
//     else{
//         arr[i]=arr[i-1]+10
//     }
// }
// console.log(arr);

// var arr=[12,"h"]
// arr[4]=200;
// arr.push(500,67,"hi",true)
// console.log(arr.pop());
// arr.unshift("hi","hello")

// arr.shift()

// console.log(arr);

// var arr=[]
// console.log(arr);
// console.log(typeof arr);
// arr[0]=12;
// arr[1]=19;
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// var arr=[12,"hi",true,undefined,null,12n,Symbol(1100),function(){console.log("fnc");}]
// console.log(arr);

// var arr=[12,18,56,45,56]
// var brr=[100,200,300]
// console.log(arr);
// arr.push(15,18)
// arr.pop(34567)
// arr.unshift(13,19,"hello")
// arr.shift()
// console.log(arr);
// console.log(arr.length);
// console.log(arr[4]);

// let arr=[12,67,97,"hi",true]
// console.log(arr);
// arr.splice(1,1)//[12, 97, 'hi', true]
// arr.splice(-3,2)//(3) [12, 67, true]
// arr.splice(3,0,100,200)//(7) [12, 67, 97, 100, 200, 'hi', true]
// arr.splice(2,2,56,67,89)//(7) [12, 67, 56, 67, 89, true]
// console.log(arr);






// var brr=[100,200,300]

// console.log(arr.indexOf(44));
// console.log(arr.indexOf(97));
// console.log(arr.includes("56"));
// console.log(arr.includes(67));
// console.log(arr+brr);
// console.log(arr.concat(brr));

// console.log( arr.toString());
// console.log(arr.slice(1,4));
// console.log(arr.slice(-4,-1));











// var arr=[12,18,56,45,75,300,767]


// function generalized(cb,paraArr)
// {
    
// for(let i=0;i<paraArr.length;i++)
// {
//    console.log(paraArr[i],i,paraArr);
// }

// }

// function isGreater50(x)
// {
//     return x>50
// }

// function isGreater100(x)
// {
//     return x>100
// }

// console.log(generalized(isGreater100,arr));
// let j=0
// let ans;
// while(j<arr.length)
// {
//     if(arr[j]>50)
//     {
//         ans=arr[j]
//         break;
//     }
//     j++
// }
// console.log(ans);

// arr.find((ele,index,thisArr)=>{
//     console.log(ele,index,thisArr);
// })


// var brr=[12,]



// var arr=["rajesh","preetham","kiran" ,"ajay"]
// console.log(arr.sort());//works well for string elements




var arr=[12,45,75,18,56]

// console.log(arr.sort((a,b)=>a-b));//ascending order
// console.log(arr.sort((a,b)=>b-a));//descending order






// console.log(arr);
// console.log(arr.reverse());

// console.log(arr.find((x)=>x>200));
// console.log(arr.findIndex((x)=>x>200));




// var returnReduce=arr.reduce((iv,ele,index,myArr)=>{
//   return iv+ele
// },1000)
// console.log(returnReduce);

















// var ansMap=arr.map((ele,index,arr)=>{
//   return ele+"value added"
// })
// console.log(ansMap);


// var ansFilter=arr.filter((ele,index,arr)=>ele>=18)
// console.log(ansFilter);
// var moneyGiven=ansFilter.map((ele)=>{
//     if(ele>60)
//     {
//         return 2000
//     }
//     else{
//         return 1000
//     }
// })
// console.log(moneyGiven);

// var reducedAns=moneyGiven.reduce((iv,acc,index,arr)=>{
//     return iv+acc
// },5000)
// console.log(reducedAns);


// var str="hello"
// str[0]="a"
// console.log(str[0]);
// console.log(str);

// var arr=[12,13,15]
// arr[0]=120;
// console.log(arr);


// var str="abc"
// var copy=str;
// copy="xyz"
// console.log(copy);
// console.log(str);

// var arr=[10,20,30]
// var copy=arr;
// copy[0]=35;
// console.log(copy);
// console.log(arr);
// let copy1=arr;
// let copy2=copy1;
// copy2[0]="hello"

// console.log(copy2);
// console.log(arr);

// var arr=["z","g","a","y"]

// // var sortedArr=arr.sort()
// // console.log(sortedArr);

// var sortans=arr.toSorted()
// console.log(sortans);
// var reversed=arr.reverse()
// console.log(reversed);

// var arr=[]
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// var student={}
// console.log(student);
// console.log(typeof student);


// student.name1="rajesh"
// student.age=20;
// student.skills=["html","css","js","react","node"]


// student[10]="i am a ten value"
// console.log(student);
// student.age=25
// delete student.skills
// console.log(student);


// let stud1={}



// let stud2={
//     name1:"rakesh",
//     age:29,
//     skills:["js","node","react-js"],
//     sal:"3 lpm",
//     bike:"ducati",
//     behaviour:()=>{
//         console.log("is a naughty boy");
//     }
// }
// let stud={
//          name1:"rakesh",
//         age:29,
//         sal:"3 lpm"    
// }
// let arr2=["html","css","js","react","node"]
// let str="hihello"
// for(let items of str)
// {
//     console.log(items);
// }

// console.log(Object.keys(stud));
// console.log(Object.values(stud));
// console.log(Object.entries(stud));


// console.log(stud);
// Object.freeze(stud);
// console.log(Object.isFrozen(stud));
// stud.bike="bmw"
// delete stud.age;
// stud.sal="5 lpm"
// console.log(stud);


// let students=[{
//     name1:"rajesh",
//     age:28,
//     skills:["js","node","react-js"],
//     sal:"2lpm",
//     bike:"bmw",
//     behaviour:()=>{
//         console.log("is a good boy");
//     }},{
//         name1:"rakesh",
//         age:29,
//         skills:["js","node","react-js"],
//         sal:"3lpm",
//         bike:"ducati",
//         behaviour:()=>{
//             console.log("is a naughty boy");
//         }
//     }]


// console.log(students[1].age);







// for(let items in stud1)
// {
//     console.log(items);
//     console.log(stud1[items]);
// }
// var objKeys=Object.keys(stud1)
// console.log(objKeys);

// for(let i=0;i<objKeys.length;i++)
// {
//     console.log(stud1[objKeys[i]]);
// }

// var objVal=Object.values(stud1)
// console.log(objVal);

// console.log("----=------");
// console.log(Object.entries(stud1));







// Object.freeze(stud1)
// Object.seal(stud1)
// // console.log(Object.isFrozen(stud1));
// stud1.sal="3 lpm"
// delete stud1.age;
// stud1.bike="bmw"
// console.log(Object.isSealed(stud1));
// console.log(stud1);

// console.log(stud1);
// Object.freeze(stud1)
// delete stud1.age
// console.log(stud1);


// stud1.bike="ducati"
// console.log(stud1);

// stud1.name1="rakesh"
// console.log(stud1.name1);






// console.log(student["name1"]);
// console.log(student["age"]);
// console.log(student[10]);



// student.name1="rakesh"
// var student={
//     name1:"rajesh",
//     age:20,
//     skills:["html","css","js","react","node"],
//     behaviour:function test ()
//     {
//         console.log("is a good boy");
//     },
//     10:"i am a ten "

// }


// console.log(student);
// console.log(student[10]);
// console.log(student["age"]);

// student.behaviour()
// student.test()



// student.skills[0]="hello"
// console.log(student.age);
// delete student.age;
// console.log(student.bike);



let raj={
    fName:{
        bike:"tvs",
        rajGF:{
            car:"ambassador"
        }
    }
}
// console.log(raj.fName.rajGF.car);
// let {fName:{bike,rajGF:{car}}}=raj

// console.log(car);

// let stud={
//     name:"raj",
//     id:123,
//     skills:"js"
// }
// console.log(stud.name);
// let {name,id}=stud
// console.log(name);
// console.log(id);

// let arr1=[1,["hi","hello",[200]]]

// console.log(arr1[1][2][0]);
// let [one,[two,three,[twohundred]]]=arr1
// console.log(two);
// console.log(twohundred);


// console.log(Math.sin(0));
// console.log(Math.cos(0));
// console.log(Math.tan(0));
// console.log(10/3);
// console.log(Math.ceil(10/3));
// console.log(Math.floor(10/3));
// console.log(Math.round(1.3));
// console.log(Math.round(1.8));

// console.log(Math.floor(Math.random()*1000+1000));

// let min=20;
// let max=70;
// console.log(Math.floor(Math.random()*(max-min)+min));


// console.log(Math.min(12,978,56,-68,-45,0,345,89));
// console.log(Math.max(12,978,56,-68,-45,0,345,89));

// console.log(Math.pow(2,5));
// console.log(Math.abs(-67));
// console.log(Math.cbrt(27));
// console.log(Math.sqrt(64));

// console.log(window);
// console.log(window.screen.availHeight);
// console.log(window.screen.height);
// console.log(window.screen.availWidth);
// console.log(screen.width);

// console.log(navigator);
// navigator.geolocation.getCurrentPosition((e)=>{
//     console.log(e);
// console.log(e.coords.latitude);
// console.log(e.coords.longitude);
// })

// console.log(location)
// ;
// setInterval(()=>{
//     location.reload()
// },1000)

// setTimeout(()=>{
// location.replace("https://www.google.com/maps/place/12%C2%B058'35.0%22N+77%C2%B033'01.7%22E/@12.9763776,77.5502362,20.52z/data=!4m4!3m3!8m2!3d12.9763776!4d77.5504666?entry=ttu")
// },1000)

// setTimeout(()=>{
//     location.replace("https://www.flipkart.com/zhao-men-washed-casual-grey-white-shirt/p/itm4cb2c04204640?pid=SHTGS3KSZQ4HHHDJ&lid=LSTSHTGS3KSZQ4HHHDJSKQ5FT&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_2&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=en_lFSVO90c4dGrFfwinxYpBH-ihEHMyeA4gUUeP3cBWZi1b6W-X_AnSei4-hciBWifPXEJBwCmvIMD-kFE99pSsw%3D%3D&ppt=browse&ppn=browse&ssid=us1dpiuuao0000001706704108863")
// },2000)
// console.log(window.document);
// console.log(window.document.body);
// console.log(typeof window.document.head);
// console.log(document.body.h1);
// var css=document.getElementById("css")
// console.log(css);
// console.log(typeof css);
// css.style.background="green"

// var ans=document.getElementsByClassName("myclass")
// console.log(ans);
// console.log(ans[0]);
// console.log(Array.isArray(ans));
// ans.push(46)
// ans[0].style.background="yellow"
// ans[1].style.background="yellow"
// var pureArr=Array.from(ans)
// pureArr.forEach((e,i)=>{

//     i%2==0?e.style.background="green":e.style.background="red"
// })
// var h3=document.getElementsByTagName("h3")
// console.log(h3);

// for(let i=0;i<h3.length;i++)
// {
//     h3[i].style.background="grey"
// }

// var elem=document.querySelector("#css")
// console.log(elem);
// elem.style.background="green"
// var elem1=document.querySelector(".myclass")
// console.log(elem1);
// elem1.style.background="red"
// var ele2=document.querySelector("h3")
// console.log(ele2);
// ele2.style.background="yellow"


// var elem=document.querySelector("div aside h3")
// console.log(elem);
// elem.style.background="green"


// var ele2=document.querySelectorAll("h3")
// console.log(ele2);
// // ele2.style.background="yellow"
// console.log(Array.isArray(ele2));

// document.querySelector("pre").style.background="#123456"
// let ran=`#${Math.floor(Math.random()*1000000)}`
// console.log(ran);
// document.body.style.background=ran

// var btn=document.querySelector("button")
// console.log(btn);
// btn.addEventListener("click",giveColor1SEC)
// btn.addEventListener("mouseover",test)
// btn.addEventListener("mouseout",test)

// window.addEventListener("resize",test)
// window.addEventListener("keyup",test)
// window.addEventListener("keydown",test)

function generateRandom()
{   
    let ran=`#${Math.floor(Math.random()*1000000)}`
    return ran
// console.log(ran);
// document.body.style.background=ran
//     console.log(" i AM CLICKED");
}
// function giveColor1SEC(){
// var asides=document.querySelectorAll("aside")
// for(let i=0;i<asides.length;i++)
// {
// setTimeout(()=>{
//     asides[i].style.background=test()
// },i*1000)
// }}

// let p=document.createElement("p")
// console.log(p);
// p.innerText="hi hello everyone"
// document.body.append(p)

// let h2=document.createElement("h2")
// h2.innerText="i am h2 created from js"
// console.log(h2);
// let div=document.querySelector("div")
// console.log(div);
// div.append(h2)

// let aside=document.createElement("aside")
// let section=document.createElement("section")
// let h3=document.createElement("h3")
// let h4=document.createElement("h4")
// h3.innerText="i am h3"
// h4.innerText="i am h4"
// let p=document.querySelector("p")
// p.append(aside)
// aside.append(section)
// section.append(h3,h4)
// let p=document.querySelector("p")
// p.innerText=`<aside>
// <section>
//                <h3>i am h3</h3>
//     <h4>i am h4</h4>
// </section>
// </aside>`


// let tab=document.createElement("table")
// let tr1=document.createElement("tr")
// let tr2=document.createElement("tr")
// let tr3=document.createElement("tr")
// let td1=document.createElement("td")
// let td2=document.createElement("td")
// let td3=document.createElement("td")
// let td4=document.createElement("td")
// let td5=document.createElement("td")
// let td6=document.createElement("td")
// let td7=document.createElement("td")
// let td8=document.createElement("td")
// let td9=document.createElement("td")
// td1.innerText="1"
// td2.innerText="2"
// td3.innerText="3"
// td4.innerText="4"
// td5.innerText="5"
// td6.innerText="6"
// td7.innerText="7"
// td8.innerText="8"
// td9.innerText="9"
// tab.append(tr1,tr2,tr3)
// tr1.append(td1,td2,td3)
// tr2.append(td4,td5,td6)
// tr3.append(td7,td8,td9)
// document.body.append(tab)
// tab.style.border="2px solid red"
// td1.cellPadding="20px"
// td1.style.border="20px solid red"
// tab.cellSpacing="20px"
// console.log(window.fetch("https://api.github.com/users"));
// console.log("hi")
// console.log("hi")
// console.log("hi")
// console.log("hi")
// console.log("hi")
// alert("hello")
// console.log("bye");
// console.log("bye");
// console.log("bye");

// console.log("hi");
// var myPromise=new Promise((resolve,reject)=>{
//     // reject("ur rejected")
//     resolve("accepted")
// })
// .then((e)=>{
//     console.log(e);
//     return "can allow to msg"
// }).then((e)=>{
//     console.log(e);
// })
// .catch((e)=>{
// console.log(e);
// })
// console.log(myPromise);

// console.log("hello");


// let btn=document.querySelectorAll("button")
// let h2=document.querySelector("h2")
// console.log(typeof h2.innerText);
// btn[0].addEventListener("click",()=>{
// let val=Number(h2.innerText)
// val--

// h2.innerText=val
// })
// btn[1].addEventListener("click",()=>{
//     let val=Number(h2.innerText)
//     val++
//     h2.innerText=val
//     })

// let items=document.querySelectorAll("aside")
// for(let i=0;i<5;i++)
// {
//     for(let j=0;j<5;j++){
//    if(i%2==0)
//    {
//     items[i].style.background="black"
//    }
// }
// }
// let il=items.length
// let sqrt=Math.sqrt(il)

// console.log(sqrt);
// for(let i=0;i<il;i++)
// {
//     if(((i)%sqrt==0)||((i+1)%sqrt==0)||(i<sqrt)||(i<il &&(i>(il-sqrt)))){
//         items[i].style.background="black"
//         // for hollow block
//     }
//     if(i%(sqrt-1)===0 &&(i!==0 && i!==il-1 ))
//     {
//         items[i].style.background="black"
//         // for left diagonal

//     }
//       if(i%(sqrt+1)===0 )
//     {
//         items[i].style.background="black"
//         // for right diagonal

//     }


// }


// let data=[
//     {
//     name1:"squirrel",
//     wt:"200gm",
//     image:"https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_640.jpg"
//     }, 
    
//     {
//      name1:"cat",
//      wt:"2kg",
//     image:"https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg"
//         },
         
//      {  name1:"lion",
//             wt:"200kg",
//             image:"https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg"
//         },
            
//         {
//                 name1:"tiger",
//                 wt:"200gm",
//                 image:"https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_640.jpg"
//                 },

// ]

// let img=document.querySelector("img")
// let h2s=document.querySelectorAll("h2")
// let btns=document.querySelectorAll("button")
// let num=0
// btns[0].addEventListener("click",()=>{
    
//     num--
//     if(num<0)
//     {
//         num=data.length-1
//     }
//     changeContent(num)
// })
// btns[1].addEventListener("click",()=>{
//     num++
//     if(num>data.length-1)
//     {
//         num=0
//     }
//    changeContent(num)
   
//     console.log("nxt");
// })
// console.log(data[0].wt);

// function changeContent(para){
// img.src=data[para].image
// h2s[0].innerText=data[para].name1
// h2s[1].innerText=data[para].wt
// }

// window.addEventListener("DOMContentLoaded",()=>{
//     changeContent(0)
//     console.log("after creating dom tree");
// })
// setInterval(() => {
//     num++
//     if(num>data.length-1)
//     {
//         num=0
//     }
//     changeContent(num)
// }, 1000);

// input DATA
// let inp=document.querySelector("input")
// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     let dataValue=inp.value.trim()
//     console.log(dataValue);
//     document.body.style.background=dataValue
// })

// let iEven=document.querySelector("#even")
// let eBtn=document.querySelector("#evenBtn")
// let h2=document.querySelector("h2")
// eBtn.addEventListener("click",()=>{
//     let val=iEven.value.trim()
//     if(val%2===0)
//     {
//         h2.innerText=`${val} is a even num`
//         speak1(`${val} is a even num`)
//     }
//     else{
//         h2.innerText=`${val} is not  a even num`

//     }
// })


// function speak1(talk)
// {
//     let speech=new SpeechSynthesisUtterance(talk)
//     window.speechSynthesis.speak(speech)
// }
// speak1("hi hello")

let inp=document.querySelector("input")
let st=document.querySelector("#selectTag")
let btn=document.querySelector("#selectBtn")
let h2=document.querySelector("h2")
// console.log(st);
btn.addEventListener("click",()=>{
    let data=inp.value
    let collections=st.options;
    let index=st.selectedIndex;
    let value=collections[index].value

 if(value=="even")
 {
    if(isEven(data))
    {
   h2.innerText=`${data} is a even num`
    }
    else{
        h2.innerText=`${data} is not even num`
    }
 }
 else if(value=="odd")
 {
    if(isOdd(data))
    {
   h2.innerText=`${data} is a Odd num`
    }
    else{
        h2.innerText=`${data} is not Odd num`
    }
 }

})

function isEven(num)
{
    return num%2===0
}

function isOdd(num)
{
    return num%2!==0
}