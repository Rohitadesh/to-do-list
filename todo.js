let input=document.querySelector("#input");
let button=document.querySelector('#adder');
let list_add=document.querySelector('#box1')
// let span=document.querySelector('.span')

let make_list=function(){
    let span=document.createElement('span')
    span.innerHTML=input.value;
    list_add.append(span);
    input.value='';
}
button.addEventListener('click',make_list)