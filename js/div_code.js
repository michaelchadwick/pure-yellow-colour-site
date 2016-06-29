var ns4 = (document.layers)? true:false;
var ie4 = (document.all)? true:false;

// Show/Hide functions for non-pointer layer/objects
function show(id,total) {

  var ndivs = total; // number of divs to hide/show
  var idstr_a = "a" + id;
  var idstr_b = "b" + id;
  var idstr_c = "c" + id;

  // Netscape 4+
  if (ns4) {
    document.layers[idstr_a].style.display = "none";
	document.layers[idstr_b].style.display = "inline";
	document.layers[idstr_c].style.display = "inline";
	for(i=1;i<ndivs;i++) {
      if(i!=parseInt(id)) {
	    istr_a = "a" + i;
		istr_b = "b" + i;
		istr_c = "c" + i;
		document.layers[istr_a].style.display = "inline";
		document.layers[istr_b].style.display = "none";
		document.layers[istr_c].style.display = "none";
	  }
	}
  }
  // Internet Explorer 4+
  else {
    if (ie4) {
      document.all[idstr_a].style.display = "none";
	  document.all[idstr_b].style.display = "inline";
	  document.all[idstr_c].style.display = "inline";
	  for(i=1;i<ndivs;i++) {
        if(i!=parseInt(id)) {
		  istr_a = "a" + i;
		  istr_b = "b" + i;
		  istr_c = "c" + i;
		  document.all[istr_a].style.display = "inline";
		  document.all[istr_b].style.display = "none";
		  document.all[istr_c].style.display = "none";
	    }
	  }
    }
	// Firefox, Opera, etc.
    else {
	  if(!document.all && document.getElementById) {
	    document.getElementById(idstr_a).style.display = "none";
		document.getElementById(idstr_b).style.display = "inline";
		document.getElementById(idstr_c).style.display = "inline";
		for(i=1;i<=ndivs;i++) {
	      if(i!=parseInt(id)) {
		    istr_a = "a" + i;
			istr_b = "b" + i;
			istr_c = "c" + i;
			document.getElementById(istr_a).style.display = "inline";
			document.getElementById(istr_b).style.display = "none";
			document.getElementById(istr_c).style.display = "none";
		  }
		}
	  }
	}
  }
}
	
function hide(id, total) {

  ndivs = total;
  idstr_a = "a" + id;
  idstr_b = "b" + id;
  idstr_c = "c" + id;

  if (ns4) {
    document.layers[idstr_a].style.display = "inline";
	document.layers[idstr_b].style.display = "none";
	document.layers[idstr_c].style.display = "none";
	for(i=1;i<ndivs;i++) {
      if(i!=parseInt(id)) {
	    istr_a = "a" + i;
		istr_b = "b" + i;
	    istr_c = "c" + i;
		document.layers[istr_a].style.display = "inline";
		document.layers[istr_b].style.display = "none";
		document.layers[istr_c].style.display = "none";
	  }
	}
  }
  else {
    if (ie4) {
      document.all[idstr_a].style.display = "inline";
	  document.all[idstr_b].style.display = "none";
	  document.all[idstr_c].style.display = "none";
	  for(i=1;i<ndivs;i++) {
      if(i!=parseInt(id)) {
	    istr_a = "a" + i;
		istr_b = "b" + i;
	    istr_c = "c" + i;
		document.all[istr_a].style.display = "inline";
		document.all[istr_b].style.display = "none";
		document.all[istr_c].style.display = "none";
	  }
	}
    }
    else {
	  if(!document.all && document.getElementById) {
	    document.getElementById(idstr_a).style.display = "inline";
		document.getElementById(idstr_b).style.display = "none";
		document.getElementById(idstr_c).style.display = "none";
		for(i=1;i<=ndivs;i++) {
	      if(i!=parseInt(id)) {
		    istr_a = "a" + i;
			istr_b = "b" + i;
			istr_c = "c" + i;
			document.getElementById(istr_a).style.display = "inline";
			document.getElementById(istr_b).style.display = "none";
			document.getElementById(istr_c).style.display = "none";
		  }
		}
	  }
	}
  }
}