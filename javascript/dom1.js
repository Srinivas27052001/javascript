
// document.querySelector("body").style.background="#123456"
// let ran=`#${Math.floor(Math.random()*1000000)}`
// console.log(ran)
// document.body.style.background=ran

var btn=document.querySelector("button")
console.log(btn);
btn.addEventListener("click",test)
// btn.addEventListener("keyup",test)
// btn.addEventListener("mousein",test)
// btn.addEventListener("mouseover",test)
// btn.addEventListener("mouseout",test)

// window.addEventListener("resize",test)
// window.addEventListener("keyup",test)
// window.addEventListener("keydown",test)
// window.addEventListener("mousemove",test)
// window.addEventListener("mousein",test)


function test()
{
    let ran=`#${Math.floor(Math.random()*1000000)}`
    console.log(ran)
    document.body.style.background=ran

    console.log("i am clicked")
}

