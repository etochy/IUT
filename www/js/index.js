var annee="";
var name="";

function year() {   
		
	var d = new Date();
	d = d.getFullYear();
	var newOpt;   
	var i=0;   
	var selectLength =0;
			
	newOpt = new Option("tous");  
			
	for(i=2005;i<=d+1;i++,selectLength ++){   
	document.form0.year.options[selectLength ]  = newOpt; 
		newOpt = new Option(i);         
	}	      
}

function readXML(){
	
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","res/listediplomes.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	document.write("<table><tr><th>Departement</th><th>Diplome</th><th>Annee</th><th>Nom</th></tr>");
	var x=xmlDoc.getElementsByTagName("TROMBI");
	for (i=0;i<x.length;i++)
	{ 
		document.write("<tr><td>");
		document.write(x[i].getElementsByTagName("DEP")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(x[i].getElementsByTagName("DIPLOME")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(x[i].getElementsByTagName("ETU")[0].childNodes[0].nodeValue);
		document.write("</td></tr>");
		
		
	}
	document.write("</table>");
	
}

function searchName(form1) { 
	name =document.form1.reNom.value; 
} 

function searchYear(form0){
	annee=document.form0.year.value;
}

function actualisation(form2){
	document.form2.output.value=annee;
}