let navbar=document.querySelector('.navbar');
document.querySelector('#bars-btn').onclick = ()=>
{navbar.classList.toggle('active');
    n.classList.remove('active');
    s.classList.remove('active');
}

let n=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = ()=>
{n.classList.toggle('active');
navbar.classList.remove('active');
s.classList.remove('active');
}

let s=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>
{s.classList.toggle('active');
navbar.classList.remove('active');
n.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    n.classList.remove('active');
    s.classList.remove('active');
}