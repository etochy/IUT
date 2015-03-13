
var annee="tous";
var name = "Nom Prenom";
var num = "Numero";
var dep = "Departement";
var dip = "Diplome";
var date = "Date";
var bac = "Bac";
var ecole = "Ecole";
var villeecole = "Ville Ecole";
var poste = "Boulot";
var secteur = "Secteur";
var entreprise = "Entreprise";
var villeentreprise = "Ville Entreprise";
var typecontrat = "Type Contrat";
var dateembauche = "Date Embauche";
var mail = "Adresse mail";


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
	document.write("<table><tr><th>DETAILS</th></tr>");
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
	document.write("<table><tr><th>ELEVES</th></tr>");
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
	document.write("<table><tr><th>PROMOTION</th></tr>");
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
	document.write("<table><tr><th>DIPLOME</th></tr>");
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
	document.write("<table><tr><th>DEPARTEMENT</th></tr>");
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
	name =document.form1.reNom.value; 
	annee=document.form0.year.value;
	
	var requete = name+"/"+annee;
	window.location.href = "index.html?" + requete ;

} 

function actualisation(num){
	var requete = num;
	window.location.href = "etu.html?" + requete ;
}

function getAll(){
	
	var requete = window.location.search.substring(1).split("/") ;
	if (requete) { 
		name = requete[0];
		annee = requete[1];
	}
	
	loadXMLFile();
	document.write("<table><tr><th>DEP</th><th>DIPLOME</th><th>PROMO</th><th>NOM</th><th>NUM</th></tr>");
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
   
   
		document.write("<a onclick= "+"actualisation("+x[i].getAttribute('Num')+") >"+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</a>");
   
		document.write("</td>");
		document.write("<td>");
		document.write(x[i].getAttribute('Num'));
		document.write("</td>");
		document.write("</tr>");
	}
	document.write("</table>");
	
	document.write("<p> nom :"+name+"</p>");
	document.write("<p> annee :"+annee+"</p>");
}

function getAllbyNum(choix){

        var requete = window.location.search ;
        if (requete) {
                num=requete.substring(1) ;
        }
        var Num = num;



        loadXMLFile();
       
        var x=xmlDoc.getElementsByTagName("ETU");
        for (i=0;i<x.length;i++){
                if(x[i].getAttribute('Num')==Num){
                       
						ducument.choix =document.write("<p>D&eacutepartement : "+x[i].parentNode.parentNode.parentNode.getAttribute('Name')+"</p>");;
                  
                        ducument.section = document.write("<p>Dipl&ocircme : "+x[i].parentNode.parentNode.getAttribute('Name')+"</p>");;
                   
						ducument.section = document.write("<p>Promotion : "+x[i].parentNode.getAttribute('Id')+"</p>");
                
						ducument.section = document.write("<p>Nom : "+x[i].getAttribute('LastName')+" "+x[i].getAttribute('Name')+"</p>");
        
						ducument.section =  document.write("Num&eacutero : "+x[i].getAttribute('Num'));
                 
                        var y=xmlDoc.getElementsByTagName("BEFORE");
                        for (j=0;j<y.length;j++){
                                if(y[j].parentNode.getAttribute('Num')==Num){
                                  
                                        document.write("Date de naissance : "+y[j].getAttribute('BirthDate'));
                                
                                        document.write("Baccaulaur&eacuteat : "+y[j].getAttribute('Bac'));
                                  
                                        document.write("Lyc&eacutee : "+y[j].getAttribute('OriginSchool')+" "+y[j].getAttribute('City'));
                                    
                                }
                        }
                        var z=xmlDoc.getElementsByTagName("AFTER");
                        for (h=0;h<z.length;h++){
                                if(z[h].parentNode.getAttribute('Num')==Num){
                               
                                        document.write("Poste : "+z[h].getAttribute('poste'));
                                     
                                        document.write("Secteur : "+z[h].getAttribute('Secteur'));
                                     
                                        document.write("Entreprise : "+z[h].getAttribute('Entreprise'));

                                        document.write("Ville : "+z[h].getAttribute('Ville'));
                                     
                                        document.write("Type de contrat : "+z[h].getAttribute('TypeContrat'));
                                     
                                        document.write("Date d'embauche : "+z[h].getAttribute('DateEmbauche'));
                                    
                                        document.write("Email : "+z[h].getAttribute('Email'));
                                     
                                }
                        }
                }
        }
   
}











