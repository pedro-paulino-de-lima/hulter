const selectContactType = document.getElementById("select-contact-method");
const contactType = document.getElementById("contactType");
const contatctValue = document.getElementById("contactValue");

let info = {
    "email": {
        "type": "E-Mail",
        "value": "contato@hulter.com"
    },
    "tik tok": {
        "type": "Tik Tok",
        "value": "@hulter"
    },
    "tel": {
        "type": "Telefone",
        "value": "0800-7327"
    },
    "facebook": {
        "type": "Facebook",
        "value": "HULTER | SUA LOJA DE ARTIGOS ESPORTIVOS"
    }
}

selectContactType.addEventListener("change", () => {
    var actualValue = selectContactType.value;
    
    contactType.innerText = info[actualValue]["type"];
    contatctValue.innerText = info[actualValue]["value"];
});