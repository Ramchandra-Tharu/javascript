const clock = document.querySelector('.clock')
const stopBtn = document.querySelector('#stop')
const startBtn = document.querySelector('#start')


let Timer = setInterval(function () {
    let date = new Date ();
    clock.innerHTML = date.toLocaleTimeString();
})

stopBtn.forEach (function (btn){
btn.addEventListener('click',()=>{
    clearInterval(Timer)

})
})


 