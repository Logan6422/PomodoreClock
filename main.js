main();
function main(){
    let button = document.querySelector(".button");
    let clock = document.querySelector(".clock");
    let intervalID;
    let alarm = document.querySelector("audio");
    let counter = document.querySelector(".counter");
    let minutes = parseInt(clock.textContent);
    let seconds = 0;
    let cc = 0;
    
    
    button.addEventListener('click',start);
    
    
    
    function start(){
        if(button.textContent == "START"){
            button.textContent = "PAUSE";
            run();
        }else{
            button.textContent = "START";
            clearInterval(intervalID);
        }
        
    }
    
    function resetClock(){
        button.textContent = "START";
        clock.innerHTML =  "01:00";
        minutes = parseInt(clock.textContent);
        seconds = 0;
        counter.textContent = "#"+ cc;
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
                    clock.textContent = "00"+":00"; 
                    clearInterval(intervalID);
                    resetClock();
                    cc++;
                }else if(seconds > 9){
                    clock.textContent =  "00"+":"+seconds.toString();
                    seconds = seconds-1;
                }else{
                    clock.textContent =  "00"+":0"+seconds.toString();
                    seconds = seconds-1;
                }
            }else{
                if(seconds == 0){
                    clock.textContent = "0"+minutes.toString()+":00";
                    seconds = 59;
                    minutes = minutes-1;
                }else if(seconds < 10){
                    clock.textContent = "0"+minutes.toString()+":0"+seconds.toString();
                    seconds = seconds-1;
                }else{
                    clock.textContent = "0"+minutes.toString()+":"+seconds.toString();
                    seconds = seconds-1;
                }
            }
        
        
        }, 50);
    
    }
    
    
    
    
}
