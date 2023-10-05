class Nodo{
    constructor(dato){ 
        this.dato = dato;
        this.previo = null;
    }
}


class Pila{
    constructor (nodo = null){
        this.cima = nodo;
    }
    push(dato){
        let nodo = new Nodo(dato)

        //this.cima = nodo;
        //nodo = new Nodo(dato);
        nodo.previo = this.cima;
        this.cima = nodo;
        
    }

    pop(){
        const dato = this.cima.dato;
        this.cima = this.cima.previo;
        return dato;  
    }
    
}

let PilaApellidos = new Pila();

PilaApellidos.push("Hernandez");
PilaApellidos.push("Lopez");
PilaApellidos.push("Gonzalez");



console.log(PilaApellidos)

//8

//class Pila{
//    constructor(nodo=null){
//        this.cima = nodo;
//    }
//}

//Anterior Pila  

//let pilaNumeros = new Pila();

//let nodo = new Nodo(5);

//pilaNumeros.cima = nodo;

//nodo = new Nodo(8);

  //  nodo.previo = pilaNumeros.cima;

//pilaNumeros.cima = nodo;

// Nombres dentro una pila
//Nueva pila

let PilaNombres = new Pila();

let nodo = new Nodo("Arturo")

nodo = new Nodo("Arturo")

PilaNombres.cima = nodo;

//Nuevo Nodo 2

nodo = new Nodo("Pedro");

    nodo.previo = PilaNombres.cima;

PilaNombres.cima = nodo;

//Nuevo Nodo 3

nodo = new Nodo("Pancho");

    nodo.previo = PilaNombres.cima;

PilaNombres.cima = nodo;

//console.log(pilaNumeros);
//console.log(PilaNombres)

//console.log(PilaApellidos.pop());




