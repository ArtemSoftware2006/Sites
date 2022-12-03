
console.log('ok')
document.addEventListener('DOMContentLoaded',
function()
{
    console.log('ok');
    var form = document.querySelector('.calc');

    form.addEventListener('submit',
    function(e)
    {
        e.preventDefault();
    })
    var result_field = document.querySelector('.result__field');
    var reset_btn = document.querySelector('.btn__reset');
    var numb_btn = document.querySelectorAll('.btn-calc-js');
    var result_btn = document.querySelector('.btn__result');
    console.log('elements ok');
    for (i = 0; i < numb_btn.length; i++) 
    {
        console.log('ok 1.1')
        numb_btn[i].addEventListener('click',
        function(e)
        {
            e.preventDefault();
            result_field.value += this.innerHTML;
        })
    }
    reset_btn.addEventListener('click',
    function(e)
    {
        e.preventDefault;
        result_field.value = '';
    })
    result_btn.addEventListener('click',
    function(e)
    {
        e.preventDefault;
        result_field.value = eval(result_field.value);
    })
})