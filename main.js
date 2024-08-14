const number = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(number("123457890"));



 const Interval = setInterval(() =>{
     console.log("Прошла секунда")
 },1000)




let num = 0
const counter =()=>{
 num ++
    console.log(num)
    if (num <10){
        requestAnimationFrame(counter)
    }
}
counter()


