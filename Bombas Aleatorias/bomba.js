/* TAREA 2.- Generar una matriz con bombas de manera aleatoria
   Para este caso consideramos 1 como bomba y 0 como campo, además 
   el algoritmo siempre coloca 8 bombas sin que se repita la posicion
*/
var tablero = [[ 0, 0, 0, 0],
			   [ 0, 0, 0, 0],
			   [ 0, 0, 0, 0],
			   [ 0, 0, 0, 0]
			  ]; 

function generateNumber (min, max) 
{
	var value = Math.floor(Math.random() * (max - min + 1) + min);
	return value;	
}

function cambiarValPosicion () 
{	var marca = 0;
	do
	{	
		var x = generateNumber(0, 3);
		var y = generateNumber(0, 3);
		if (tablero[x][y] == 0) 
		{
			tablero[x][y] = 1;
			marca += 1;
		}

	}while(marca < 8);
}

cambiarValPosicion();

function imprimir () {
	for (var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++){
			document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+tablero[i][j]+ "   ");
		}
		document.write("<br/>");
	}
}


