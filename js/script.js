let input = document.querySelector('#inputText')
let btnAdd = document.querySelector('#btnAdd')
let main = document.querySelector('main')
let contador = 0;

function adicionar(){
    ++contador
 let valorInput = input.value
 if(valorInput !== ""){
    main.innerHTML += `
        <div class ="container-flex bg-branco tarefa" id ="${contador}">
            <img onclick = "marcarFeito(${contador})"class = "checkbox" src="assets/circle.png">
            <p class ="texto-tarefa">${valorInput}</p>
            <button class ="bg-vermelho" onclick ="deletar(${contador})">Deletar</button>
        </div>
    `
 }else{
    alert("Não se apresse, antes de adicionar você vai precisar escrever algo!")
}
    input.value = "";
    input.focus();
}

addEventListener("keyup", (event) =>{
    if(event.keyCode === 13){
        event.preventDefault()
        btnAdd.click()
    }
}
)

function marcarFeito(id){
let elementoPai = document.getElementById(id)
let checkbox = elementoPai.children[0]
let texto = elementoPai.children[1]

if(checkbox.src.includes("assets/circle.png")){
    checkbox.src = "assets/check.png"
    elementoPai.classList.add('concluido')
    texto.style.textDecoration = "line-through"
    texto.style.color = "gray"
    elementoPai.parentNode.appendChild(elementoPai)
    
}else{
    checkbox.src = "assets/circle.png"
    elementoPai.classList.remove('concluido')
    texto.style.textDecoration = "none"
    texto.style.color = "black"
}
}

function deletar(id){
let alvo = document.getElementById(id)

alvo.remove();
}