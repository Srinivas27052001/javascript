

// prog to reverse no and check palid or not

// function palid(no)
// {
//     let cppy=no;
//     let rev=0
//     while(no!=0)
//     {
//         let rem=(no%10)
//         rev=(rev*10)+rem
//         no=parseInt(no/10)
//     }
//     console.log(rev)
//     if(rev==cppy)
//     {
//         console.log("no is palid")

//     }
//     else
//     {
//         console.log("not pali")
//     }

// }
// palid(1221)
// ---------------------------------------------------------------------

// pog to find fact of no
// function fact(no)
// {
//     let fact=1
//     for(let i=no;i>=1;i--)
//     {
//         fact*=i
//     }
//     console.log(fact)
// }
// fact(7)
// ----------------------------------------------------------------------
// // prog to print happy no
// function happy(no)
// {
//     while(no>9)
//     {
//         no=vd(no)
//     }
//     console.log(no)
//     if(no==1 || no==7)
//     {
//         console.log(no+" is happy no")
//     }
//     else
//     {
//         console.log(no+" not a happy no")
//     }

//     function vd(no)
//     {
        
//        let sum=0
//        while(no!=0)
//       {
//         let rem=no%10
//         sum=sum+rem*rem;
//         no=parseInt(no/10)

//        }
//        return sum
//     }
// }
// happy(49)

// -----------------------------------------------------------------
// //strong no
// function strong()
// {
//     let no=145
//     let copy=no
//     let sum=0
//     while(no!=0)
//     {   
//         let rem=parseInt(no%10)
//         sum=sum+fact(rem)
//         no=parseInt(no/10)
//     }

//     console.log(sum)
//     if(sum==copy)
//     {
//         console.log("no is strong no")
//     }
// }
// strong()
// function fact(no)
// {
//     let fact=1
//     for(let i=no;i>=1;i--)
//     {
//         fact*=i
//     }
//     return fact
// }
// ---------------------------------------------------------
//  prime numberrrrrrrr
// function prime()
// {
//     let no=12
//     let flag=true
//     for(let i=2;i<no;i++)
//     {
//         if(no%i==0)
//         {
//             flag=false
//             break;
//         }
//     }
//     if(flag)
//     {
//         console.log(no+" is primee")
//     }
//     else{
//         console.log(no+" not a primee")
//     }
// }
// prime()
// ------------------------------------------------------------
// power of number
// function pow()
// {
//     let base=2
//     let pow=3
//     let ans=1
//     console.log(base**pow)
//     while(pow!=0)
//     {
//        ans=ans*base
//        pow--

//     }
// //     console.log(ans)
// }
// pow()
// -------------------------------------------------------------
// // sum of digit
// function sum()
// {
//     let no=145
//     let sum=0
//     while(no!=0)
//     {
//         let rem=no%10
//         sum=sum+rem
//         no=parseInt(no/10)
//     }
//     console.log(sum)
// }
// sum()
// ----------------------------------------------------------------
// count of digits
//   let no=5434
//   console.log(no.toString().length)
// let count=0;
// while(no!=0)
// {
//     no=parseInt(no/10)
//     count++
// }
// console.log(count)

//   console.log(no.toString().split("").length)
// ------------------------------------------------------------

// function ams(no)
//     {
        
//        let sum=0
//        while(no!=0)
//       {
//         let rem=no%10
//         sum=sum+rem*rem*rem*rem;
//         no=parseInt(no/10)

//        }
//        return sum
    
// }
// console.log(ams(1634))
// ---------------------------------------------
// function per()
// {
//     let no=28
//     let sum=0
//     for(let i=0;i<no;i++)
//     {
//         if(no%i==0)
//         {
//             sum=sum+i
//         }

//     }
//     console.log(sum)
// }
// per()
// -------------------------------------------------------
//  disarium no
// function ams(no)
//     {
        
//        let sum=0
//        while(no!=0)
//       {
//         let rem=no%10
//         sum=sum+rem*;
//         no=parseInt(no/10)

//        }
//        return sum
    
// 
console.log(null==undefined)



