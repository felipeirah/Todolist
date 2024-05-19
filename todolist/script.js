function  adicionarItem() {
    let itemadicionar= document.getElementById("itemadicionar");
    let itemtexto= itemadicionar.value.trim();
    if (itemtexto ===""){
        alert("Por favor, digite um item");
        return;
    }
    let listaitens= document.getElementById("listaitens");

    let itemlista=document.createElement("li");
    itemlista.classList.add("lista");

    let divTexto = document.createElement("div");
    divTexto.classList.add("texto");
    divTexto.textContent = itemtexto;

    let divBotoes = document.createElement("div");
    divBotoes.classList.add("botoes");

    let botaoDelete=document.createElement("button");
    botaoDelete.textContent="🗑️";
    botaoDelete.classList.add("excluir");
    botaoDelete.onclick= function(){
        listaitens.removeChild(itemlista);
    }

    let botaoEditar= document.createElement("button");
    botaoEditar.textContent="✏️";
    botaoEditar.classList.add("editar");
    botaoEditar.onclick= function(){
        editarItem(divTexto);
    }

    divBotoes.appendChild(botaoEditar);
    divBotoes.appendChild(botaoDelete);

    itemlista.appendChild(divTexto);
    itemlista.appendChild(divBotoes);

    listaitens.appendChild(itemlista);

    itemadicionar.value="";
    itemadicionar.focus();
}

function editarItem(divTexto){
    let novoTexto = prompt ("Digite um novo item", divTexto.textContent);
    if (novoTexto !== null && novoTexto.trim() !== ""){
        divTexto.textContent = novoTexto.trim();
    }
}

