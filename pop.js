class Nodo{
    constructor(dato){
      this.dato=dato;
      this.previo=null;
    }
  }
    
  class Pila{
    constructor(nodo=null){
      this.cima=null;
    }
    
    push(dato){
      let nodo=new Nodo(dato);
      nodo.previo=this.cima;
      this.cima=nodo;
    }
  
    pop() {
      const dato = this.cima.dato;
      this.cima = this.cima.previo;
      return dato;
    }
  }

  
let pilaApellidos=new Pila();

pilaApellidos.push("Hernandez");
pilaApellidos.push("Lopez");
pilaApellidos.push("Gonzalez");

pilaApellidos.pop(); 

console.log(pilaApellidos);