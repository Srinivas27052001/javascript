let inputs=document.querySelectorAll("input")
let nameError=document.querySelector("#nameError")
let emailError=document.querySelector("#emailError")
let phoneError=document.querySelector("#phoneError")
let passError=document.querySelector("#passError")
let cpError=document.querySelector("#cpError")
// let submit=document.querySelector(`input[type="submit"]`)
let form=document.querySelector("form")

// submit.onclick=()=>{}
// submit.addEventListener("click",(e)=>{
form.addEventListener("input",(e)=>{
    let name=inputs[0].value
    let email=inputs[1].value
    let phone=inputs[2].value
    let pass=inputs[3].value
    let cpass=inputs[4].value
    e.preventDefault()//should use when we write code in form
    // console.log(name);
    evaluteName(name)
    evaluteEmail(email)
    evalutephone(phone)
    evalutepass(pass,cpass)
    
})
// function evalutecpass(cpass,pass)
// {
//   if(cpass==pass)
//   {
//     cpError.innerText="correct password"
//   }
//   else
//   {
//     cpError.innerText="incorrect password"
//   }
// }



function evalutepass(pass,cpass)
{ 
 
  if(solu(65,90,pass))
  {
    passError.innerText="password should contain uppercase"
  }
  else if(solu(97,122,pass))
  {
    passError.innerText="password should contain lowercase"
  }
  else if(solu(48,57,pass))
  {
    passError.innerText="password should contain number"
  }
  else  if(solu(32,47,pass))
  {
    passError.innerText="password should contain special char"
  }
  else if(pass.length<8)
  {
    passError.innerText="password should contain min 8 char"
  }
  else{
    passError.innerText="strong password"
    // evalutecpass(cpass,pass)
    if(cpass==pass)
    {
      cpError.innerText="correct password"
    }
    else
    {
      cpError.innerText="incorrect password"
    }
  }
     
}
function solu(range1,range2,pass)
{
  let flag=true;
  for(let i=0;i<pass.length;i++)
  {
      let asci=pass.charCodeAt(i)
      if((asci>=range1 && asci<=range2))
      {  
          flag=false;
          break
      }
      
    }
   return flag;

}


function evalutephone(phone)
{     
   
   if(!(phone[0]<=9 && phone[0]>=6))
   {
    phoneError.innerText="invalid starting no"
   }
   else if(!(phone.length===10))
   {
    phoneError.innerText="length should be 10"

   }
   
   else
   {
    phoneError.innerText="valid no"
   }   
}

function evaluteEmail(email)
{
  if(!email.includes("@"))
  {
    emailError.innerText="email is not included with @"

  }
//   else if(!email.includes("gmail"))
//   {
//     emailError.innerText="email is not included with gmail"
//   }
  else if(!( email.endsWith(".in") || email.endsWith(".com")))
  {
    emailError.innerText="email is not ending with .com or .in"

  }
  else{
    emailError.innerText="valid mail"
  }  
}
function evaluteName(name)
{
    let para=name.trim();
     
    if(para.length<3)
    {
        nameError.innerText="min it should have a 3 char"
        // console.log("min it should have a 3 char");
    }
    else if(para.length>=3){
        for(let i=0;i<para.length;i++)
        {
            let asci=para.charCodeAt(i)
            if(!((asci>=65 && asci<=90) || (asci>=97 && asci<=122)))
            {
                nameError.innerText="invalid char in name"
                console.log(false);
                break
            }
        else{
            nameError.innerText="valid char in name"
         }
         }
    

    }
}
