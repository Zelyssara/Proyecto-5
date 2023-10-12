function Recibir(){
    var datos = document.getElementById("Data");
    datos.addEventListener("change", function (eve){
        this.setCustomValidity("");
    })

    datos.addEventListener("invalid", function (eve){
        if(this.validity.valueMissing){
            this.setCustomValidity("No funciona, no está bien");
        }
    })
}

function Conex(){
    const api = "https://pokeapi.co/api/v2/pokemon/pikachu"
    fetch(api).then(response => response.json())
    .then(json => {console.log(json.sprites.back_default)
    var f = document.getElementById("foto");
    f.src = json.sprites.back_default;
})}
