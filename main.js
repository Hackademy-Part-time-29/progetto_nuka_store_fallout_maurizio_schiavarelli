//CATTURA ELEMENTI HTML
let headerH1 = document.querySelector('#headerH1');
let headerP = document.querySelector('#headerP');
let conferma = document.querySelector('#conferma');


//----------------------------------SEZIONE HEADER----------------------------------------

//TESTI DA VISUALIZZARE LETTERA PER LETTERA
let txtH1 = 'BENVENUTO AL TERMLINK NUKA-STORE INDUSTRIES (TM)';
let txtP = `Siamo lieti di vederti nel nostro negozio di approvvigionamento NUKA-STORE. Qui troverai tutto ciò di cui hai bisogno per sopravvivere nel deserto: armi, armature, medicinali e molto altro ancora. Ricorda ogni Caps é importante.`;
let txtConferma = `Vuoi procedere con gli acquisti?`;

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








