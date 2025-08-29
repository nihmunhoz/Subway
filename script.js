//Vegetariano?

let vegetariano = prompt('Voce é vegetariano? S/N')
//opções do nosso lanche
let pao
let proteina
let salada
let lanche
let molho

//Normal
let normal

if(vegetariano ==='S'){
    //menu vegetariano
    pao = Number(prompt('1-Gergelin 2- 3queijo 3-Italiano'))
    switch (pao) {
        case 1:
            lanche = 'Gergelin'
            break;
        case 2:
            lanche = '3 Queijo'
            break;
        case 3:
            lanche = 'Italiano'
            break;
    
        default:
            alert('Código do pão inválido')
            break;
    }
    salada = Number(prompt('1-alface 2-Tomate 3-Picles 4-Cebola'))
    switch (salada) {
        case 1:
            lanche += ' + Alface'
            break;
        case 2:
            lanche += ' + Tomate'
            break;
        case 3:
            lanche += ' + Picles'
            break;
        case 4:
            lanche += ' + Cebola'
            break;
    
        default:
            alert('Código da salada inválido')
            break;
    }
    proteina = Number(prompt('1-Soja 2-Tofu 3-Batata'))
    switch (proteina) {
        case 1:
            lanche += ' + Hambúrguer de Soja'
            break;
        case 2:
            lanche += ' + Hambúrguer de Tofu'
            break;
        case 3:
            lanche += ' + Hambúrguer de Batata'
            break;
    
        default:
            alert('Código da proteína inválido')
            break;
    }
    molho = Number(prompt('1-Alho 2-Verde 3-Agridoce'))
    switch (molho) {
        case 1:
            lanche += ' + Alho'
            break;
        case 2:
            lanche += ' + Verde'
            break;
        case 3:
            lanche += ' + Agridoce'
            break;
    
        default:
            alert('Código do molho inválido')
            break;
    }
} else{
    //menu normal
    pao = Number(prompt('1-Françes 2-Centeiro 3-Gergelin'))
    switch (pao) {
        case 1:
            lanche = 'Françes'
            break;
        case 2:
            lanche = 'Centeiro'
            break;
        case 3:
            lanche = 'Gergelin'
            break;
    
        default:
            alert('Código do pão inválido')
            break;
    }
    proteina = Number(prompt('1-Bovino 2-Suíno 3-Misto'))
    switch (proteina) {
        case 1:
            lanche += ' + Bovino'
            break;
        case 2:
            lanche += ' + Suíno'
            break;
        case 3:
            lanche += ' + Misto'
            break;
    
        default:
            alert('Código da proteína inválido')
            break;
    }
    salada = Number(prompt('1-Cebola 2-Picles 3-Alface 4-Tomate'))
    switch (salada) {
        case 1:
            lanche += ' + Cebola'
            break;
        case 2:
            lanche += ' + Picles'
            break;
        case 3:
            lanche += ' + Alface'
            break;
        case 4:
            lanche += ' + Tomate'
            break;
    
        default:
            alert('Código da salada inválido')
            break;
    }
    molho = Number(prompt('1-Alho 2-Verde 3-Agridoce 4-Barbecue'))
    switch (molho) {
        case 1:
            lanche += ' + Alho'
            break;
        case 2:
            lanche += ' + Verde'
            break;
        case 3:
            lanche += ' + Agridoce'
            break;
        case 4:
            lanche += ' + Barbecue'
            break;
        case 5:
            lanche += ' + Defumada com bacon'
            break;

        default:
            alert('Código do molho inválido')
            break;
    }
}

alert('Seu lanche é: ' + lanche)