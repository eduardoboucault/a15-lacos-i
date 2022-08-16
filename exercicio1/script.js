let pedido = prompt('Deseja comer mais coxinha? S/N:')   //? <--- Criar variável input

let conta = 0   //? <--- Criar variável para armazena soma

while (pedido.toUpperCase() === "S") {   //? <--- Enquanto pedido que recebe valor string em maiúsculo S

    conta += 2.5    //? <--- Somar + 2.50 a variável conta

    pedido = prompt('Deseja comer mais coxinha? S/N:')   //? <--- Perguntar se usuário deseja mais coxinha

}

console.log(`A conta total deu ${conta} reais!`)   //? <--- Imprimir valor total da soma dos inputs do usuário