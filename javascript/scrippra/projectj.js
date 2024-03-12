
function test()
{
    let ran=`#${Math.floor(Math.random()*1000000)}`
    return ran
// console.log(ran)
// document.body.style.background=ran
}


// function  givecoloar1sec()
// {
//     var as=document.querySelectorAll("aside")
//     for (let i=0; i< as.length; i++)
//      {    
//            setTimeout(()=>{
//             as[i].style.background=test()
//            },i*1000)
//     }
// }
var events=["click","dbclick","mouseout","mouseover","keyup","keydown","keypress","resize"]
let section=document.querySelectorAll("section")
let paras=document.querySelectorAll("p")
for(let i=0;i<events.length;i++)
{
    if(i<4)
    {
        paras[i].addEventListener(events[i],()=>{
            section[i].style.background=generateRandom();
        })
    }
    else
    {
        window.addEventListener(events[i],()=>{
        section[i].style.background=generateRandom()
        })
    }
}