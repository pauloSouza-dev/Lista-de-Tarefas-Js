
function adicionandoNovaTarefa(){
    
    const adicionar_valor = document.getElementById("teste").value;

    //criando uma Div
    const new_task = document.createElement("div");
    new_task.setAttribute("class", "tarefa");
    //criando um Input
    const new_task_input = document.createElement("input");
    new_task_input.setAttribute("type", "checkbox");
    //criando um Paragrafo
    const new_task_text = document.createElement("p");
    //Criando um nó de texto
    const nova_tarefa = document.createTextNode(adicionar_valor);
    //Linkando o nó de texto ou elemento <p>
    new_task_text.appendChild(nova_tarefa);
    new_task_text.setAttribute("class", "tarefa-descricao");

    //Adicionando horario
    const d = new Date();
    const d_formatada = d.toDateString();
    const data_incersao = document.createElement("p");
    data_incersao.setAttribute("class", "tarefa-data");
    const data_incersao_inner = document.createTextNode(d_formatada);
    data_incersao.appendChild(data_incersao_inner);


    //Linkando todos os elementos criados a DIV
    new_task.appendChild(new_task_input);
    new_task.appendChild(new_task_text);
    new_task.appendChild(data_incersao);

    //apagando texto do input
    document.getElementById("teste").value = "";

    const lista = document.getElementById("lista");
    lista.appendChild(new_task);

}
