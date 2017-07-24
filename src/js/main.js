let search = document.getElementById('search');
let count = document.getElementById('count');
let submit = document.getElementById('submit');
let main  = document.getElementsByTagName('main')[0];
let checks = document.getElementsByClassName('checks');
let invited = '';

search.addEventListener('focus',(e)=>{
    search.className = 'search active';
});
search.addEventListener('blur',(e)=>{
    search.className = 'search';
});
main.addEventListener('click',(e)=>{
    if (e.target.className === 'checks'){
        changeStatus();
    }
});
submit.addEventListener('click',(e)=>{
    alert(invited+' has been invited');
});
function changeStatus() {
    let num = 0;
    invited = '';
    for (let i=0;i<checks.length;i++){
        if (checks[i].checked){
            num++;
            invited += checks[i].parentElement.previousElementSibling.children[0].innerText + ' ';
        }
    }
    count.innerText = num;
    if (num == 0){
        submit.disabled = true;
        submit.className = 'submit disabled';
    }else{
        submit.disabled = false;
        submit.className = 'submit';
    }

}