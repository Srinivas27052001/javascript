
let inp=document.querySelector("input")
let st=document.querySelector("#selectTag")
let btn=document.querySelector("#selectBtn")
let h2=document.querySelector("h2")
// console.log(st);
btn.addEventListener("click",()=>{
    let data=inp.value
    console.log(data);
    let collections=st.options;
    console.log(collections);
    let index=st.selectedIndex;
    console.log(index);
    let value=collections[index].value
    console,console.log(value);

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