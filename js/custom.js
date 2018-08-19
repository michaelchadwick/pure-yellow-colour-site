function show (id, total) {
  var ndivs = total; // number of divs to hide/show
  var idstr_a = 'a' + id;
  var idstr_b = 'b' + id;
  var istr_a, istr_b;

  if (!document.all && document.getElementById) {
    document.getElementById(idstr_a).style.display = 'none';
    document.getElementById(idstr_b).style.display = 'inline';

    for (var i = 1; i <= ndivs; i++) {
      if (i != parseInt(id)) {
        istr_a = 'a' + i;
        istr_b = 'b' + i;
        document.getElementById(istr_a).style.display = 'inline';
        document.getElementById(istr_b).style.display = 'none';
      }
    }
  }
}