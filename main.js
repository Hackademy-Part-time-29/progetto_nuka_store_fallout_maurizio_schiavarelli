//CATTURA ELEMENTI HTML
let headerH1 = document.querySelector('#headerH1');
let headerP = document.querySelector('#headerP');
let conferma = document.querySelector('#conferma');
let inputText = document.querySelector('#inputText');
let inputText1 =document.querySelector('#inputText1') 
let seiSicuro = document.querySelector('#seiSicuro');
let inputConferma = document.querySelector('#inputConferma')



//----------------------------------SEZIONE HEADER----------------------------------------

//TESTI DA VISUALIZZARE LETTERA PER LETTERA
let txtH1 = 'BENVENUTO AL TERMLINK NUKA-STORE INDUSTRIES (TM)';
let txtP = `Siamo lieti di vederti nel nostro negozio di approvvigionamento NUKA-STORE. Qui troverai tutto ciò di cui hai bisogno per sopravvivere nel deserto: armi, armature, medicinali e molto altro ancora. Ricorda ogni Caps é importante.`;
let txtConferma = `Vuoi procedere con gli acquisti? digita SI/NO`;
let txtSeiSicuro = `Sei sicuro?`

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
},8000)

//PERMETTE ALL'INPUT TEXT > DI LAMPEGGIARE
setInterval(()=>{
  if(inputText.classList.contains('inputText')){
    inputText.classList.remove('inputText');
    inputText.classList.add('inputTextBlack');
  }else{
    inputText.classList.add('inputText');
    inputText.classList.remove('inputTextBlack');
  }
},700);

function ciao (){
  
}

// PERMETTE ALL'INPUT TEXT > DI ESSERE VISUALIZZATO SOLO QUANDO ESCE LA SCRITTA SI/NO

let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      // quando viene mostrata la stringa SI/NO
    if (document.body.innerText.includes('SI/NO')) {
      // Mostra >
      inputText.style.display = 'block';
    } else {
      // Altrimenti, nascondi >
      inputText.style.display = 'none';
    }
  });
});

let observer1 = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      // quando viene mostrata la stringa sei sicuro?
    if (document.body.innerText.includes('Sei sicuro?')) {
      
      inputText.style.display = 'none';
      inputText1.style.display = 'block';
    } else {
      // Altrimenti, nascondi >
      inputText1.style.display ='none';
    }
  });
});

// OBSERVE
observer1.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

// OBSERVE
observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

inputConferma.addEventListener('keydown',(e)=> {
    let input = e.target.value;
    if (e.key === 'Enter' && input.trim() === 'si') {
      typeWriter(seiSicuro, txtSeiSicuro, 50);

    }
  });




