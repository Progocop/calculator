function LoadServ(a = Number(document.getElementById("A").value),
                  b = Number(document.getElementById("B").value),
                  c = Number(document.getElementById("C").value)
                  ) {
  var d =(b*b)-(4*a*c);
  var x1=Number(x1);
  var x2=Number(x2);
  if(d>=0) {
    x1=(-b+Math.sqrt(d))/(2*a);
    x2=(-b-Math.sqrt(d))/(2*a);
    document.getElementById("tx").innerHTML="x1=" + x1 +"<br>" + "x2=" + x2;
  }
  else
    document.getElementById("tx").innerHTML="failed";
}
