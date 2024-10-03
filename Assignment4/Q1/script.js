var submit=document.getElementById('submit');
var interval;

var reset=document.getElementById('reset');
var pp=document.getElementById('puse-play');
var stop=document.getElementById('stop');

var isPaused=false;
var minutG;
var secondG;




submit.addEventListener('click',()=>{
    clearInterval(interval);
    var mmInput=document.getElementById('mm-input');
    var ssInput=document.getElementById('ss-input');

    var minut=mmInput.value==""?0:mmInput.value;
    var second=ssInput.value==""?0:ssInput.value;

    var mmTimer=document.getElementById('mm');
    var ssTimer=document.getElementById('ss');
    mmTimer.innerText=minut<10?'0'+minut:minut;
    ssTimer.innerText=second<10?'0'+second:second;
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('timer').classList.add('flex');

    document.getElementById('control').classList.remove('hidden');
    document.getElementById('control').classList.add('flex');
    timeChanger(minut,second);

    reset.addEventListener('click',()=>{
        clearInterval(interval);
        timeChanger(minut,second);
    })

    stop.addEventListener('click',()=>{
        clearInterval(interval);
    })

    pp.addEventListener('click',()=>{
        if(isPaused==false){
            isPaused=true;
            clearInterval(interval);
            minutG=minut;
            secondG=second;
            pp.innerText="Resume";
        }
        else{
            isPaused=false;
            timeChanger(minutG,secondG);
            pp.innerText="Pause";
        }
    })
})

function timeChanger(minut,second){
    interval=setInterval(()=>{
        var mmTimer=document.getElementById('mm');
        var ssTimer=document.getElementById('ss');

        if(second==0){
            if(minut==0){
                alert("Time Up");
                clearInterval(interval);
            }
            second=59;
            minut-=1;
            
        }
        else{
            second-=1;
        }
        mmTimer.innerText=minut<10?'0'+minut:minut;
        ssTimer.innerText=second<10?'0'+second:second;
    },1000)
}


