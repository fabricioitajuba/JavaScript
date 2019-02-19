/**
* JS - Aula5: Calculadora FLEX
* @author Professor José de Assis
*/

//alert("teste");
var etanol, gasolina; //tipo string

function calcular(){
	etanol = parseFloat(frmFlex.txtEtanol.value.replace(",",".")); //troca ","" por ".
	gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

	if(etanol < 0.7 * gasolina){
		document.getElementById("status").src="etanol.png";
	}else{
		document.getElementById("status").src="gasolina.png";
	}
}

function resetar(){
	document.getElementById("status").src="neutro.png";
}