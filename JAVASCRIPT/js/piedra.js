function aleatorio (minimo, maximo) 
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}


var piedra = 0;
var papel = 1;
var tijera = aleatorio(0, 2);

var opcionUsuario;
var opcionMaquina = tijera;

var opciones = ["piedra", "papel", "tijera"];

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

if(opcionUsuario == piedra)
{
	alert("Elegiste piedra!");
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
}
else if(opcionUsuario == papel)
{
	alert("Elegiste papel!");
	if(opcionMaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste!");
	}
}
else if(opcionUsuario == tijera)
{
	alert("Elegiste tijera!");
		if(opcionMaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}