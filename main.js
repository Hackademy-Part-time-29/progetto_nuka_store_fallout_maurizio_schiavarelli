//CATTURA ELEMENTI HTML
let headerH1 = document.querySelector('#headerH1');
let headerP = document.querySelector('#headerP');
let conferma = document.querySelector('#conferma');
let inputText = document.querySelector('#inputText');
let inputText1 =document.querySelector('#inputText1') 
let seiSicuro = document.querySelector('#seiSicuro');
let inputConferma = document.querySelector('#inputConferma');
let inputConferma1 = document.querySelector('#inputConferma1');
let spostaCursore = document.querySelector('#spostaCursore');
let spostaCursore1 = document.querySelector('#spostaCursore1');
let spostaCursore2 = document.querySelector('#spostaCursore2');
let articleWrapper = document.querySelector('#articleWrapper');

//----------------------------------SEZIONE HEADER----------------------------------------

//TESTI DA VISUALIZZARE LETTERA PER LETTERA
let txtH1 = 'BENVENUTO AL TERMLINK NUKA-STORE INDUSTRIES (TM)';
let txtP = `Siamo lieti di vederti nel nostro negozio di approvvigionamento NUKA-STORE. Qui troverai tutto ciò di cui hai bisogno per sopravvivere nel deserto: armi, armature, medicinali e molto altro ancora. Ricorda ogni Caps é importante.`;
let txtConferma = `Vuoi procedere con gli acquisti? digita SI/NO`;
let txtSeiSicuro = `Sei sicuro? digita CERTO/NON NE SONO SICURO`;
let nonNeSonoSicuro = `Ok, ti lascio un po di tempo per pensare.Il programma si riavviera tra 5 secondi`;
let certo = `Vabene ecco i tuoi articoli :`

//FUNZIONE DA RICHIAMARE PER TESTO GENERATO LETTERA PER LETTERA
function typeWriter(elemento, testo, velocita) {
  let i = 0;
  function scrivi(){
  if (i < testo.length) {
    elemento.innerHTML += testo.charAt(i);
    i++;
    setTimeout(scrivi, velocita);
    };
  };
  scrivi();
};

//MOSTRA IL TITOLO H1 'BENVENUTO AL TERMLINK NUKA-STORE INDUSTRIES (TM)';
typeWriter(headerH1, txtH1, 50);

//MOSTRA IL PARAGRAFO HEADERP;
setTimeout(()=>{
  typeWriter(headerP, txtP, 20)
},3000)

//MOSTRA LA SELEZIONE CONFERMA SI/NO
setTimeout(()=>{
  typeWriter(conferma,txtConferma, 50 )
},8000);

// PERMETTE ALL'INPUT TEXT > DI ESSERE SPOSTATO DI VOLTA IN VOLTA
let cursore = document.createElement('span');
cursore.classList.add('inputText');
cursore.innerHTML = `>`;

let cursore1 = document.createElement('span');
cursore1.classList.add('inputText');
cursore1.innerHTML = `>`;

let cursore2 = document.createElement('span');
cursore2.classList.add('inputText');
cursore2.innerHTML = `>`;



let observer = new MutationObserver(function(mutations) {
  // Disattiva l'observer
  observer.disconnect();

  mutations.forEach(function(mutation) {
    // quando viene mostrata la stringa SI/NO
    if (document.body.innerText.includes('SI/NO')) {
      //appende cursore
      spostaCursore.appendChild(cursore);
    };
  });

 // Riattiva l'observer
  observer.observe(document.body, { childList: true, subtree: true });
});

// OBSERVE
observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

 //FUNZIONE CHE MI PERMETTE DI SELEZIONARE SI O NO
      inputConferma.addEventListener('keydown',(e)=> {
      let input = e.target.value;
      if (e.key === 'Enter' && input.trim().toLowerCase() === 'si' ) {
      typeWriter(seiSicuro, txtSeiSicuro, 50);
      spostaCursore.style.display = 'none';
      inputConferma.value = ''
      inputConferma.style.display = 'none'
      setTimeout(()=>{
        spostaCursore1.appendChild(cursore1);
      },2900);
    }else if((input.trim().toLowerCase() ==='no')){
      typeWriter(articoli, nonNeSonoSicuro, 50);
      spostaCursore1.style.display = 'none';
      inputConferma1.value = '';
      inputConferma1.style.display = 'none';
      setTimeout(()=>{
        location.reload();
      },9000);
    }
});

//FUNZIONE CHE MI PERMETTE DI SELEZIONARE certo O non ne sono sicuro
 inputConferma1.addEventListener('keydown',(e)=> {
  let input = e.target.value;
  if (e.key === 'Enter' && input.trim().toLowerCase() === 'certo') {
  typeWriter(articoli, certo, 50);
  spostaCursore1.style.display = 'none';
  inputConferma1.value = ''
  inputConferma1.style.display = 'none';
  //genera articoli
}else if(e.key === 'Enter' && input.trim().toLowerCase() === 'non ne sono sicuro'){
  typeWriter(articoli, nonNeSonoSicuro, 50);
  spostaCursore1.style.display = 'none';
  inputConferma1.value = '';
  inputConferma1.style.display = 'none';
  setTimeout(()=>{
    location.reload();
  },9000);
};
});

function arrayTypeWriter(elemento, array, velocita) {
  let i = 0;
  let j = 0;

  function scrivi() {
    if (i < array.length) {
      if (j < array[i].length) {
        elemento.innerHTML += array[i].testo.charAt(j);
        j++;
        setTimeout(scrivi, velocita);
      } else {
        i++;
        j = 0;
        elemento.innerHTML += '<br>'; // Aggiunge una nuova riga dopo ogni frase
        setTimeout(scrivi, velocita);
      }
    }
  };

  scrivi();
};

fetch('/annunci.json').then((response) => response.json()).then((data)=>{
  function showCard (data) {
    data.forEach((article)=>{
      let articleCard = document.createElement('div');
      articleCard.classList.add('articoli', 'flex');
      articleCard.innerHTML = `
      <p>></p>
      <p>NOME ARTICOLO : <span>${article.name}</span></p>
        <p>CATEGORIA: <span>${article.category}</span></p>
        <p>PREZZO: <span>${article.price}</span></p>
      `
      articleWrapper.appendChild(articleCard);
    });
  };

  showCard(data);
})


