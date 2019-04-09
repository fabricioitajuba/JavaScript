/**
* JS - Aula5: Calculadora FLEX
* @author Professor José de Assis
*/

//alert("teste");
var L, D, Dcon; //tipo string

function calcular(){
	L = parseFloat(frmIndutor.txtIndutancia.value.replace(",",".")); //troca ","" por ".
	D = parseFloat(frmIndutor.txtDiametro.value.replace(",","."));
	Dcon = parseFloat(frmIndutor.txtDiametroCondutor.value.replace(",","."));

	//n1=ceil((100*Dcon*L+sqrt(1e4*Dcon^2*L^2+180*D^3*L))/(2*D^2));
	n=Math.ceil((100*Dcon*L+Math.sqrt(Math.pow(10,4)*Math.pow(Dcon,2)*Math.pow(L,2)+180*Math.pow(D,3)*L))/(2*Math.pow(D,2)));
	l=Dcon*n;
	p=D/l;
	
	document.write("Número de espiras = "+ n +" Espiras" + "<br>");
	document.write("Comprimento da bobina = "+ l +" [cm]" + "<br>");
	document.write("Precissão = "+ p +" Tem que ser < 3" + "<br>");
}

function resetar(){
	document.getElementById("status").src="neutro.png";
}