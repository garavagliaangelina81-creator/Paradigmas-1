const prompt = require('prompt-sync')({ sigint: true });
//index recorre el array en cuantos valores tenga dentro
const listaTareas = [];

function crearTarea(){
    let continuarCrearTarea;
    do{ 
    const titulo = prompt('Ingrese el título de la tarea: ');
    
    if (!titulo || titulo.trim() === '') {
        console.log('El título no puede estar vacío. Por favor, ingrese un título válido.');
        return;
    }

    if (titulo.length > 100){
        console.log('El título no puede exceder los 100 caracteres. Por favor, ingrese un título más corto.');  
        return;
    }

    let descripcion = prompt('Ingrese la descripción de la tarea (opcional): ');

    if (!descripcion || descripcion.trim() === ''){
        descripcion = 'Sin descripción';
    }

    if (descripcion.length > 500){
        console.log('La descripción no puede exceder los 500 caracteres. Por favor, ingrese una descripción más corta.');  
        return;
    }

    let fechaCreacion = new Date() .toISOString().split('T')[0]; // Formato YYYY-MM-DD
    let fechaDeEdicion = 'No editada';
    let vencimiento = prompt('Ingrese la fecha de vencimiento (DD/MM/YYYY) (opcional): ');
    
    if (!vencimiento || vencimiento.trim() === ''){
        vencimiento = 'No asignada';
    }
    
    let dificultad = prompt('Ingrese la dificultad (1 Facil ⭐ - 2 Media ⭐⭐ - 3 Alta ⭐⭐⭐) (por defecto Facil ⭐): ');

    if (!dificultad || dificultad.trim() === ''){
        dificultad = 1;
    }
    
    switch (dificultad) {
        case '1':
            dificultad = 'facil';
            break;
        case '2':
            dificultad = 'intermedia';
            break;
        case '3':
            dificultad = 'dificil';
            break;
        default:
            dificultad = 'facil';
    }
    
    let estado = 'pendiente';

    const tarea = {
        titulo,
        descripcion,
        fechaCreacion,
        vencimiento,
        dificultad,
        estado,
        fechaDeEdicion
    }

    listaTareas.push(tarea);

    continuarCrearTarea = prompt("Desea continuar? [1] SI [2] NO: ");

    } while(continuarCrearTarea === '1'); //prompt recolecta solo strings
    main();
}

function buscarTareas(){
    console.log ("Como queres filtrar:");
    console.log ("[1] Buscar tareas por estado");
    console.log ("[2] Buscar tareas por dificultad");
    console.log ("[3] Buscar tareas por titulo");
    console.log ("[0] Salir al menu principal");
    let opcionBusqueda = prompt("Selecciona una opcion que quieras hacer con tus tareas: ");
    switch(opcionBusqueda){
        case '1':
            buscarTareasPorEstado();
            break;
        case '2':
            buscarTareasPorDificultad();
            break;
        case '3':
            buscarTareasPorTitulo();
            break;
        case '0':
            main();
            break;
        default:
            console.log("Ingresaste una opcion que no es valida, por favor revisala");
            buscarTareas();
            break;
    }


function buscarTareasPorEstado(){
    console.log("Que queres buscar?:");
    console.log("[1] Tareas pendientes");
    console.log("[2] Tareas en curso");
    console.log("[3] Tareas terminadas");
    console.log("[4] Tareas canceladas");
    console.log("[0] Regresar al menu de busqueda");
    let opcionBusquedaEstado = prompt("Selecciona una opcion que quieras hacer con tus tareas: ");
    switch(opcionBusquedaEstado){
        case '1':
            tareasPendientes();
            break;
        case '2':
            tareasEnCurso();
            break;
        case '3':
            tareasTerminadas();
            break;
        case '4':
            tareasCanceladas();
            break;
        case '0':
            buscarTareas();
            break;
        default:
            console.log("Ingresaste una opcion que no es valida, por favor revisala");
            return;
            break;
    }
    
    function tareasPendientes () {
        const pendientes = [];
        for (let i = 0; i < listaTareas.length; i++) {
            if (listaTareas[i].estado === "pendiente") {
                pendientes.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaEstado(pendientes, "pendientes");
    }

    function tareasEnCurso () {
        const enCurso = [];
        for (let i = 0; i < listaTareas.length; i++){
            if (listaTareas[i].estado === "en curso"){
                enCurso.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaEstado(enCurso, "en curso");
    }

    function tareasTerminadas () {
        const terminadas = [];
        for (let i = 0; i < listaTareas.length; i++){
            if (listaTareas[i].estado === "terminada"){
                terminadas.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaEstado(terminadas, "terminadas");
    }

    function tareasCanceladas (){
        const canceladas = [];
        for (let i = 0; i < listaTareas.length; i++){
            if (listaTareas[i].estado === "cancelada"){
                canceladas.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaEstado(canceladas, "canceladas");
    }

    function mostrarResultadosBusquedaEstado(tareas, estado) {

        if (tareas.length === 0) {
            console.log(`📭 No hay tareas ${estado}.`);
            return;
        }

        console.log(`\n📋 Tareas ${estado}:`);
        tareas.forEach((tarea, index) => {
            console.log(`\n#${index + 1}`);
            console.log(`Título: ${tarea.titulo}`);
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Vencimiento: ${tarea.vencimiento}`);
            console.log(`Dificultad: ${tarea.dificultad}`);
            console.log(`Estado: ${tarea.estado}`);
            console.log("-------------------------");
        });
        buscarTareas();
    }
}

function buscarTareasPorDificultad () {
    console.log("Que queres buscar?:");
    console.log("[1] Tareas Faciles");
    console.log("[2] Tareas Intermedias");
    console.log("[3] Tareas Dificiles");
    console.log("[0] Regresar al menu de busqueda");
    let opcionBusquedaDificultad = prompt("Selecciona una opcion que quieras hacer con tus tareas: ");
    switch(opcionBusquedaDificultad){
        case '1':
            tareasFaciles();
            break;
        case '2':
            tareasIntermedias();
            break;
        case '3':
            tareasDificiles();
            break;
        case '0':
            buscarTareas();
            break;
        default:
            console.log("Ingresaste una opcion que no es valida, por favor revisala");
            return;
            break;
    }


    function tareasFaciles () {
        const faciles = [];
        for (let i = 0; i < listaTareas.length; i++){
            if (listaTareas[i].dificultad === "facil"){
                faciles.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaDificultad(faciles, "faciles");
    }

    function tareasIntermedias (){
        const intermedias = [];
        for (let i = 0; i < listaTareas.length; i++){
            if (listaTareas[i].dificultad === "intermedia"){
                intermedias.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaDificultad(intermedias, "intermedias");
    }

    function tareasDificiles () {
        const dificiles = [];
        for (let i = 0; i < listaTareas.length; i++){
            if (listaTareas[i].dificultad === "dificil"){
                dificiles.push(listaTareas[i]);
            }
        }
        mostrarResultadosBusquedaDificultad(dificiles, "dificil");
    }

    function mostrarResultadosBusquedaDificultad (tareas, dificultad) {
        if (tareas.length === 0){
            console.log(`📭 No hay tareas ${dificultad}.`);
            mostrarResultadosBusquedaDificultad();
        }

        console.log(`\n📋 Tareas ${dificultad}:`);
        tareas.forEach((tarea, index) => {
            console.log(`\n#${index + 1}`);
            console.log(`Título: ${tarea.titulo}`);
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Vencimiento: ${tarea.vencimiento}`);
            console.log(`Dificultad: ${tarea.dificultad}`);
            console.log(`Estado: ${tarea.estado}`);
            console.log("-------------------------");
        });
        buscarTareas();
    }
}

function buscarTareasPorTitulo(){
    const tituloBuscado = prompt("Ingresa parte o la totalidad del titulo que quieres buscar: ");
    
    if (!tituloBuscado || tituloBuscado.trim() === "") {
        console.log("⚠️ No ingresaste un título válido.");
        return;
    }

    const resultados = [];

    for (const tarea of listaTareas){
        if (tarea.titulo.toLowerCase().includes(tituloBuscado.toLowerCase())){
            resultados.push(tarea);
        }
    }

    if (resultados.length === 0) {
        console.log(`📭 No se encontraron tareas con título que contenga "${tituloBuscado}".`);
        return;
    }

    console.log(`\n📋 Resultados de búsqueda para "${tituloBuscado}":`);
    resultados.forEach((tarea, index) => {
        console.log(`\n#${index + 1}`);
        console.log(`Título: ${tarea.titulo}`);
        console.log(`Descripción: ${tarea.descripcion}`);
        console.log(`Vencimiento: ${tarea.vencimiento}`);
        console.log(`Dificultad: ${tarea.dificultad}`);
        console.log(`Estado: ${tarea.estado}`);
        console.log("-------------------------");
    });
    buscarTareas();
}

}

function mostrarTareas() {
    if (listaTareas.length === 0) {
        console.log("📮 No hay tareas cargadas");
        return;
    }
    
    console.log("Fecha de creacion ascendente");
    console.log("📋 Lista de tareas:");
    listaTareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] ${tarea.titulo}`);
    });

    const opcion = prompt("Ingrese el número de la tarea que quiere detallar (0 para regresar): ");

    if (opcion === '0') {
        main();
        return;
    }
    
    const seleccion = parseInt(opcion);
    if (isNaN(seleccion) || seleccion < 1 || seleccion > listaTareas.length) {
        console.log("⚠️ Selección inválida.");
        mostrarTareas(); 
        return;
    }

    const tarea = listaTareas[seleccion - 1];
    mostrarDetalleTarea(tarea);


function mostrarDetalleTarea(tarea) {

    console.log("\n🔎 Detalle de la tarea:");
    console.log('-----------------------------');   
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Fecha de creación: ${tarea.fechaCreacion}`);
    console.log(`Vencimiento: ${tarea.vencimiento}`);
    
    let dificultadMostrar = "";
    switch (tarea.dificultad) {
        case 'facil': dificultadMostrar = '⭐'; break;
        case 'intermedia': dificultadMostrar = '⭐⭐'; break;
        case 'dificil': dificultadMostrar = '⭐⭐⭐'; break;
    }

    console.log(`Dificultad: ${dificultadMostrar}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Última edición: ${tarea.fechaDeEdicion}`);
    console.log('-----------------------------');   
    console.log("\nOpciones:");
    console.log("[1] Modificar esta tarea");
    console.log("[0] Volver al menú principal");

    const opcionmostrardetalleTarea = prompt("Seleccione una opción: ");
    switch (opcionmostrardetalleTarea) {
        case '1':
            modTarea(tarea); 
            break;
        case '0':
            main();
            break;
        default:
            console.log("⚠️ Opción inválida");
            main();
            break;
    }
}


function modTarea(tarea) {
    let salir = false;
    while (!salir) {
        console.log("\n--- Editar Tarea ---");
        console.log("[1] Editar título");
        console.log("[2] Editar descripción");
        console.log("[3] Editar estado");
        console.log("[4] Editar fecha de vencimiento");
        console.log("[0] Volver");

        let opcionModTarea = prompt("Elige qué parte quieres editar: ");

        switch (opcionModTarea) {
            case '1':
                tarea.titulo = prompt("Nuevo título: ");
                console.log("✅ Título actualizado.");
                break;
            case '2':
                tarea.descripcion = prompt("Nueva descripción: ");
                console.log("✅ Descripción actualizada.");
                break;
            case '3':
                tarea.estado = prompt("Nuevo estado (pendiente, en curso, realizada, cancelada): ");
                console.log("✅ Estado actualizado.");
                break;
            case '4':
                tarea.vencimiento = prompt("Nueva fecha de vencimiento (YYYY-MM-DD): ");
                console.log("✅ Fecha de vencimiento actualizada.");
                break;
            case '0':
                tarea.fechaDeEdicion = new Date().toISOString().split('T')[0];
                salir = true;
                main();
                break; 
            default:
                console.log("Opción inválida.");
                break;
        }
    }
}
}

function main (){
    console.log("Bienvenido a tu gestor de tareas");
    console.log("[1] Crear una tarea");
    console.log("[2] Mostrar tus tareas creadas");
    console.log("[3] Busqueda de tareas");
    console.log("[0] Salir");
    let opcion = prompt("Selecciona una opcion que quieras hacer con tus tareas: ");
    switch(opcion){
        case '1':
            crearTarea();
            break;
        case '2':
            mostrarTareas();
            break;
        case '3':
            buscarTareas();
            break;
        case '0':
            console.log("Gracias por usar el gestor de tareas, hasta luego!");
            process.exit;
            break;
        default:
            console.log("Ingresaste una opcion que no es valida, por favor revisala");
            return;
            break;
    }

}

main();