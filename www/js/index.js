var annee = "tous";
var name = "";
var num ;
var dep = "";
var dip = "";
var date = "";
var bac = "";
var ecole = "";
var poste = "";
var secteur = "";
var entreprise = "";
var villeEntreprise = "";
var typeContrat = "";
var dateEmbauche = "";
var mail = "";

var lastGrade="";
var lastAnnee="";
var lastSchool="";
var lastTown="";
var isAfter=false;

function year() {		
	var d = new Date();
	d = d.getFullYear();
	var newOpt;   
	var i=0;
	var selectLength =0;
	var num = "";
			
	newOpt = new Option("tous");  
			
	for(i=2005;i<=d+1;i++,selectLength ++){   
	document.form0.year.options[selectLength ]  = newOpt; 
		newOpt = new Option(i);         
	}	   
	
}

function loadXMLFile(){
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
}

function readStudent(form2){
	var requete = window.location.search ;
	if (requete) { 
		num=requete.substring(1) ;
	}
	document.form2.output.value=num; 
}
function refresh(form1) {
        dep = document.form1.reDep.value;
        annee = document.form0.year.value;
		dip = document.form1.reDip.value;
        var requete = dep+"/"+annee+"/"+dip;
        window.location.href = "index.html?" + requete ;

}


function actualisation(num){
	
	alert("ta mere : "+num);
	alert(checkConnection());
	window.location.href = "etu.html?"+num;
}



function getAll(){
    var requete = window.location.search.substring(1).split("/") ;
	if (requete != "") {
		dep = requete[0];
		annee = requete[1];
		dip = requete[2];
	}

	if (dep == "" && annee == "tous" && dip == ""){
		getAllEmpty();
	}
	else if (dep == "" && annee != "tous" && dip == ""){
		getAllByAnnee();
	}
	else if (dep != "" && annee == "tous" && dip == ""){
		getAllByDep();
	}
	else if (dep == "" && annee == "tous" && dip != ""){
		getAllByDip();
	}
	else if (dep != "" && annee != "tous" && dip == ""){
		getAllByDepAndYear();
	}
	else if (dep != "" && annee == "tous" && dip != ""){
		getAllByDepAndDip();
	}
	else if (dep == "" && annee != "tous" && dip != ""){
		getAllByDipAndYear();
	}
	else {
	getAllByDepDipAnnee();
	}
}
function getAllByDepDipAnnee(){
	loadXMLFile();
    document.write("<table  class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Id") == annee){
			if(encodeURIComponent(x[i].parentNode.parentNode.getAttribute("Name").toLowerCase().trim()) == dip.toLowerCase()){
				if(x[i].parentNode.parentNode.parentNode.getAttribute("Name").toLowerCase() == dep.toLowerCase()){
					document.write("<tr>");
					document.write("<td>");
					document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
					document.write("</td>");
					document.write("<td>");
					document.write(x[i].parentNode.parentNode.getAttribute('Name'));
					document.write("</td>");
					document.write("<td>");
					document.write(x[i].parentNode.getAttribute('Id'));
					document.write("</td>");
					document.write("<td>");
					document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") />"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
					document.write("</td>");
					document.write("<td>");
					document.write(x[i].getAttribute('Num'));
					document.write("</td>");
					document.write("</tr>");
				}
			}
		}
	}
    document.write("</table>");
}
function getAllByDepAndYear(){
	loadXMLFile();
    document.write("<table  class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Id") == annee){
			if(x[i].parentNode.parentNode.parentNode.getAttribute("Name").toLowerCase() == dep.toLowerCase()){
				document.write("<tr>");
				document.write("<td>");
				document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].parentNode.parentNode.getAttribute('Name'));
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].parentNode.getAttribute('Id'));
				document.write("</td>");
				document.write("<td>");
				document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].getAttribute('Num'));
				document.write("</td>");
				document.write("</tr>");
			}
		}
	}
    document.write("</table>");
}
function getAllByDipAndYear(){
	loadXMLFile();
    document.write("<table  class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Id") == annee){
			if(encodeURIComponent(x[i].parentNode.parentNode.getAttribute("Name").toLowerCase().trim()) == dip.toLowerCase()){
				document.write("<tr>");
				document.write("<td>");
				document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].parentNode.parentNode.getAttribute('Name'));
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].parentNode.getAttribute('Id'));
				document.write("</td>");
				document.write("<td>");
				document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].getAttribute('Num'));
				document.write("</td>");
				document.write("</tr>");
			}
		}
	}
    document.write("</table>");
}
function getAllByDepAndDip(){
	loadXMLFile();
    document.write("<table  class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.parentNode.parentNode.getAttribute("Name").toLowerCase() == dep.toLowerCase()){
			if(encodeURIComponent(x[i].parentNode.parentNode.getAttribute("Name").toLowerCase().trim()) == dip.toLowerCase()){
				document.write("<tr>");
				document.write("<td>");
				document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].parentNode.parentNode.getAttribute('Name'));
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].parentNode.getAttribute('Id'));
				document.write("</td>");
				document.write("<td>");
				document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
				document.write("</td>");
				document.write("<td>");
				document.write(x[i].getAttribute('Num'));
				document.write("</td>");
				document.write("</tr>");
			}
		}
	}
    document.write("</table>");
}
function getAllByDep(){
    loadXMLFile();
    document.write("<table class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.parentNode.parentNode.getAttribute("Name").toLowerCase() == dep.toLowerCase()){
			document.write("<tr>");
			document.write("<td>");
			document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].parentNode.getAttribute('Id'));
			document.write("</td>");
			document.write("<td>");
			document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].getAttribute('Num'));
			document.write("</td>");
			document.write("</tr>");
		}
	}
    document.write("</table>");
}
function getAllByDip(){
    loadXMLFile();
    document.write("<table class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(encodeURIComponent(x[i].parentNode.parentNode.getAttribute("Name").toLowerCase().trim()) == dip.toLowerCase()){
			document.write("<tr>");
			document.write("<td>");
			document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].parentNode.getAttribute('Id'));
			document.write("</td>");
			document.write("<td>");
			document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].getAttribute('Num'));
			document.write("</td>");
			document.write("</tr>");
		}
	}
    document.write("</table>");
}

function getAllByAnnee(){
    loadXMLFile();
    document.write("<table  class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Id") == annee){
			document.write("<tr>");
			document.write("<td>");
			document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].parentNode.getAttribute('Id'));
			document.write("</td>");
			document.write("<td>");
			document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
			document.write("</td>");
			document.write("<td>");
			document.write(x[i].getAttribute('Num'));
			document.write("</td>");
			document.write("</tr>");
		}
	}
    document.write("</table>");
}

function getAllEmpty(){
    loadXMLFile();
    document.write("<table class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		document.write("<tr>");
        document.write("<td>");
        document.write(x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
        document.write("</td>");
        document.write("<td>");
        document.write(x[i].parentNode.parentNode.getAttribute('Name'));
        document.write("</td>");
        document.write("<td>");
        document.write(x[i].parentNode.getAttribute('Id'));
        document.write("</td>");
        document.write("<td>");
        document.write("<b><a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a></b>");
        document.write("</td>");
        document.write("<td>");
        document.write(x[i].getAttribute('Num'));
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function getAllbyNumBis(){
	isAfter = false;
	var requete = window.location.search ;
	if (requete) { 
		num=requete.substring(1) ;
	}
	var a = true;
	var Num = num;
	loadXMLFile();
	var x=xmlDoc.getElementsByTagName("ETU");
	for (i=0;i<x.length;i++){
		if(a){
		if(x[i].getAttribute('Num')==Num){
			
			dep = "D&eacutepartement : "+x[i].parentNode.parentNode.parentNode.getAttribute('Name');

			dip = "Dipl&ocircme : "+x[i].parentNode.parentNode.getAttribute('Name');

			annee = "Promotion : "+x[i].parentNode.getAttribute('Id');
		
			name = "Nom : "+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name');
	
			num = "Num&eacutero : "+x[i].getAttribute('Num');
			
			var y=xmlDoc.getElementsByTagName("BEFORE");
			for (j=0;j<y.length;j++){
				if(y[j].parentNode.getAttribute('Num')==Num){
				
					date = "Date de naissance : "+y[j].getAttribute('BirthDate');
		
					bac = "Baccaulaur&eacuteat : "+y[j].getAttribute('Bac');
				
					ecole = "Lyc&eacutee : "+y[j].getAttribute('OriginSchool')+", "+y[j].getAttribute('City');
			
				}
			}
			var z=xmlDoc.getElementsByTagName("AFTER");
			for (h=0;h<z.length;h++){
				if(z[h].parentNode.getAttribute('Num')==Num){
					isAfter = true;
					
					poste ="Poste : "+z[h].getAttribute('poste');
				
					secteur = "Secteur : "+z[h].getAttribute('Secteur');
					
					entreprise = "Entreprise : "+z[h].getAttribute('Entreprise');
					
					villeEntreprise = "Ville : "+z[h].getAttribute('Ville');
				
					type = "Type de contrat : "+z[h].getAttribute('TypeContrat');
				
					dateEmbauche = "Date d'embauche : "+z[h].getAttribute('DateEmbauche');
			 
					mail = "Email : "+z[h].getAttribute('Email');
				
				}
			}
			var last=xmlDoc.getElementsByTagName("CURRENTGRADE");
			
			for (k=0;k<last.length;k++){
				if(last[k].parentNode.getAttribute('Num')==Num){
					
				
					lastGrade = last[k].getAttribute('grade');
		
					lastAnnee = last[k].getAttribute('year');
				
					lastSchool =last[k].getAttribute('school');
					
					lastTown = last[k].getAttribute('town');
			
				}
			}
			a = false;
		}
		}else if(x[i].getAttribute('Num')==Num){
	
			dip = dip+" et Dipl&ocircme : "+x[i].parentNode.parentNode.getAttribute('Name');

			annee = annee+" et Promotion : "+x[i].parentNode.getAttribute('Id');
						
		}
	}

}

function displayStudent(){
	document.write("<ecole><b><p>IUT Laval :</p></b>");
	document.write(annee);
	document.write("<br>"+dep);
	document.write("<br>"+dip+"<br><b>");
	document.write("<p>Ecole d'origine :</p></b>"+bac+","+ecole+"<br><br></ecole>");

	document.write("<ecole><b>Dernier diplome / Diplome en cours :</b><br>");	
	
	if(lastGrade == dip){
		document.write("Diplome : "+lastGrade);
	}
	else{
		document.write("Diplome : "+lastGrade+"<br>");
		document.write("Annee : "+lastAnnee+"<br>");
		document.write("Ecole : "+lastSchool+"<br>");
		document.write("Ville : "+lastTown+"<br>");
	}
	
	document.write("<br></ecole>");
	
	if(isAfter == true)
		document.write("<travail><b><p>Travail actuel :</p></b>"+poste+"<br>"+secteur+"<br>"+entreprise+"<br>"+villeEntreprise+"<br>"+typeContrat+"<br>"+dateEmbauche+"<br><br>"+"</travail>");
	
}

function getDep(){
 loadXMLFile();
    var x=xmlDoc.getElementsByTagName("DEP");
    for (i=0;i<x.length;i++){
  document.write(x[i].getAttribute("Name"));
 }
}
function getDip(){
 loadXMLFile();
    var x=xmlDoc.getElementsByTagName("DIPLOME");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Name") == dep)
			document.write(x[i].getAttribute("Name"));
	}
 }
function getDep(){
	loadXMLFile();
    var x=xmlDoc.getElementsByTagName("DEP");
    for (i=0;i<x.length;i++){
		document.write(x[i].getAttribute("Name"));
	}
}
function getDip(){
	loadXMLFile();
    var x=xmlDoc.getElementsByTagName("DIPLOME");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Name") == dep){
			document.write(x[i].getAttribute("Name"));
		}	
	}
}

function getPic(){
 src = "http://perso.univ-lemans.fr/~i131460/diplapp/photos/p-"+num+".jpg";
 alert(src);
img = document.createElement('img');
 img.src = src;
 document.write('<img src="'+src+'"alt="Picture">');
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return states[networkState];
}








