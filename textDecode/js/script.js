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
    copiarTexto(); // Função para copiar o texto
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
            /*while(textAnalises.includes(key)){
                textAnalises = textAnalises.replace(key, decode[key]);

            }*/
            textAnalises = textAnalises.split(key).join(decode[key]);

        }
        telaDecod += textAnalises + " ";
        i++;

    }
    emTela.innerHTML = telaDecod.trim();
}
function VisibilidadeCopiarButton() {
    if (emTela.innerHTML.trim() !== "") {
        btnCopiar.style.display = "block"; // Mostra o botão
        emTela.style.display = "flex"; // Mostra o h1
    } else {
        btnCopiar.style.display = "none"; // Esconde o botão se não houver texto
        emTela.style.display = "none";
    }
}
function copiarTexto() {
    // Cria um elemento de texto temporário para copiar o texto
    const textoParaCopiar = emTela.innerText;
    navigator.clipboard.writeText(textoParaCopiar);
}