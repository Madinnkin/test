// const number = (str) => {
//     const regExp = /^\d+$/;
//     return regExp.test(str);
// }
//
// console.log(number("123457890"));
//
//
//
//  const Interval = setInterval(() =>{
//      console.log("Прошла секунда")
//  },1000)
//
//
//
//
// let num = 0
// const counter =()=>{
//  num ++
//     console.log(num)
//     if (num <10){
//         requestAnimationFrame(counter)
//     }
// }
// counter()


// test 2

// 1)
const numberss = (str) => {
    return str.match(/\d+/g).map(Number)
}
console.log(numberss("a1fg5hj6"));


// 2)
function secound(prev=0,current =1) {
    if (prev > 144)return;
    console.log(prev);

    setTimeout(()=>{
        secound(current,prev+current)
    },1000)
}
secound();


// 3)


// 4)
const buttonContainer = document.getElementById('button-container');

  buttonContainer.addEventListener('click', function(event){
      if (event.target.tagName === 'BUTTON') {
             const color = event.target.textContent.toLowerCase();
             document.body.style.backgroundColor = color;
      }
  });


// 5)
 const openBlock = document.getElementById('openBlock');
    const closeBlock = document.getElementById('closeBlock');

    closeBlock.addEventListener('click', function() {
        if (openBlock.style.display === 'none') {
            openBlock.style.display = 'block';
            closeBlock.textContent = 'Скрыть блок';
        } else {
            openBlock.style.display = 'none';
            closeBlock.textContent = 'Показать блок';
        }
    });

// 6)
    const counterElement = document.getElementById('counter');
    let count = 0;
    const intervalId = setInterval(() => {
    count++;
    counterElement.textContent = count;

    if (count === 100) {
    clearInterval(intervalId);
}
}, 1);








