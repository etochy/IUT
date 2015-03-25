var annee = "tous";
var name = "";
var num = "";
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

function getDetailsFromEleve(Num){
	loadXMLFile();
	document.write("<table  class='tabcenter'><tr><th>DETAILS</th></tr>");
	var x=xmlDoc.getElementsByTagName("BEFORE");
	for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute('Num')==Num){
			document.write("<tr><td>");
			document.write("Date de naissance : "+x[i].getAttribute('BirthDate')+" ");
			document.write("Bac : "+x[i].getAttribute('Bac')+" ");
			document.write("</td></tr>");
	}
  }
	document.write("</table>");
}
function getEleveFromPromotion(Dep, Diplome, Year){
	loadXMLFile();
	document.write("<table  class='tabcenter'><tr><th>ELEVES</th></tr>");
	var x=xmlDoc.getElementsByTagName("ETU");
	for (i=0;i<x.length;i++){
		if(x[i].parentNode.parentNode.parentNode.getAttribute('Name')==Dep && x[i].parentNode.parentNode.getAttribute('Name')==Diplome && x[i].parentNode.getAttribute('Id')==Year){
			document.write("<tr><td>");
			document.write("<a href= "+"etu.html"+" onclick= "+"actualisation("+x[i].getAttribute('LastName')+"); >"+x[i].getAttribute('LastName')+"</a>");
			document.write("</td></tr>");
	}
  }
	document.write("</table>");
}

function getYearFromDiplome(Dep, Diplome){
	loadXMLFile();
	document.write("<table class='tabcenter'><tr><th>PROMOTION</th></tr>");
	var x=xmlDoc.getElementsByTagName("YEAR");
	for (i=0;i<x.length;i++){
		if(x[i].parentNode.parentNode.getAttribute('Name')==Dep && x[i].parentNode.getAttribute('Name')==Diplome ){
			document.write("<tr><td>");
			document.write(x[i].getAttribute('Id'));
			document.write("</td></tr>");
	}
  }
	document.write("</table>");
}
function getDiplomeFromDep(Dep){
	loadXMLFile();
	document.write("<table  class='tabcenter'><tr><th>DIPLOME</th></tr>");
	var x=xmlDoc.getElementsByTagName("DIPLOME");
	for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute('Name')==Dep){
			document.write("<tr><td>");
			document.write(x[i].getAttribute('Name'));
			document.write("</td></tr>");
	}
  }
	document.write("</table>");
}
function chooseDep(){
	loadXMLFile();
	document.write("<table  class='tabcenter'><tr><th>DEPARTEMENT</th></tr>");
	var x=xmlDoc.getElementsByTagName("DEP");
	for (i=0;i<x.length;i++){
		document.write("<tr><td>");
		document.write(x[i].getAttribute('Name'));
		document.write("</td></tr>");
	}
	document.write("</table>");
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
        name = document.form1.reNom.value;
        annee = document.form0.year.value;

        var requete = name+"/"+annee;
        window.location.href = "index.html?" + requete ;

}


function actualisation(num){
	var requete = num;
	window.location.href = "etu.html?" + requete ;
}



function getAll(){
    var requete = window.location.search.substring(1).split("/") ;
	if (requete != "") {
		name = requete[0];
		annee = requete[1];
	}
	
	if (name == "" && annee == "tous"){
		getAllEmpty();
	}
	else if (name == "" && annee != "tous"){
		getAllByAnnee();
	}
	else if (name != "" && annee == "tous"){
		getAllByName();
	}
	else {
	getAllByNameAndYear();
	}
}
function getAllByNameAndYear(){
	loadXMLFile();
    document.write("<table  class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].parentNode.getAttribute("Id") == annee){
			if(x[i].getAttribute("LastName").toLowerCase() == name.toLowerCase()){
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
function getAllByName(){
    loadXMLFile();
    document.write("<table class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
    var x=xmlDoc.getElementsByTagName("ETU");
    for (i=0;i<x.length;i++){
		if(x[i].getAttribute("LastName").toLowerCase() == name.toLowerCase()){
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

function getAllbyNum(){
 
	var requete = window.location.search ;
	if (requete) { 
		num=requete.substring(1) ;
	}
	var Num = num;
 
 
 
	loadXMLFile();
	document.write("<table class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th><th>DATE DE NAISSANCE</th><th>BAC</th><th>ETABLISSEMENT</th><th>POSTE</th><th>SECTEUR</th><th>ENTREPRISE</th><th>VILLE</th><th>TYPE-CONTRAT</th><th>DATE-EMBAUCHE</th><th>EMAIL</th></tr>");
	var x=xmlDoc.getElementsByTagName("ETU");
	for (i=0;i<x.length;i++){
		if(x[i].getAttribute('Num')==Num){
			document.write("<tr>");
			document.write("<td>");
			document.write("D&eacutepartement : "+x[i].parentNode.parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write("Dipl&ocircme : "+x[i].parentNode.parentNode.getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write("Promotion : "+x[i].parentNode.getAttribute('Id'));
			document.write("</td>");
			document.write("<td>");
			document.write("Nom : "+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name'));
			document.write("</td>");
			document.write("<td>");
			document.write("Num&eacutero : "+x[i].getAttribute('Num'));
			document.write("</td>"); 
			var y=xmlDoc.getElementsByTagName("BEFORE");
			for (j=0;j<y.length;j++){
				if(y[j].parentNode.getAttribute('Num')==Num){
					document.write("<td>");
					document.write("Date de naissance : "+y[j].getAttribute('BirthDate'));
					document.write("</td>");
					document.write("<td>");
					document.write("Baccaulaur&eacuteat : "+y[j].getAttribute('Bac'));
					document.write("</td>");
					document.write("<td>");
					document.write("Lyc&eacutee : "+y[j].getAttribute('OriginSchool')+" "+y[j].getAttribute('City'));
					document.write("</td>");
				}
			}
			var z=xmlDoc.getElementsByTagName("AFTER");
			for (h=0;h<z.length;h++){
				if(z[h].parentNode.getAttribute('Num')==Num){
					document.write("<td>");
					document.write("Poste : "+z[h].getAttribute('poste'));
					document.write("</td>");
					document.write("<td>");
					document.write("Secteur : "+z[h].getAttribute('Secteur'));
					document.write("</td>");
					document.write("<td>");
					document.write("Entreprise : "+z[h].getAttribute('Entreprise'));
					document.write("</td>");
					document.write("<td>");
					document.write("Ville : "+z[h].getAttribute('Ville'));
					document.write("</td>");
					document.write("<td>");
					document.write("Type de contrat : "+z[h].getAttribute('typeContrat'));
					document.write("</td>");
					document.write("<td>");
					document.write("Date d'embauche : "+z[h].getAttribute('dateEmbauche'));
					document.write("</td>");
					document.write("<td>");
					document.write("Email : "+z[h].getAttribute('Email'));
					document.write("</td>");
				}
			}
		}
	}
	document.write("</table>");
}
function getAllbyNumBis(){
 
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
	; 
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
				
					poste ="Poste : "+z[h].getAttribute('poste');
				
					secteur = "Secteur : "+z[h].getAttribute('Secteur');
					
					entreprise = "Entreprise : "+z[h].getAttribute('Entreprise');
					
					villeEntreprise = "Ville : "+z[h].getAttribute('Ville');
				
					type = "Type de contrat : "+z[h].getAttribute('typeContrat');
				
					dateEmbauche = "Date d'embauche : "+z[h].getAttribute('dateEmbauche');
			 
					mail = "Email : "+z[h].getAttribute('Email');
				
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
function getAllbyNumBisdesecours(){
 
	var requete = window.location.search ;
	if (requete) { 
		num=requete.substring(1) ;
	}
	var a = true;
	var Num = num;
	loadXMLFile();
	document.write("<table class='tabcenter'><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th><th>DATE DE NAISSANCE</th><th>BAC</th><th>ETABLISSEMENT</th><th>POSTE</th><th>SECTEUR</th><th>ENTREPRISE</th><th>VILLE</th><th>TYPE-CONTRAT</th><th>DATE-EMBAUCHE</th><th>EMAIL</th></tr>");
	var x=xmlDoc.getElementsByTagName("ETU");
	for (i=0;i<x.length;i++){
		if(a){
		if(x[i].getAttribute('Num')==Num){
			document.write("<tr>");
			document.write("<td>");
			dep = "D&eacutepartement : "+x[i].parentNode.parentNode.parentNode.getAttribute('Name');
			document.write("</td>");
			document.write("<td>");
			dip = "Dipl&ocircme : "+x[i].parentNode.parentNode.getAttribute('Name');
			document.write("</td>");
			document.write("<td>");
			annee = "Promotion : "+x[i].parentNode.getAttribute('Id');
			document.write("</td>");
			document.write("<td>");
			name = "Nom : "+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name');
			document.write("</td>");
			document.write("<td>");
			document.write("Num&eacutero : "+x[i].getAttribute('Num'));
			document.write("</td>"); 
			var y=xmlDoc.getElementsByTagName("BEFORE");
			for (j=0;j<y.length;j++){
				if(y[j].parentNode.getAttribute('Num')==Num){
					document.write("<td>");
					document.write("Date de naissance : "+y[j].getAttribute('BirthDate'));
					document.write("</td>");
					document.write("<td>");
					document.write("Baccaulaur&eacuteat : "+y[j].getAttribute('Bac'));
					document.write("</td>");
					document.write("<td>");
					document.write("Lyc&eacutee : "+y[j].getAttribute('OriginSchool')+" "+y[j].getAttribute('City'));
					document.write("</td>");
				}
			}
			var z=xmlDoc.getElementsByTagName("AFTER");
			for (h=0;h<z.length;h++){
				if(z[h].parentNode.getAttribute('Num')==Num){
					document.write("<td>");
					document.write("Poste : "+z[h].getAttribute('poste'));
					document.write("</td>");
					document.write("<td>");
					document.write("Secteur : "+z[h].getAttribute('Secteur'));
					document.write("</td>");
					document.write("<td>");
					document.write("Entreprise : "+z[h].getAttribute('Entreprise'));
					document.write("</td>");
					document.write("<td>");
					document.write("Ville : "+z[h].getAttribute('Ville'));
					document.write("</td>");
					document.write("<td>");
					document.write("Type de contrat : "+z[h].getAttribute('typeContrat'));
					document.write("</td>");
					document.write("<td>");
					document.write("Date d'embauche : "+z[h].getAttribute('dateEmbauche'));
					document.write("</td>");
					document.write("<td>");
					document.write("Email : "+z[h].getAttribute('Email'));
					document.write("</td>");
				}
			}
			a = false;
		}
		}else{
		if(x[i].getAttribute('Num')==Num){
			document.write("</tr>");
			document.write("<td>");
			document.write("</td>");
			document.write("<td>");
			dip = dip+"et Dipl&ocircme : "+x[i].parentNode.parentNode.getAttribute('Name');
			document.write("</td>");
			document.write("<td>");
			year = year+"et Promotion : "+x[i].parentNode.getAttribute('Id');
			document.write("</td>");
			
		}
		}
	}
	document.write("</table>");
}


function displayStudent(){
	document.write("<ecole><b><p>IUT Laval :</p></b>");
	document.write(annee);
	document.write("<br>"+dep);
	document.write("<br>"+dip+"<br><b>");
	
	document.write("<p>Ecole d'origine :</p></b>"+bac+","+ecole+"<br><br></ecole><travail><b>");
	document.write("<p>Travail actuel :</p></b>"+poste+"<br>"+secteur+"<br>"+entreprise+"<br>"+villeEntreprise+"<br>"+type+"<br>"+dateEmbauche+"<br><br>"+"</travail>");
	
}



