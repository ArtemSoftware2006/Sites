
console.log('script loaded.');

document.addEventListener("DOMContentLoaded",
function()
{
    console.log('Function loaded');
    const class_active = 'active';
    var btn_start = document.getElementById('start__timer__js');
    var btn_reset = document.getElementById('reset__timer__js');
    var btn_stop =document.getElementById('stop__timer__js');
    var tablo_time = document.getElementById('tablo');
    var IsStart= false;

    var t;
    var sec = 0;
    var min = 0;
    var hour = 0;

    function ResetColorBtn()
    {
        console.log(btn_start.classList.contains(class_active))
        if(btn_reset.classList.contains(class_active))
        {
            btn_reset.classList.remove(class_active);
        }
        if(btn_start.classList.contains(class_active))
        {
            btn_start.classList.remove(class_active);
        }
        if(btn_stop.classList.contains(class_active))
        {
            btn_stop.classList.remove(class_active);
        }
    }

    function Tick()
    {
        if (sec >= 59)
        {
            sec = 0;
            if (min >= 59)
            {
                min = 0
                hour++;
            }
            else
            {
                min++;
            }
        }
        else
        {
            sec++;
        }

    }

    function OneSecond()
    {
        Tick();
        tablo_time.textContent = (hour > 9? hour : "0" + hour) + ":"
        + (min > 9? min : "0" + min) + ":" 
        + (sec > 9? sec : "0" + sec);
        Timer();

    }

    function Timer()
    {
        t = setTimeout(OneSecond,1000);
    }

    btn_reset.addEventListener("click",
    function(e)
    {
        tablo_time.textContent = "00:00:00";
        hour = 0;
        sec = 0;
        min = 0;
        ResetColorBtn();
        btn_reset.classList.add(class_active);
    })

    btn_stop.addEventListener("click",
    function(e)
    {
        IsStart = false;
        clearTimeout(t);
        ResetColorBtn();
        btn_stop.classList.add(class_active);
    })

    btn_start.addEventListener("click",
    function(e)
    {
        if(IsStart == false)
        {
            console.log('start_ok');
            Timer();
        }
        IsStart = true;
        ResetColorBtn();
        btn_start.classList.add(class_active);
    })
})