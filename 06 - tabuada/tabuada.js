/**
* JS - Aula7: Tabuada
* @author Professor José de Assis
*/

for(var i = 1; i < 11; i++){
	document.write("<p><b>Tabuada do " + i + "</b></p>");
	for(var j = 1; j < 11; j++){
		document.write(i + " x " + j + " = " + (i * j) + "<br>");
	}
}