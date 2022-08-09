const nombre = document.getElementById("txtNombre");
const numero = document.getElementById("numero");
const tipo = document.getElementById("tipo");
const altura = document.getElementById("altura");
const nivel = document.getElementById("nivel");
const habilidad = document.getElementById("habilidad");
const peso = document.getElementById("peso");
function mostrarPokemon(posicion){
    switch (posicion) {
        case 1:
            nombre.value = "SQUIRTE";
            numero.value = "007";
            tipo.value = "WATER"; 
            altura.value = "0,5 M"; 
            nivel.value = "35"; 
            habilidad.value = "BUBBLES";
            peso.value = "9 kg"; 
            document.getElementById("img").src="./img/Squirte.png";
            document.getElementById("elemento").src="./img/agua.png";

            break;
        case 2:
            nombre.value = "NEWTWO";
            numero.value = "150";
            tipo.value = "PSYCHIC"; 
            altura.value = "2 M"; 
            nivel.value = "75"; 
            habilidad.value = "MENTAL";
            peso.value = "122 kg"; 
            document.getElementById("img").src="./img/newtwo.webp";
            document.getElementById("elemento").src="./img/psitico.png";
            break;
        case 3:
            nombre.value = "SOLGALEO";
            numero.value = "391";
            tipo.value = "PSYCHIC"; 
            altura.value = "3,4 M"; 
            nivel.value = "200"; 
            habilidad.value = "CLAW";
            peso.value = "230 kg"; 
            document.getElementById("img").src="./img/Solgaleo.webp";
            document.getElementById("elemento").src="./img/psitico.png";
            break;
        case 4:
        numero.value = "143";
            nombre.value = "SNORLAX";
            tipo.value = "NORMAL"; 
            altura.value = "2,1 M"; 
            nivel.value = "20"; 
            habilidad.value = "SLEEP";
            peso.value = "460 kg"; 
            document.getElementById("img").src="./img/snorlax.webp";
            document.getElementById("elemento").src="./img/normal.png";
            break;
    }
}