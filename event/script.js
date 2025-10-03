const clock = document.querySelector('.clock')
const stopbtn = document.querySelector('#stop')
const startbtn = document.querySelector('#start')


let Timer = setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);

stopbtn.addEventListener('click',()=>{
    clearInterval(Timer);
})
