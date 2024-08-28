const btnEncoder = document.querySelector('#codificar');
const btnDecoder = document.querySelector('#decodificar');
const btnCopiar = document.querySelector('#copiar');
const texto = document.querySelector('#principal');
const emTela = document.querySelector('#emtela');


btnEncoder.addEventListener('click',function(){
    encodeH1();
    VisibilidadeCopiarButton();
});

btnDecoder.addEventListener('click', function(){
    decodeH1();
    VisibilidadeCopiarButton();
});

btnCopiar.addEventListener('click', function() {
    copiarTexto(); 
});


function encodeH1(){
    
    const encode = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };
    
    const forTela = texto.value;
    let telaCod = "";

    for(let j=0;j<forTela.length;j++){
        let carac = forTela[j];
        
        if (carac in encode){
            telaCod += encode[carac]; 
        }
        else{
            telaCod += carac;
        }
    }
    emTela.innerHTML = telaCod;
}
function decodeH1(){
    
    const decode = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }
    const forTela = texto.value;
    let telaDecod = "";
    let i = 0;

    while(i < forTela.length){
        let textAnalises = "";
        while(i < forTela.length && forTela[i] !== " "){
            textAnalises += forTela[i];
            i++;
        }
        for(key in decode){
            textAnalises = textAnalises.split(key).join(decode[key]);

        }
        telaDecod += textAnalises + " ";
        i++;

    }
    emTela.innerHTML = telaDecod.trim();
}
function VisibilidadeCopiarButton() {
    if (emTela.innerHTML.trim() !== "") {
        btnCopiar.style.display = "block";
        emTela.style.display = "flex"; 
    } else {
        btnCopiar.style.display = "none";
        emTela.style.display = "none";
    }
}
function copiarTexto() {
    const textoParaCopiar = emTela.innerText;
    navigator.clipboard.writeText(textoParaCopiar);
}
