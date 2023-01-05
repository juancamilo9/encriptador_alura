const inputText = document.querySelector(".input-text");
const outpuText = document.querySelector(".output-text");


function btnEncriptar(){
    const textoEncriptado= encriptar(inputText.value);
    inputText.value="";
    outpuText.value = textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(outpuText.value);
    outpuText.value="";
    inputText.value = textoDesencriptado;
}

function desencriptar(mensaje){
    let matrizCodigo = [
        ["enter","e"],
        ["imes","i"],
        ["ai","a"] ,
        ["ober","o"],
        ["ufat","u"]
    ]

    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(mensaje.includes(matrizCodigo[i][0])){
            mensaje = mensaje.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return mensaje;
}

function encriptar(mensaje){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"] ,
        ["o","ober"],
        ["u","ufat"]
    ]

    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(mensaje.includes(matrizCodigo[i][0])){
            mensaje = mensaje.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return mensaje;
}