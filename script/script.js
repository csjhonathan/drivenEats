const btn = document.getElementById('btnOrderEnd');
let order = [];

function selecionaPrato(prato, sectionName) {
    const section = document.querySelector(sectionName)
    const btnSelectedBefore = section.querySelector(`.selected`);
    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
    }

    document.querySelector('.icone').classList.remove('check');
    const selectedBtn = document.querySelector(prato);
    selectedBtn.classList.add("selected");

    
    if (!order.includes(1)){
        order.push(1)
    }

    btnEnable(order)
};

function selecionaBebida(bebida, sectionName) {
    const section = document.querySelector(sectionName)
    const btnSelectedBefore = section.querySelector(`.selected`);
    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
    }
    const selectedBtn = document.querySelector(bebida);
    selectedBtn.classList.add("selected");

    if (!order.includes(2)){
        order.push(2)
    }
    btnEnable(order)
};


function selecionaSobremesa(sobremesa, sectionName) {
    const section = document.querySelector(sectionName)
    const btnSelectedBefore = section.querySelector(`.selected`);
    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
    }
    const selectedBtn = document.querySelector(sobremesa);
    selectedBtn.classList.add("selected");

    if (!order.includes(3)){
        order.push(3)
    }
    btnEnable(order)
};


function btnEnable(order){
    let qtdOrder = order.length;
    let itemNameInsert = qtdOrder === 2 ? "item" : "itens";

    if(qtdOrder === 3){
        btn.classList.add('btnEnabled')
        btn.removeAttribute('disabled')
        btn.innerHTML = `Fechar pedido`
    } else {
        btn.innerHTML = `Selecione mais ${3 - qtdOrder} ${itemNameInsert}</br>para fechar o pedido`
    }
}

function checkout(blur, modal){
    const blurSelect =  document.querySelector(blur);
    const modalSelect =  document.querySelector(modal);
    if(btn.classList.contains('btnEnabled')){
        [blurSelect, modalSelect].forEach(e => {
            e.classList.toggle('hidden')
        })
    }
}

function cancel(){
    const blurSelect =  document.querySelector(blur);
    const modalSelect =  document.querySelector(modal);
    if(btn.classList.contains('btnEnabled')){
        [blurSelect, modalSelect].forEach(e => {
            e.classList.toggle('hidden')
        })
    }
}

