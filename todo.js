let input1=document.getElementById('listinput');
console.log(input1)

let btn=document.getElementById('adder');
let box1=document.querySelector('.box1');
btn.addEventListener('click',dolist=>{
    let p =document.createElement('span');
    p.textContent=input1.value;
    box1.appendChild(p);    



});

