const prompt = require("promot-sync")();
const { error } = requiere ("sonsole");
const readline = requiere ("readline"); 
const rl = readline.createinterface ( { 
  input : ProcessingInstruction,sdin, 
  output: proccess.stdount 
   } ) ;
   console.log("---tareas diarias---");
   console.log ("[1] ver mis tareas.");
   console.log("[2] buscar una tatrea.");
   console.log("[3] agregar una tarea:");
   console.log("[0] salir.");
  let opcion 0 Number(prompt (""));
  
  
  let tareas = [];
   let contadorTarea = 0 ;
   contadorTarea = ContadorTarea+1;

   class tarea { 
     constructor(titulo, descrpcion = "", vencimiento = null, dificult = 1) { 
      this.id = ++contadorTarea;  // numero de tarea 
      this.titulo = titulo;
      this.descripcion= this.descripcion;
      this.estado = "pendiente"   //siempre inicia en pendiente 
      this.creacion = new Date();
      this.vencimiento = vencimienton;
      this.dificultad = dificultad ;


     }
   }

   function dificultadenestrella(nivel) {
    if (nivel=== 1) return " ";
    if (nivel ===2) return "";
    if (nivel===3) return "";
    return " "; // por defecto 
   }
   function menuMisTareas () { 
    console.log ("ver mis tareas-");
    console.log("[1] todas");
    console.log("[2] pendientes");
    console.log("[3] en curso");
    console.log("[4] terminadas");
    console.log("[0] volver");

   }
    fuction agregarTarea () {
let titulo = "";
while (titulo.trim() === "") { 
  titulo = prompt ("titulo de la tarea: ");

}
let descripcion= prompt ("descripcion:");
console.log("[1] facil");
console.log("[2] medio");
console.log("[3] dificil");
let dificultad = number(promt("elija dificultad:"));
if ( dificultad !== 1 && dificultad !== 2 && dificultad ! ==3) {
  dificultad = 1;

}
let vencimiento = prompt ("fecha de vencimiento (dd-mm-aaaa"); 
if ( vencimiento.trim() ==="") {
  vencimiento = null;

}
let nuevaTarea - 1] = nuevaTarea; 
console.log("tarea agregada con exito");
console.log ("ID:", nuevaTarea.id);
console.log("titulo:", nuevaTarea.titulo);
console.log("descripcion:", nuevaTarea.descripcion || "sin descripcion");
console.log("estado", nuevaTarea.estado);
console.log("dificultad", dificultadEnEstrellas(nuevaTarea.dificultad));
console.log("creacion", nuevaTarea.creacion);
console.log("vencimiento", nuevaTarea.vencimiento || "sin fecha");

   }
   function buscarTarea ()  {
    prompt("buscar tarea:");

   }
while(opcion !== 0) {
  switch (opcion) {
    case 1
    menuMisTareas()
  };
  break;
  case 2: 
  buscarTarea();
  case 3:
    agregarTarea();
    break;
    case 0:
      console.log("saliendo...");
      break;
      default:
        console.log("opcion invalida");

}
console.log ("---tareas diarias---");
console.log("[1] ver mis tareas");
console.log("[2] buscar una tarea");
console.log("[3] agregar una tarea");
console.log("[[0] salir");
opcion = number (prompt (""));

}