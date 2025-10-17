const btn =document.querySelector('#btn');
const input=document.querySelector('#input');

btn.addEventListener('click',()=>{
    input.classList.toggle('add')
    if(input.className==="add"){
        document.getElementById('search').className="fa-solid fa-xmark"
        input.focus()
        input.value=""
    }else{
        document.getElementById('search').className="fa-solid fa-magnifying-glass "
    }
})