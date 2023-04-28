

main();
config();
confirm();
function confirm(){
    let worktimeInput = document.getElementById("workTime");
    let breaktimeInput = document.getElementById("breakTime");
    let longtimeInput = document.getElementById("longBreakTime");
    let maxlapseInput = document.getElementById("maxLapse");

    worktimeInput.addEventListener("input",function(){
        minutes = parseInt(this.value);
        fixmin = parseInt(this.value);
    });
    breaktimeInput.addEventListener("input",function(){
        breakMinutes = parseInt(this.value);
    });
    longtimeInput.addEventListener("input",function(){
        longBreakMinutes = parseInt(this.value);
    });
    maxlapseInput.addEventListener("input",function(){
        MaxLapse = parseInt(this.value);
    });


}
function main(){
    let button = document.querySelector(".button");
    let clock = document.querySelector(".clock");
    let intervalID;
    let alarm = document.querySelector("audio");
    let bSwitch = document.querySelector(".switch");
    let counter = document.querySelector(".counter");
    let minutes = parseInt(clock.textContent);
    let fixmin = parseInt(clock.textContent);
    let seconds = 0;
    let cc = 0;
    let breakMinutes = 5;
    let texto = document.querySelector(".text");
    let MaxLapse = 4;
    let longBreakMinutes = 15;
    
    button.addEventListener("mousedown",start);


    
    function start(){
        if(button.textContent == "START"){
            
            button.classList.add('active');
            clock.classList.remove("animate__shakeX")
            button.textContent = "PAUSE";
            counter.classList.remove("animate__heartBeat")
            run();
            bSwitch.play();
        }else{
            bSwitch.play();
            button.textContent = "START";
            button.classList.remove('active');
            clearInterval(intervalID);
        }
        
    }


    function breakClock(){
        alarm.play();

        button.textContent = "START";
        if(minutes > 9){
            clock.innerHTML = breakMinutes.toString()+":00";
        }else{
            clock.innerHTML = breakMinutes.toString()+":00";
        }
        seconds = 0;
        clock.classList.add("animate__shakeX");
        counter.classList.add("animate__heartBeat")
        clock.classList.add("buttonBreak");
        button.classList.add("buttonBreak");


        counter.textContent = "#"+ cc;
        minutes = breakMinutes;
        texto.textContent = "Break Time!";
       
    }

    
    function resetClock(){
        alarm.play();
        button.textContent = "START";
        if(minutes > 9){
            clock.innerHTML = fixmin.toString()+":00";
        }else{
            clock.innerHTML = fixmin.toString()+":00";
        }
        seconds = 0;
        clock.classList.remove("buttonBreak");
        button.classList.remove("buttonBreak");
        clock.classList.add("animate__shakeX");
        counter.textContent = "#"+ cc;
        
        minutes = fixmin;
        texto.textContent = "Work Time!";
    }
    
    function longBreak(){
        minutes = longBreakMinutes;
        button.textContent = "START";
        if(minutes > 9){
            clock.innerHTML =  minutes.toString()+":00";
        }else{
            clock.innerHTML = minutes.toString()+":00";
        }
        seconds = 0;
        clock.classList.add("animate__shakeX");
        
        clock.classList.add("buttonBreak");
        button.classList.add("buttonBreak");
        cc = MaxLapse;
        counter.textContent = "#"+cc;
        minutes = longBreakMinutes;
        texto.textContent = "Break Time!";
    }
    


    function run()
    {
        intervalID = setInterval(() => 
        {
            if(minutes > 9){
                if(seconds == 0){
                    clock.textContent = minutes.toString()+":00";
                    seconds = 59;
                    minutes = minutes-1;
                }else if(seconds < 10){
                    clock.textContent = minutes.toString()+":0"+seconds.toString();
                    seconds = seconds-1;
                }else{
                    clock.textContent = minutes.toString()+":"+seconds.toString();
                    seconds = seconds-1;
                }
            }else if(minutes == 0){
                if(seconds == 0){
                    clock.textContent = "0"+":00"; 
                    clearInterval(intervalID);
                    button.classList.remove('active');

                    if(cc == MaxLapse-1){
                        longBreak();

                    }else{
                        if(texto.textContent == "Work Time!"){
                            cc++;
                            breakClock();
                            
                        }else{
                            resetClock();
                        }
                    }
                    
                   
                    
                   
                }else if(seconds > 9){
                    clock.textContent =  "0"+":"+seconds.toString();
                    seconds = seconds-1;
                }else{
                    clock.textContent =  "0"+":0"+seconds.toString();
                    seconds = seconds-1;
                }
            }else{
                if(seconds == 0){
                    clock.textContent = minutes.toString()+":00";
                    seconds = 59;
                    minutes = minutes-1;
                }else if(seconds < 10){
                    clock.textContent = minutes.toString()+":0"+seconds.toString();
                    seconds = seconds-1;
                }else{
                    clock.textContent = minutes.toString()+":"+seconds.toString();
                    seconds = seconds-1;
                }
            }
        
        
        },1);
    
    }
    
    
    
    
}
function config(){
    let button = document.querySelector(".fa-solid");
    let sideBar = document.querySelector(".sideBar");
    let closeButton = document.querySelector(".close");
    let clock = document.querySelector(".clock");
    
    
    button.addEventListener('click',openNav);
    closeButton.addEventListener('click',closeNav);

    clock.textContent = document.querySelector(".workTikme").textContent;


    function openNav() {
        sideBar.classList.remove("animate__slideOutLeft")
        sideBar.classList.add("animate__slideInLeft");
        sideBar.style.display = "flex";
    }
    
    
    function closeNav() {
        
        sideBar.classList.remove("animate__slideInLeft");
        sideBar.classList.add("animate__slideOutLeft")
        setTimeout(() => {
            sideBar.style.display = "none";
        }, 2700);
    }
}

