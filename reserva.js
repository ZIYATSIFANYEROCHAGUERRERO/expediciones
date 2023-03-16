<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Formulario de Reservas</title>
    <link rel="stylesheet" href="reserv.css">
   
  </head>
  <body>
    
      <section>
        <div class="container">
          <h1>E X P E D I C I O N E S</h1>

          <form id="form">
            <h3>PRECIO DE EXPEDICIONES</h3>
            <h4>Precio por dia (niños y adultos)</h4>
            <H4>$400</H4>
            <style>
              img {
                border: 5px solid #660707;
                border-radius: 50%;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
                width: 200px;
                height: 200px;
              }
            </style>
             <img src="https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/24/57/8e.jpg" alt="Imagen de ejemplo">
          
            
            
           <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <br>
            <label for="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required>
            <br> 
            <label for="correo">Numero de telefono:</label>
            <input type="number" id="num" name="number" required>
            <br>
            
            <label for="adultos">Adultos:</label>
            <select id="adultos" name="adultos" onchange="actualizarOpciones()">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <br>
            <label for="ninos">Niños:</label>
            
            <select id="ninos" name="ninos">
              
            </select>
            <br>
            <div id="edades-ninos"></div>
            <br>
            <button type="button" onclick="actualizarEdadesNinos()">edades</button>
           <!---- <button type="button" onclick="llenarDatos()">Llenar Datos</button> --->
            
          </form>
          
        <article>
          <div id="Receptor">
              <legend>Ingrese los datos </legend>
               <label for="nombre">Nombre:</label>
              <input class="datos-receptor" type="name" id="rs" placeholder="nombre" >
              <input class="datos-receptor" type="email" id="rfc" placeholder="email">
                
              <label id="titulo-conceptos" class="titulo-conceptos">N° de paquetes
                  <input id="n-conceptos" type="number"  min="0" max="20" value="0">
                  <button id="generar" onclick="generar();">Generar</button>
              </label>
            </div>
            
          
          <div id="cuerpo">
              <legend>Reservacion: </legend>
              <div id="conceptos">
              </div>
             
             
              <button id="agregar" class="agregar">Agregar Concepto</button>
              <button id="ticket" class="ticket" onclick="generarTicket();">Generar Ticket</button>
          </div>
          
          <div id="totales">
              <table>
                  <tr>
                      <th>Subtotal:</th>
                      <td id="subTotal">0.00</td>
                  </tr>
                  <tr>
                      <th>IVA:</th>
                      <td id="iva">0.00</td>
                  </tr>
                  <tr>
                      <th>Total:</th>
                      <td id="total">0.00</td>
                  </tr>
              </table>
          </div>
      </article>

       </section>
       
    </div>
    <script src="script.js"></script>
  </body>
</html>
