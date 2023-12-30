const toggle=document.getElementById('toggle-dark');
const body=document.querySelector('th');

toggle.addEventListener('click',()=>{
    this.classList.toggle('fa-sun');
});

