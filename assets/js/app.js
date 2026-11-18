const cl=console.log;

const Wonders=document.getElementById('Wonders');



function onfilter(eva){
    let val=eva.target.value;
    let alldivs =[...document.querySelectorAll('.box')]
    alldivs.forEach(d=>{
        d.classList.add('d-none')
    })

    let selectdiv =[...document.getElementsByClassName(val)]
    selectdiv.forEach(d=>{
        d.classList.remove('d-none')
    })
}



Wonders.addEventListener('change',onfilter)