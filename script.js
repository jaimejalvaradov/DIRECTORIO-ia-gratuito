// ============================================
// Directorio de IAs Gratuitas
// Proyecto Módulo 3 - Fundamentos de JavaScript
// ============================================

// Array de objetos: cada IA tiene nombre, uso, categoría, URL y precio premium referencial (USD/mes)
let listaIAs = [
  { nombre: "ChatGPT",            uso: "Chat general y redacción",         categoria: "Texto",  url: "https://chat.openai.com",              precioPremium: 20 },
  { nombre: "Claude",             uso: "Escritura y programación",         categoria: "Texto",  url: "https://claude.ai",                    precioPremium: 20 },
  { nombre: "Gemini",             uso: "Asistente integrado con Google",   categoria: "Texto",  url: "https://gemini.google.com",            precioPremium: 19.99 },
  { nombre: "Perplexity",         uso: "Búsqueda con fuentes verificadas", categoria: "Texto",  url: "https://www.perplexity.ai",            precioPremium: 20 },
  { nombre: "DeepSeek",           uso: "Chat y razonamiento de código",    categoria: "Texto",  url: "https://chat.deepseek.com",            precioPremium: 0 },
  { nombre: "Copilot",            uso: "Asistente de Microsoft",           categoria: "Texto",  url: "https://copilot.microsoft.com",        precioPremium: 20 },
  { nombre: "GitHub Copilot",     uso: "Autocompletado de código",         categoria: "Código", url: "https://github.com/features/copilot",  precioPremium: 10 },
  { nombre: "Leonardo.Ai",        uso: "Generación de imágenes",           categoria: "Imagen", url: "https://leonardo.ai",                  precioPremium: 12 },
  { nombre: "Bing Image Creator", uso: "Generación de imágenes",           categoria: "Imagen", url: "https://www.bing.com/images/create",   precioPremium: 0 },
  { nombre: "NotebookLM",         uso: "Resumir y estudiar documentos",    categoria: "Estudio",url: "https://notebooklm.google.com",        precioPremium: 19.99 },
  { nombre: "Suno",               uso: "Crear canciones con IA",           categoria: "Audio",  url: "https://suno.com",                     precioPremium: 10 }
];

// Arreglo separado: acá se van guardando los índices que el usuario va seleccionando
let seleccion = [];

// Muestra el menú principal
function mostrarMenu() {
  let texto = "========= DIRECTORIO DE IAs =========\n";
  for (let i = 0; i < listaIAs.length; i++) {
    texto += `${i + 1}. ${listaIAs[i].nombre} (${listaIAs[i].categoria}) - ${listaIAs[i].uso}\n`;
  }
  texto += "======================================\n";
  texto += "A. Agregar IA a la selección\n";
  texto += "Q. Quitar IA de la selección\n";
  texto += "V. Ver selección actual\n";
  texto += "O. Abrir todas las seleccionadas\n";
  texto += "0. Filtrar por categoría\n";
  texto += "S. Salir\n";
  texto += "Elegí una opción:";
  return texto;
}

// Agrega un índice al arreglo de selección (evita duplicados)
function agregarASeleccion(indice) {
  if (seleccion.includes(indice)) {
    console.log(`⚠️ "${listaIAs[indice].nombre}" ya estaba en tu selección.`);
    return;
  }
  seleccion.push(indice);
  console.log(`✅ "${listaIAs[indice].nombre}" agregada a la selección.`);
}

// Quita un índice del arreglo de selección
function quitarDeSeleccion(indice) {
  let posicion = seleccion.indexOf(indice);
  if (posicion === -1) {
    console.log(`❌ "${listaIAs[indice].nombre}" no estaba en tu selección.`);
    return;
  }
  seleccion.splice(posicion, 1);
  console.log(`🗑️ "${listaIAs[indice].nombre}" fue quitada de la selección.`);
}

// Muestra la selección actual y el total acumulado (sumatoria)
function mostrarSeleccion() {
  if (seleccion.length === 0) {
    console.log("🛒 Tu selección está vacía.");
    return;
  }
  console.log("🛒 Selección actual:");
  let total = 0;
  for (let i = 0; i < seleccion.length; i++) {
    let ia = listaIAs[seleccion[i]];
    console.log(`   - ${ia.nombre} (premium: $${ia.precioPremium}/mes)`);
    total += ia.precioPremium;
  }
  console.log(`💰 Costo total premium estimado: $${total.toFixed(2)}/mes\n`);
}

// Abre todas las IAs seleccionadas en pestañas nuevas y muestra el resumen
function abrirSeleccionadas() {
  if (seleccion.length === 0) {
    console.log("⚠️ No hay ninguna IA seleccionada todavía. Usá la opción A para agregar.");
    return;
  }

  let total = 0;
  let nombres = [];

  for (let i = 0; i < seleccion.length; i++) {
    let ia = listaIAs[seleccion[i]];
    let ventana = window.open(ia.url, "_blank");
    if (!ventana) {
      console.log(`⚠️ Se bloqueó la ventana de ${ia.nombre}. Link: ${ia.url}`);
    }
    total += ia.precioPremium;
    nombres.push(ia.nombre);
  }

  console.log(`🚀 Se abrieron ${seleccion.length} pestañas: ${nombres.join(", ")}`);
  console.log(`💰 Costo total premium estimado si las suscribieras todas: $${total.toFixed(2)}/mes\n`);

  seleccion = []; // se vacía la selección después de abrirlas
}

// Filtra la lista por categoría
function filtrarPorCategoria(categoria) {
  console.log(`🔎 IAs en la categoría "${categoria}":`);
  let encontrados = 0;
  for (let i = 0; i < listaIAs.length; i++) {
    if (listaIAs[i].categoria.toLowerCase() === categoria.toLowerCase()) {
      console.log(`- ${listaIAs[i].nombre}: ${listaIAs[i].uso}`);
      encontrados++;
    }
  }
  if (encontrados === 0) {
    console.log("No se encontraron IAs en esa categoría.");
  }
}

// Función principal
function iniciarPrograma() {
  console.log("🤖 Bienvenido al Directorio de IAs Gratuitas");

  let opcion = "";
  while (opcion.toUpperCase() !== "S") {
    opcion = prompt(mostrarMenu());

    if (opcion === null) {
      console.log("👋 Programa cancelado por el usuario.");
      break;
    }

    opcion = opcion.toUpperCase();

    if (opcion === "S") {
      console.log("👋 ¡Hasta luego!");
      break;
    }

    if (opcion === "A" || opcion === "Q") {
      let numero = Number(prompt("¿Número de la IA?"));
      if (numero >= 1 && numero <= listaIAs.length) {
        if (opcion === "A") agregarASeleccion(numero - 1);
        else quitarDeSeleccion(numero - 1);
      } else {
        console.log("⚠️ Número inválido.");
      }
      continue;
    }

    if (opcion === "V") {
      mostrarSeleccion();
      continue;
    }

    if (opcion === "O") {
      abrirSeleccionadas();
      continue;
    }

    if (opcion === "0") {
      let cat = prompt("¿Qué categoría? (Texto, Imagen, Código, Estudio, Audio)");
      filtrarPorCategoria(cat);
      continue;
    }

    console.log("⚠️ Opción no válida, intentá de nuevo.");
  }
}
