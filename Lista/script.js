function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    
    
    const mensagem= document.getElementById("mensagem")


     if (tarefa == "")   {

        let mensagemerro = "Digite uma tarefa para adicioná-la a sua lista"
        mensagem.textContent = mensagemerro 
        mensagem.style.color = "red"
    }   else {

        let mensagemsucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemsucesso
        mensagem.style.color = "green"

         const  listatarefas = document.getElementById("listatarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listatarefas.appendChild(novaTarefa)
    

    }
    
   
    inputTarefa.value = ""

    }


