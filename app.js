var translateButton = document.querySelector(".translate-button");
var inputText = document.querySelector("#txt-area")
var outputBox = document.querySelector(".outputbox")
var text = inputText.value;

var url = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text){
    var url2 = url + "?text=" + text;
    return url2;
}

function buttonclicked(){
    var text = inputText.value;
    fetch(constructURL(text))
    .then(response=>response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputBox.innerText = translatedText
    })
}


translateButton.addEventListener("click", buttonclicked );

