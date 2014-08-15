function Pokemon (nom, vida, ata) {
	
	this.grito = "Jigglypuff.......";
	this.nombre = nom;
	this.vida = vida;
	this.ata = ata;

	this.gritar = function () {
		alert(this.grito);
	}
}

function inicioNombre () {
	var jigglypuff = new Pokemon("Jigglypuff", 100, 20);
	jigglypuff.grito = "Jigglypuff......";
	nombrePokemon.innerText = "Nombre: " + jigglypuff.nombre; 
}

function incioDatos () {
	var nmb = "", vda = 0, atq = 0; 
	nmb = prompt("Nombre del Pokemón: ");
	vda = prompt("Vida del Pokemón: ");
	atq = prompt("Ataque del Pokemón´: ");

	var miPokemon = new Pokemon(nmb, vda, atq);

	datosPokemon.innerText = "Nombre: " + miPokemon.nombre + "\nVida: " + miPokemon.vida + "\nAtaque: " + miPokemon.ata;

	var imagen = document.getElementById("imgPokemon");
	imagen.src = "image/"+ miPokemon.nombre +".jpg";
}