 /**
 * @fileoverview Código de implementación para el juego Uno
 * @version       2019.12.06
 * @author        Jeimy Tatiana Pinto Tapia <jeimy.pintot@autonoma.edu.co>
 * @author        Geovani Andrés Ladino Orrego <geovani.ladinoo@autonoma.edu.co>
 * History
 * 2019.11.26 – Se implementaron las clases que se necesitaban para el juego
 * 2019.11.30 – Se implementó la interfaz gráfica
 * ----
 */
class Carta {
    /**
   * Propiedad que indica el color de una carta
   * @type {string}
   */
    color;
    /**
   * Propiedad que indica la imagen de una carta
   * @type {string}
   */
    imagen;
    /**
   * Propiedad que indica la carta que hay después de la actual
   * @type {Carta}
   */
    siguiente;
    /**
   * Propiedad que indica la carta que hay antes de la actual
   * @type {Carta}
   */
    anterior;
    /** @constructor */
    constructor(imagen, color) {
        this.imagen = imagen;
        this.color = color;
        this.siguiente = null;
        this.anterior = null;
    }
    /**
    * Obtiene el color a una carta
    * @return  {string}
    */
    getColor() {
        return this.color;
    }
    /**
    * Obtiene la imagen de una carta
    * @return  {string}
    */
    getImagen() {
        return this.imagen;
    }
    /**
    * Obtiene la siguiente carta que hay con respecto a la actual
    * @return  {Carta}
    */
    getSiguiente() {
        return this.siguiente;
    }
    /**
    * Obtiene la anterior carta que hay con respecto a la actual
    * @return  {Carta}
    */
    getAnterior() {
        return this.anterior;
    }
    /**
    * Modifica la próxima carta que hay con respecto a la actual
    * @param  {Carta}
    */
    setSiguiente(siguiente) {
        this.siguiente = siguiente;
    }
    /**
    * Modifica la anterior carta que hay con respecto a la actual
    * @param  {Carta}
    */
    setAnterior(anterior) {
        this.anterior = anterior;
    }
}

class CartaComun extends Carta {
    /**
   * Propiedad que indica el calor de una carta común
   * @type {Integer}
   */
    valor;
    /** @constructor */
    constructor(imagen, color, valor) {
        super(imagen, color);
        this.imagen = imagen;
        this.color = color;
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }
    /**
    * Obtiene el valor de una carta común
    * @return  {Integer}
    */
    getValor() {
        return this.valor;
    }
}

class CartaEspecial extends Carta {
    /** @constructor */
    constructor(imagen, color) {
        super(imagen, color);
        this.imagen = imagen;
        this.color = color;
        this.siguiente = null;
        this.anterior = null;
    }
    /**
    * Modifica el color de una carta especial
    * @param  {string}
    */
    setColor(color) {
        this.color = color;
    }
}
class Jugador {
    /**
   * Propiedad que indica el puntaje(score) que ha aculuado un jugador
   * @type {Integer}
   */
    puntaje;
    /**
   * Propiedad que indica el nombre de un jugador
   * @type {string}
   */
    nombre;
    /**
   * Propiedad que indica la cantidad de cartas que hay en dominio del jugador
   * @type {Baraja}
   */
    maso;
    /**
   * Propiedad que indica el estado en el que está el jugador (jugando o en espera)
   * @type {string}
   */
    estado;
    /** @constructor */
    constructor(nombre) {
        this.puntaje = 0;
        this.nombre = nombre;
        this.maso = new Baraja();
        this.estado = "esperando";
    }
    /**
    * Obtiene el nombre de un jugador
    * @return  {string} el nombre del jugador
    */
    getName() {
        return this.nombre;
    }
    /**
    * Obtiene el listado de cartas que tiene un jugador en su maso
    * @return  {Baraja} el maso de un jugador
    */
    getMaso() {
        return this.maso;
    }
    /**
    * Modifica el listado de cartas que tiene un jugador en su maso
    * @param  {Baraja} el nuevo maso del jugador
    */
    setMaso(maso) {
        this.maso = maso;
    }
    /**
    * Obtiene el estado en el que se encuentra un jugador (jugando o a la espera)
    * @return  {string} el estado en el que se encuentra el jugador
    */
    getEstado() {
        return this.estado;
    }
    /**
    * Modifica el estado en el que se encuentra un jugador (jugando o a la espera)
    * @param  {string} el nuevo estado en el que se encuentra el jugador
    */
    setEstado(estado) {
        this.estado = estado;
    }
    /**
    * Ordena a la baraja que se ordene por colores 
    * @return  {Baraja} el nuevo maso ordenado por colores
    */
    ordenarMasoColor() {
        return this.getMaso().ordenarPorColor();
    }
    /**
    * Ordena a la baraja que se ordene de manera ascendente
    * @return  {Baraja} el nuevo maso ordenado por acendentemente
    */
    ordenarMasoNumeroAscendente() {
        return this.getMaso().ordenarAscendente();
    }
    /**
    * Ordena a la baraja que se ordene de manera descenten
    * @return  {Baraja} el nuevo maso ordenado por descendentemente
    */
    ordenarMasoNumeroDescendente() {
        return this.getMaso().ordenarDescendente();
    }
    /**
    * Obtiene una lista con los colores de el maso del jugador
    * @return  {Baraja} lista con los colores de la baraja
    */
    obtenerColoresBaraja(){
        return this.getMaso().obtenerColoresBaraja();
    }
    /**
    * Obtiene una listade imagenes de el maso del jugador
    * @return  {Baraja} lista con los colores de la baraja
    */
    obtenerImagenesBaraja(){
        return this.getMaso().obtenerImagenesBaraja();
    }
}
class Baraja {
    /**
   * Propiedad que indica el primer nodo (carta) que hay dentro de la Lista
   * @type {Carta}
   */
    cabeza;
    /**
   * Propiedad que indica el ultimo nodo (carta) que hay dentro de la Lista
   * @type {Carta}
   */
    cola;
    /**
   * Propiedad que indica el tamaño actual de la Lista (baraja)
   * @type {Integer}
   */
    longuitud;
    /** @constructor */
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.longuitud = 0;
    }
    /**
    * Obtiene el primer nodo de la Lista
    * @return  {Carta} La carta que está de primera en la baraja
    */
    getCabeza() {
        return this.cabeza;
    }
    /**
    * Modifica el primer nodo de la Lista
    * @param  {Carta} la nueva crata que estará de primera en la baraja
    */
    setCabeza(cabeza) {
        this.cabeza = cabeza;
    }
    /**
    * Obtiene el ultimo nodo de la Lista
    * @return  {Carta} La carta que está de última en la baraja
    */
    getCola() {
        return this.cola;
    }
    /**
    * Modifica el último nodo de la Lista
    * @param  {Carta} la nueva crata que estará de última en la baraja
    */
    setCola(cola) {
        this.cola = cola;
    }
    /**
    * Obtiene el tamaño actual de la Lista
    * @return  {Carta} cantidad de cartas que hay en la baraja
    */
    getLongitud() {
        return this.longuitud;
    }
    /**
    * Modifica el tamaño actual de la Lista
    * @param  {Carta} la nueva cantidad de cartas que habrán en la baraja
    */
    setLonguitud(longuitd) {
        this.longuitud = longuitd;
    }
    /**
    * Inserta una nueva carta a la baraja
    * @param  {Carta} El nuevo nodo que ingresará a la lista 
    */
    insertarCarta(carta) {
        if (this.longuitud == 0) {
            this.setCabeza(carta);
            this.setCola(carta);
        } else {
            this.cola.setSiguiente(carta);
            carta.setAnterior(this.cola);
            this.cola = carta;
        }
        this.longuitud++;
    }
    /**
    * Elimina una carta de la baraja
    * @param  {Carta} EL nodo que se desea eliminar de la Lista
    */
    elimnicarCarta(carta) {
        if (this.cabeza != null) {
            var aux = this.cabeza;
            var ant = null;
            while (aux != null) {
                if (aux.getImagen() == carta.getImagen()) {
                    if (ant == null) {
                        this.cabeza = this.cabeza.getSiguiente();
                        aux.setSiguiente(null);
                        aux = this.cabeza;

                    } else {
                        ant.setSiguiente(aux.getSiguiente());
                        aux.setSiguiente(null);
                        aux = ant.getSiguiente();
                    }
                } else {
                    ant = aux;
                    aux = aux.getSiguiente();
                }
            }
        }
    }
    /**
    * Elimina la ultima carta de la baraja
    * @param  {Carta} EL nodo que se desea eliminar de la Lista
    */
    pop() {
        if (!this.getCabeza()) return false;
        var apuntador = this.getCola();
        if (this.getLonguitud() === 1) {
            this.setCabeza(null);
            this.setCola(null);
        } else {
            this.setCola(apuntador.anterior);
            this.getCola().setSiguiente(null);
            apuntador.setAnterior(null);
        }
        this.longuitud--;
    }
      /**
    * Eliminar la primer carta de la baraja
    * @param  {Carta} EL nodo que se desea eliminae de primero a la Lista
    */
   shift() {
    if (this.getLonguitud() === 0) return false;
    var viejaCabeza = this.getCabeza();
    if (this.getLonguitud() === 1) {
        this.setCabeza(null);
        this.setCola(null);
    } else {
        this.setCabeza(viejaCabeza.getSiguiente());
        this.getCabeza().setSiguiente(null);
        viejaCabeza.setSiguiente(null);
    }
    this.longuitud--;
}
 
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    /**
    * Añade de primera una carta a la baraja
    * @param  {Carta} EL nodo que se desea añadir de primero a la Lista
    */
   unshift(carta) {
    if (this.getLonguitud() === 0) {
        this.setCabeza(carta);
        this.setCole(carta);
    } else {
        this.getCabeza().setSiguiente(carta);
        carta.setSiguiente(this.getCabeza());
        this.setCabeza(carta);
    }
    this.longuitud++;
}
 /**
   * Ordena las cartas existentes en la baraja por colores
   * en el siguiente orden: Negro, amarillo, azul, rojo, verde
   * @return  {Baraja} la lista de cartas ordenada por colores
   */
    ordenarPorColor() {
        var apuntador = this.getCabeza();
        var color;
        var masoColor = new Baraja();
        while (apuntador.getSiguiente() != null) {
            color = apuntador.getColor();
            console.log(color);
            if (color == "negro") {
                masoColor.insertarCarta(apuntador);
            } else {
                if (color == "amarillo") {
                    masoColor.insertarCarta(apuntador);
                } else {
                    if (color == "azul") {
                        masoColor.insertarCarta(apuntador);
                    } else {
                        if (color == "rojo") {
                            masoColor.insertarCarta(apuntador);
                        } else {
                            if (color == "verde") {
                                masoColor.insertarCarta(apuntador);
                            }
                        }
                    }
                }
            }
            apuntador = apuntador.getSiguiente();
        }
        this.setMaso(masoColor);
        return this.maso;
    }
  /**
   * Recorre todas las cartas de la baraja y les saca el color y crea un listado con los colores
   * @return  {Baraja} listado de colores de cartas existentes en la baraja
   */
    obtenerColoresBaraja() {
        var apuntador = this.getCabeza();
        var baraja = [];
        while (apuntador != null) {
            baraja.push(apuntador.getColor());
            apuntador = apuntador.getSiguiente();
        }
        return baraja;
    }
    obtenerImagenesBaraja() {
        var apuntador = this.getCabeza();
        var baraja = [];
        while (apuntador != null) {
            baraja.push(apuntador.getImagen());
            apuntador = apuntador.getSiguiente();
        }
        return baraja;
    }
      /**
   * Ordena las cartas existentes de manera ascentende
   * de la siguiente manera: cartas especiales, cartas comunes en orden numérico ascendente
   * @return  {Baraja} la lista de cartas ordenada de manera ascendente
   */
    ordenarAscendente() {
        var baraja = new Baraja();
        var apuntador = this.getCabeza();
        while (apuntador.getSiguiente() != null) {
            if (apuntador.getColor() == "negro") {
                baraja.insertarCarta(apuntador);
            } else {
                if (apuntador.instanceOf(Carta)) { }
            }
        }
    }
      /**
   * Ordena las cartas existentes de manera descendente
   * de la siguiente manera: cartas especiales, cartas comunes en orden numérico descendente
   * @return  {Baraja} la lista de cartas ordenada de manera descendente
   */
    ordenarDescendente() { }
}
class Partida {
    /**
   * Propiedad que indica el listado de jugadores que tiene una partida
   * @type {<Jugador>()}
   */
    jugadores;
      /**
   * Propiedad que indica el listado de cartas que hay por ser asignadas a jugadores
   * @type {Baraja}
   */
  monton;
  /** 
   
    * Propiedad que indica el listado de cartas que han sido jugadas por todos los jugadores
    * @type {Baraja}
    */
    pila;
     /** @constructor */
    turno;
    constructor() {
        this.jugadores = [];
        this.monton = [];
        this.pila = new Baraja();
        this.turno = null;
    }
    /**
    * Adiciona un jugador de el listado de jugadores
    * @param  {string} el nombre del nuevo jugador que se adicionará
    */
    ingresarJugador(nombre) {
        var jugador = new Jugador(nombre);
        this.jugadores.push(jugador);
    }
       /**
  * Crea un listado de cartas (108 en total) en las que se incluyen
  * cartas comunes y cartas especiales. Se asignan todas a el montón de la partida
  */
    crearBaraja() {
        var barajaComun = this.crearCartasComunes();
        var barajaEspecial = this.crearCartasEspeciales();
        var barajaUnida = barajaComun.concat(barajaEspecial);
        this.setMonton(barajaUnida);
    }
      /**
  * Ordena las cartas existentes de manera ascentende
  * de la siguiente manera: cartas especiales, cartas comunes en orden numérico ascendente
  * @return  {Baraja} la lista de cartas ordenada de manera ascendente
  */
    crearCartasComunes() {
        var cartas = [];
        var color;
        var imagen;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                //Amarillo
                if (i == 0) {
                    var color = "amarillo";
                    if (j == 0) {
                        imagen = "CeroAmarillo";
                    }
                    if (j == 1) {
                        imagen = "UnoAmarillo";
                    }
                    if (j == 2) {
                        imagen = "DosAmarillo";
                    }
                    if (j == 3) {
                        imagen = "TresAmarillo";
                    }
                    if (j == 4) {
                        imagen = "CuatroAmarillo";
                    }
                    if (j == 5) {
                        imagen = "CincoAmarillo";
                    }
                    if (j == 6) {
                        imagen = "SeisAmarillo";
                    }
                    if (j == 7) {
                        imagen = "SieteAmarillo";
                    }
                    if (j == 8) {
                        imagen = "OchoAmarillo";
                    }
                    if (j == 9) {
                        imagen = "NueveAmarillo";
                    }
                }
                //Azul
                if (i == 1) {
                    var color = "azul";
                    if (j == 0) {
                        imagen = "CeroAzul";
                    }
                    if (j == 1) {
                        imagen = "UnoAzul";
                    }
                    if (j == 2) {
                        imagen = "DosAzul";
                    }
                    if (j == 3) {
                        imagen = "TresAzul";
                    }
                    if (j == 4) {
                        imagen = "CuatroAzul";
                    }
                    if (j == 5) {
                        imagen = "CincoAzul";
                    }
                    if (j == 6) {
                        imagen = "SeisAzul";
                    }
                    if (j == 7) {
                        imagen = "SieteAzul";
                    }
                    if (j == 8) {
                        imagen = "OchoAzul";
                    }
                    if (j == 9) {
                        imagen = "NueveAzul";
                    }
                }
                //Rojo
                if (i == 2) {
                    var color = "rojo";
                    if (j == 0) {
                        imagen = "CeroRojo";
                    }
                    if (j == 1) {
                        imagen = "UnoRojo";
                    }
                    if (j == 2) {
                        imagen = "DosRojo";
                    }
                    if (j == 3) {
                        imagen = "TresRojo";
                    }
                    if (j == 4) {
                        imagen = "CuatroRojo";
                    }
                    if (j == 5) {
                        imagen = "CincoRojo";
                    }
                    if (j == 6) {
                        imagen = "SeisRojo";
                    }
                    if (j == 7) {
                        imagen = "SieteRojo";
                    }
                    if (j == 8) {
                        imagen = "OchoRojo";
                    }
                    if (j == 9) {
                        imagen = "NueveRojo";
                    }
                }
                //Verde
                if (i == 3) {
                    var color = "verde";
                    if (j == 0) {
                        imagen = "CeroVerde";
                    }
                    if (j == 1) {
                        imagen = "UnoVerde";
                    }
                    if (j == 2) {
                        imagen = "DosVerde";
                    }
                    if (j == 3) {
                        imagen = "TresVerde";
                    }
                    if (j == 4) {
                        imagen = "CuatroVerde";
                    }
                    if (j == 5) {
                        imagen = "CincoVerde";
                    }
                    if (j == 6) {
                        imagen = "SeisVerde";
                    }
                    if (j == 7) {
                        imagen = "SieteVerde";
                    }
                    if (j == 8) {
                        imagen = "OchoVerde";
                    }
                    if (j == 9) {
                        imagen = "NueveVerde";
                    }
                }
                //Creacion de cartas
                var carta1 = new CartaComun(imagen, color, j);
                cartas.push(carta1);
                if (j !== 0) {
                    var carta2 = new CartaComun(imagen, color, j);
                    cartas.push(carta2);
                }
            }
        }
        return cartas;
    }
    crearCartasEspeciales() {
        var cartas = [];
        var colores = this.crearCartasEspecialesColores();
        var sinColores = this.crearRobaCuatroYComodin();
        var unidos = colores.concat(sinColores);
        return unidos;

    }
    crearCartasEspecialesColores() {
        var cartas = [];
        var color;
        var imagen1;
        var imagen2;
        var imagen3;
        for (let i = 0; i < 4; i++) {
            //Amarillo
            if (i == 0) {
                color = "amarillo";
                imagen1 = "RobaDosAmarillo";
                imagen2 = "BloqueoAmarillo";
                imagen3 = "ReversaAmarillo";
            }
            //Azul
            if (i == 1) {
                color = "azul";
                imagen1 = "RobaDosAzul";
                imagen2 = "BloqueoAzul";
                imagen3 = "ReversaAzul";
            }
            //Rojo
            if (i == 2) {
                color = "rojo";
                imagen1 = "RobaDosRojo";
                imagen2 = "BloqueoRojo";
                imagen3 = "ReversaRojo";
            }
            //Verde
            if (i == 3) {
                color = "verde";
                imagen1 = "RobaDosVerde";
                imagen2 = "BloqueoVerde";
                imagen3 = "ReversaVerde";
            }
            //Creacion de cartas
            var carta1 = new CartaEspecial(imagen1, color);
            var carta2 = new CartaEspecial(imagen1, color);
            var carta3 = new CartaEspecial(imagen2, color);
            var carta4 = new CartaEspecial(imagen2, color);
            var carta5 = new CartaEspecial(imagen3, color);
            var carta6 = new CartaEspecial(imagen3, color);
            cartas.push(carta1);
            cartas.push(carta2);
            cartas.push(carta3);
            cartas.push(carta4);
            cartas.push(carta5);
            cartas.push(carta6);
        }
        return cartas;
    }
    crearRobaCuatroYComodin() {
        var cartas = [];
        var color;
        var imagen;
        for (let i = 0; i < 4; i++) {
            var carta1 = new CartaEspecial("RobaCuatro", "negro");
            var carta2 = new CartaEspecial("Comodin", "negro");
            cartas.push(carta1);
            cartas.push(carta2);
        }
        return cartas;
    }
    ingresarJugador(nombre) {
        var jugador = new Jugador(nombre);
        this.jugadores.push(jugador);
    }
    getMonton() {
        return this.monton;
    }
    setMonton(monton) {
        this.monton = monton;
    }
    getJugadores() {
        return this.jugadores;
    }
    getPila() {
        return this.pila;
    }
    setPila(pila) {
        this.pila = pila;
    }
    revolverCartas() {
        var monton = this.getMonton().sort(function () { return Math.random() - 0.5 });
    }
    crearMaso() {
        var maso = new Baraja();
        for (let i = 0; i < 7; i++) {
            var carta = this.monton[i];
            maso.insertarCarta(carta);
            this.monton.splice(i, 1);
        }
        return maso;
    }
    repartirMasoJugadores() {
        for (let i = 0; i < this.jugadores.length; i++) {
            var jugador = this.jugadores[i];
            jugador.setMaso(this.crearMaso());
        }
    }
    inciarJuego() {
        var baraja = this.getMonton();
        this.pila.insertarCarta(baraja[0]);
        this.turno = this.jugadores[0];
    }
}
/////////// lógica de presentacion /////////
/**
* Método para asignar el nombre de los jugadores en pantalla
* @param name indica el nombre del jugador
* @param ubication la etiqueta de donde se agrega el nombre
*/
function nameAsignation(name, ubication) {
    $(ubication).append("<p>" + name + "</p>");
}
function extractNameForIdOrName(idorname) {
    let name = $(idorname).val();

    if (name.length > 0) {
        return name;
    }
    else {
        alert("Intenta ingresar el nombre del jugador " + idorname)
        return false;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawMasoPlayer(player, id){
   var maso=player.obtenerImagenesBaraja();
   for (let index = 0; index < maso.length; index++) {
       const img = maso[index];
       $(id).append(" <img src=" +"images/imagesUno/"+img+".png"+ " width=120px height=120px id=masoImg >");
   }
   
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawPila(pila,id){
 var img = pila.getCola().getImagen();
 console.log(id);
 $(id).html(" <img src=" +"images/imagesUno/"+img+".png"+ " width=120px height=120px id=pilaImg  >");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ordenarMaso(indicePlayer, jugador){
    
        var option= $(".mySelect"+(indicePlayer)).val();
        if(option=="Ascendente"){
            return  jugador.ordenarMasoNumeroAscendente();
        }
        if(option=="Descendente"){
            return jugador.ordenarMasoDescendente();
        }
        if(option=="Color"){
            return jugador.ordenarMasoColor();
        }
        
     
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
$('.start').hide();
var partida;
var jugadores;
$('#botonUno').on("click", function(){
    
    if(extractNameForIdOrName('#playerName1') != false & extractNameForIdOrName('#playerName2')!= false){
    var name1=extractNameForIdOrName('#playerName1');
    var name2=extractNameForIdOrName('#playerName2');
    $("body").css({ 'background-size' : '100%','display': 'flex','min-height': '100vh'});
    $('#buttonStart').hide();
    $("#datos").hide();
   
        $('.start').show();
    
  
    partida = new Partida();
    partida.ingresarJugador(name1);
    partida.ingresarJugador(name2);

    partida.crearBaraja();
    console.log(partida.getMonton());
    partida.revolverCartas();
    console.log(partida.getMonton());
    partida.repartirMasoJugadores();
    console.log(partida.getMonton());
    console.log(partida.getJugadores());
     jugadores = partida.getJugadores();
    for (let i = 0; i < jugadores.length; i++) {
        var jugador = jugadores[i];
        nameAsignation(jugador.getName(),("#title"+(i+1)));
        drawMasoPlayer(jugador, ("#title"+(i+1)));
        
        
        //console.log(jugador.ordenarMasoColor());
        //console.log(jugador.getMaso());
    }
    console.log(partida.getMonton());
   
    partida.inciarJuego();
    drawPila(partida.getPila(),'#text');
}
//console.log(partida.getPila().buscarCarta("UnoAmarillo"));
})

$(".ordenar").on("click", function(){
  ordenar= $(this).attr("value");
  console.log(ordenar);
     jugador=jugadores[ordenar]; 
    jugador.setMaso(ordenarMaso(ordenar,jugador)); 
    drawMasoPlayer(jugador, ("#title"+(parseInt(ordenar)+1)));
});
});
