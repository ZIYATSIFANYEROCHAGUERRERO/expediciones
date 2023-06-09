var receptor={
  razonSocial:"",
  rfc: "",
}

let ninosSelect = document.getElementById("ninos");
let edadesNinosDiv = document.getElementById("edades-ninos");

function actualizarOpciones() {
  ninosSelect.innerHTML = "";
  let adultosSelect = document.getElementById("adultos");
  let adultos = Number(adultosSelect.value);
  let maxNinos = adultos === 1 ? 4 : adultos === 2 ? 3 : adultos === 3 ? 2 : 0;
  for (let i = 0; i <= maxNinos; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    ninosSelect.add(option);
  }
  actualizarEdadesNinos();
}




function actualizarEdadesNinos() {
  edadesNinosDiv.innerHTML = "";
  let ninos = Number(ninosSelect.value);
  for (let i = 0; i < ninos; i++) {
    let label = document.createElement("label");
    label.for = `edad-nino-${i}`;
    label.innerHTML = `Edad del niño ${i + 1}: `;
    let input = document.createElement("input");
    input.type = "number";
    input.id = `edad-nino-${i}`;
    input.name = `edad-nino-${i}`;
    input.min = "0";
    input.required = true;
    edadesNinosDiv.appendChild(label);
    edadesNinosDiv.appendChild(input);
    edadesNinosDiv.appendChild(document.createElement("br"));
  }
}



function generar(){
  receptor.razonSocial=document.getElementById("rs").value;
  receptor.rfc=document.getElementById("rfc").value;
  //activar el escuchador 
  document.getElementById('generar').addEventListener('click',function(){generarConceptos()})
  localStorage.setItem('rs',JSON.stringify(receptor.razonSocial));
  localStorage.setItem('rfc',JSON.stringify(receptor.rfc));

}



//se indentifica  numero de conceptos antes de agregar
let conceptos=document.getElementById('conceptos').innerHTML;

let generarConceptos=function(){

   let num=document.getElementById("n-conceptos").value;
   if(num>0){
       for(let i=0; i<num;i++){
           conceptos+=estructuraConcepto(i);
       }
       document.getElementById("conceptos").innerHTML=conceptos;
       //mostrar los botones de agregar y generar ticket
       document.getElementById("agregar").classList.add('mostrar-agregar');
       document.getElementById("ticket").classList.add('mostrar-ticket');
       //quitar la funcionalidad de conceptos
       document.getElementById("titulo-conceptos").classList.add=('quitar-titulo-conceptos');
   }
}

//funcion para capturar las cajas de captura, las funciones con parametro llevan dato dentro del ()
function estructuraConcepto(num){
return `<div>
<label>Numero de personas:
<input type="number" name="Numero de personas" id="c${num}" value="" onblur="CalcularImporte(${num});"/></label>
<label>Tipo (cabaña o acampar):
<input type="text" name="descripcion" placeholder="ingrese el tipo de acampar " /></label>
<label>Telefono
<input type="text" name="descripcion" placeholder="ingrese su telefono" /></label>
<label>Lugar de destino
<input type="text" name="descripcion" placeholder="lugar de destino" /></label>
<label>Dias :
<input type="number" name="Dias a quedarse"  id="v${num}" value="" step="0.01" onblur="CalcularImporte(${num});" /></label>
<label>Costo :
<input type="number" name="costo"  id="y${num}" value="" step="0.01" onblur="CalcularImporte(${num});" /></label>
<label>Importe:
<input type="number" name="importe"  id="i${num}" value="" step="0.01"/></label>
</div>
`;


}

/*
function agregarConceptos(){
   let conceptos=document.getElementById("conceptos").innerHTML;
   document.getElementById('conceptos').innerHTML=(conceptos+estructuraConcepto());
}*/

document.getElementById('agregar').addEventListener('click',function(){agregarConcepto()});
document.getElementById('ticket').addEventListener('click',function(){generarTicket()});
let agregarConcepto=function(){
   let totalConceptos=document.getElementsByTagName('cantidad');
   let concepto=document.createElement('div');
   concepto.innerHTML=estructuraConcepto('totalConceptos.length');
   document.getElementById('conceptos').appendChild(concepto);
}

var CalcularImporte=function(x){
document.getElementById('i'+x).value=document.getElementById('c'+x).value*document.getElementById('v'+x).value*document.getElementById('y'+x).value;;
calculosAdicionales();
}




let calculosAdicionales=function(){
   let importes=document.getElementsByName('importe');
   let j=
   subtotal=0;
   while(importes.length>j){
   subtotal+=parseFloat(importes[j].value);
   j++

   }
   let iva=subtotal * .16;
   let total=subtotal + iva;
   document.getElementById('subTotal').innerHTML=subtotal;
   document.getElementById('iva').innerHTML=iva;
   document.getElementById('total').innerHTML=total;

   localStorage.setItem('subTotal',JSON.stringify(subtotal));
   localStorage.setItem('iva',JSON.stringify(iva));
   localStorage.setItem('total',JSON.stringify(total));

}


let generarTicket=function(){
  let cantidadAr=document.getElementsByName('Numero de personas');
  let descripcionAr=document.getElementsByName('descripcion');
  let ValorUnitarioAr=document.getElementsByName('Dias a quedarse');
  let importeAr=document.getElementsByName('importe');
  let ticket=[];
  
  

  for( var i=0;i<cantidadAr.length;i++){
      var objCantidad=cantidadAr[i].value;
      var objDescripcion=descripcionAr[i].value;
      var objValorUnitario=ValorUnitarioAr[i].value;
      var objImporte=importeAr[i].value;
      ticket[i]={
          cantidad:objCantidad,
          descripcion:objDescripcion,
          valorUnitario: objValorUnitario,
          importe:objImporte
      };
  }
       //console.table(ticket); SIRVE PARA GENERAR EL TICKET 

      //USAR JSON Y OTRA PAGINA
      localStorage.setItem('ticket',JSON.stringify(ticket));
      console.table(JSON.stringify(ticket));
      window.open("ticket.html", width="800", heigth="500");
    

}











