function encrypt() {
    let text = document.getElementById("inputText").value;

    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById("outputText").value = encryptedText;
    hideText();
}

function decrypt() {
    let text = document.getElementById("inputText").value;

    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    document.getElementById("outputText").value = decryptedText
    hideText();
}

function hideText() {
    document.getElementById("noMessage").classList.add("hidden");
}