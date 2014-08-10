/*Las tijeras cortan el papel, el papel cubre a la piedra, 
  la piedra aplasta al lagarto, el lagarto envenena a Spock, 
  Spock destroza las tijeras, las tijeras decapitan al lagarto, 
  el lagarto se come el papel, el papel refuta a Spock, 
  Spock vaporiza la piedra, y, como es habitual… la piedra aplasta las tijeras.
*/

function computerOption (min, max) 
{
	var value = Math.floor(Math.random() * (max - min + 1) + min);
	return value;	
}

var piedra = 0, papel = 1, tijera = 2, lagarto = 3, spock = 4;
var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
var computer = computerOption(0, 4);
var user = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

if(user == piedra)
{
	if(opciones[computer] == "lagarto" || opciones[computer] == "tijera")
	{
		alert("GANASTE");
	}
	else if (opciones[computer] == "papel" || opciones[computer] == "spock") 
	{
		alert("PERDISTE")
	}
	else
	{
		alert("EMPATE");
	}

}
else if(user == papel)
{
	if(opciones[computer] == "piedra" || opciones[computer] == "spock") 
	{	// nos dice que el papel refuta a spock, considero a papel como ganador
		alert("GANASTE");
	}
	else if (opciones[computer] == "tijera" || opciones[computer] == "lagarto") 
	{
		alert("PERDISTE")
	}
	else
	{
		alert("EMPATE");
	}
}
else if(user == tijera)
{
	if(opciones[computer] == "papel" || opciones[computer] == "lagarto")
	{
		alert("GANASTE");
	}	
	else if (opciones[computer] == "spock" || opciones[computer] == "piedra") 
	{
		alert("PERDISTE");
	}
	else
	{
		alert("EMPATE");
	}
}
else if (user == lagarto) 
{
	if(opciones[computer] == "spock" || opciones[computer] == "papel")
	{
		alert("GANASTE");
	}
	else if(opciones[computer] == "piedra" || opciones[computer] == "tijera")
	{
		alert("PERDISTE");
	}
	else
	{
		alert("EMPATE");
	}

}
else if(user == spock)
{
	if(opciones[computer] == "tijera" || opciones[computer] == "piedra")
	{
		alert("GANASTE");
	}
	else if(opciones[computer] == "lagarto" || opciones[computer] == "papel")
	{
		alert("PERDISTE");
	}
	else
	{
		alert("EMPATE");
	}
}