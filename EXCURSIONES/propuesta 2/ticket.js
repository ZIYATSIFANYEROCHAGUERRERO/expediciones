let conceptos=JSON.parse(localStorage.getItem('ticket'));
let des=JSON.parse(localStorage.getItem('des'));
let dest=JSON.parse(localStorage.getItem('dest'));
let sub=JSON.parse(localStorage.getItem('subTotal'));
let iva=JSON.parse(localStorage.getItem('iva'));
let total=JSON.parse(localStorage.getItem('total'));
let edad1=JSON.parse(localStorage.getItem('adultos'));
let edad2=JSON.parse(localStorage.getItem('ninos'));



(
    function(){
        let con="";
        for(var i=0; i<conceptos.length;i++){
            con+='<div> <label> Cantidad <div name="Personas" id="cantidad">'+conceptos[i].cantidad+'</div></label><label> Cabaña o acampar <div name="descripcion" id="descripcion"><div></div>'+conceptos[i].descripcion+'</div></label><label> Telefono <div name="descripcion1" id="descripcion1"><div></div>'+conceptos[i].descripcion1+'</div></label><label> Destino <div name="descripcion2" id="descripcion2"><div></div>'+conceptos[i].descripcion2+'</div></label><label> DIAS <div name="valorUnitario" id="valorUnitario"><div></div>'+conceptos[i].valorUnitario+'</div></label><label> importe <div name="importe" id="importe"><div></div>'+conceptos[i].importe+'</div></label></div>';
        }
        document.getElementById('conceptos').innerHTML=con;
        document.getElementById('des').innerHTML=des;
        document.getElementById('dest').innerHTML=dest;
        document.getElementById('subtotal').innerHTML= "el precio neto es: " +sub;
        document.getElementById('iva').innerHTML= "el iva es: " + iva;
        document.getElementById('total').innerHTML="el total de su compra es: " +total;
        document.getElementById('edades').innerHTML="El total de adultos es de: " + edad1;
        document.getElementById('edades2').innerHTML="El total de niños es de: " + edad2;
        
    
    }
)();