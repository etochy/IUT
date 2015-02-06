function year() {   
		
	var d = new Date();
	d = d.getFullYear();
	var newOpt;   
	var i=0;   
	var selectLength =0;
			
	newOpt = new Option("tous");  
			
	for(i=2005;i<=d+1;i++,selectLength ++){   
	document.Register.year.options[selectLength ]  = newOpt; 
		newOpt = new Option(i);         
		
	}	      
}