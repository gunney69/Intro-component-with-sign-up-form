function ativarLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';   
    arrTexto.forEach((letra, i)=>{
       setTimeout(()=>{
        elemento.innerHTML += letra;
        }, 80 * i);
       
    });
}

const titulo = document.querySelector('.digitando')
ativarLetra(titulo);

const submitBtn = document.querySelector('#submit')
const textInput = document.querySelectorAll('.text-input')

submitBtn.addEventListener('click', ()=>{
    textInput.forEach((element)=>{
        if(element.value === '') {
            element.parentElement.classList.add('empty')
        } else {
            element.parentElement.classList.remove('empty')
        }
    })
})

