let k=0;

function cardMaker(hd, ct, au, bcg){
    let cardBoard = document.getElementById('lalangamena');
    let card = document.createElement('div');
    mediator0 = card.classList.add('card');
    card.id =`card${k}`;
    let zagol = document.createElement('h3');
    mediator1 = zagol.classList.add('zagol');
    let cont = document.createElement('p');
    mediator2 = cont.classList.add('cont');
    let aut = document.createElement('p');
    mediator3 = aut.classList.add('aut');
    zagol.innerText = hd;
    cont.innerText = ct;
    aut.innerText = au;
    card.appendChild(zagol);
    card.appendChild(cont);
    card.appendChild(aut);
    cardBoard.appendChild(card);
    document.getElementById(`card${k}`).style.backgroundColor = bcg;
    if (bcg == "white"){
        document.getElementById(`card${k}`).style.outline = '1px solid grey';
    }
    k++;
}

function buttSender(){
    let hd = document.querySelector('#forma .zagol').value;
    let ct = document.querySelector('#forma textarea').value;
    let au = document.querySelector('#forma .autor').value;
    let bcg = document.querySelector('#forma .bcgColor').value;

    if (au == ''){
        au = 'Incognito'
    }                         // Вот это место - прям чую, что танец на костылях, но по-другому не знаю, как.
    if (bcg == ''){
        bcg = 'white';
    }

    cardMaker(hd, ct, au, bcg);
}

let buttChecker = document.querySelector('#forma button');
buttChecker.addEventListener('click', buttSender);
