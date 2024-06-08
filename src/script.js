let clockDisplay = document.querySelector('.parent_container')
setInterval(()=>{
    let clock = new Date()
    clockDisplay.innerHTML = clock.toLocaleTimeString();
},1000)


// const form = document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const hours = document.querySelector('#Hours').value
//     const minutes = document.querySelector('#Minutes').value
//     const totalTimerSeconds = (hours*60*60) + (minutes*60)
    
//     const currentSecond = new Date().getTime()/1000

//     const totalSeconds = currentSecond + totalTimerSeconds;

//     setInterval(() => {
            
//     }, -1000);
//     // console.log(totalTimerSeconds)
//     // console.log(currentSecond)
// })
