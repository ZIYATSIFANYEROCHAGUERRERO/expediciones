let conceptos=JSON.parse(localStorage.getItem('ticket'));
let rs=JSON.parse(localStorage.getItem('rs'));
let rfc=JSON.parse(localStorage.getItem('rfc'));
let sub=JSON.parse(localStorage.getItem('subTotal'));
let iva=JSON.parse(localStorage.getItem('iva'));
let total=JSON.parse(localStorage.getItem('total'));


(
    function(){
        let con="";
        for(var i=0; i<conceptos.length;i++){
            con+='<div> <label> Cantidad <div name="Personas" id="cantidad">'+conceptos[i].cantidad+'</div></label><label> Cabaña o acampar <div name="descripcion" id="descripcion"><div></div>'+conceptos[i].descripcion+'</div></label><label> DIAS <div name="valorUnitario" id="valorUnitario"><div></div>'+conceptos[i].valorUnitario+'</div></label><label> importe <div name="importe" id="importe"><div></div>'+conceptos[i].importe+'</div></label></div>';
        }
        document.getElementById('conceptos').innerHTML=con;
        document.getElementById('rs').innerHTML=rs;
        document.getElementById('rfc').innerHTML=rfc;
        document.getElementById('subtotal').innerHTML= "el precio neto es: " +sub;
        document.getElementById('iva').innerHTML= "el iva es: " + iva;
        document.getElementById('total').innerHTML="el total de su compra es: " +total;
    
    }
)();
