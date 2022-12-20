console.log('OK');
document.addEventListener('DOMContentLoaded',
function()
{
    let r, g, b, color, timer_message;

    let btn_copy_hex = document.getElementById("btn__copy__hex");
    let btn_copy_rgb = document.getElementById("btn__copy__rgb");
    let btn_new_color = this.getElementById("btn__new__color");
    let field_hex_code = this.querySelector("#field_hex_code");
    let field_rgb_code = this.querySelector("#field_rgb_code");
    let field_message = this.querySelector(".row__color__text");
    let message_of_copy = document.querySelector(".message__of__copy") ;

    btn_new_color.addEventListener("click",
    function()
    {
        r = Math.floor(Math.random()  * 256 );
        g = Math.floor(Math.random()  * 256 );
        b = Math.floor(Math.random()  * 256 );

        color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

        if(document.querySelector('.field__color__row').classList.contains('elem__display__none'))
        {
            document.querySelectorAll('.field__color__row')[0].classList.remove('elem__display__none');
            document.querySelectorAll('.field__color__row')[0].classList.add('elem__visibal');

            document.querySelectorAll('.field__color__row')[1].classList.remove('elem__display__none');
            document.querySelectorAll('.field__color__row')[1].classList.add('elem__visibal');
        }

        if(!field_message.classList.contains('elem__display__none'))
        {
            field_message.classList.add('elem__display__none');
        }
        field_hex_code.value = color;
        field_rgb_code.value = r + ',' + g + ',' + b.toString(); 


        document.querySelector(".row__color").style.background = color;
    })

    btn_copy_hex.addEventListener("click",
    function()
    {
        navigator.clipboard.writeText(field_hex_code.value);

        ShowMessageOfCopy()
    })

    btn_copy_rgb.addEventListener("click",
    function()
    {
        navigator.clipboard.writeText(field_rgb_code.value);

        ShowMessageOfCopy()
    })

    function hiddenMessage()
    {
        message_of_copy.classList.remove("show__message__of__copy");
    }

    function ShowMessageOfCopy()
    {
        if(!message_of_copy.classList.contains("show__message__of__copy"))
        {
            message_of_copy.classList.add("show__message__of__copy");
            timer_message = setTimeout(hiddenMessage,3000);        
        }
    }
})