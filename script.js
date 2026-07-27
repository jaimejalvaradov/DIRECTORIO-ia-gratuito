// ============================================
// Directorio de IAs Gratuitas
// Proyecto Módulo 3 - Fundamentos de JavaScript
// ============================================

// Array de objetos: cada IA tiene nombre, para qué sirve, categoría y su URL
let listaIAs = [
  { nombre: "ChatGPT",           uso: "Chat general y redacción",         categoria: "Texto",  url: "https://chat.openai.com" },
  { nombre: "Claude",            uso: "Escritura y programación",         categoria: "Texto",  url: "https://claude.ai" },
  { nombre: "Gemini",            uso: "Asistente integrado con Google",   categoria: "Texto",  url: "https://gemini.google.com" },
  { nombre: "Perplexity",        uso: "Búsqueda con fuentes verificadas", categoria: "Texto",  url: "https://www.perplexity.ai" },
  { nombre: "DeepSeek",          uso: "Chat y razonamiento de código",    categoria: "Texto",  url: "https://chat.deepseek.com" },
  { nombre: "Copilot",           uso: "Asistente de Microsoft",           categoria: "Texto",  url: "https://copilot.microsoft.com" },
  { nombre: "GitHub Copilot",    uso: "Autocompletado de código",         categoria: "Código", url: "https://github.com/features/copilot" },
  { nombre: "Leonardo.Ai",       uso: "Generación de imágenes",           categoria: "Imagen", url: "https://leonardo.ai" },
  { nombre: "Bing Image Creator",uso: "Generación de imágenes",           categoria: "Imagen", url: "https://www.bing.com/images/create" },
  { nombre: "NotebookLM",        uso: "Resumir y estudiar documentos",    categoria: "Estudio",url: "https://notebooklm.google.com" },
  { nombre: "Suno",              uso: "Crear canciones con IA",           categoria: "Audio",  url: "https://suno.com" }
];

// Muestra el menú y devuelve el texto que ve el usuario en el prompt
function mostrarMenu() {
  let texto = "========= DIRECTORIO DE IAs =========\n";
  for (let i = 0; i < listaIAs.length; i++) {
    texto += `${i + 1}. ${listaIAs[i].nombre} (${listaIAs[i].categoria}) - ${listaIAs[i].uso}\n`;
  }
  texto += "======================================\n";
  texto += "0. Filtrar por categoría\n";
  texto += "S. Salir\n";
  texto += "Elegí un número para abrir esa IA:";
  return texto;
}

// Abre la IA elegida en una pestaña nueva
function abrirIA(indice) {
  let ia = listaIAs[indice];
  console.log(`🚀 Abriendo ${ia.nombre} (${ia.uso})...`);
  window.open(ia.url, "_blank");
}

// Filtra la lista por categoría y la muestra en consola
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

// Función principal: arranca al hacer clic en el botón
function iniciarPrograma() {
  console.log("🤖 Bienvenido al Directorio de IAs Gratuitas");

  let opcion = "";
  while (opcion.toUpperCase() !== "S") {
    opcion = prompt(mostrarMenu());

    if (opcion === null) {
      console.log("👋 Programa cancelado por el usuario.");
      break;
    }

    if (opcion.toUpperCase() === "S") {
      console.log("👋 ¡Hasta luego!");
      break;
    }

    if (opcion === "0") {
      let cat = prompt("¿Qué categoría? (Texto, Imagen, Código, Estudio, Audio)");
      filtrarPorCategoria(cat);
      continue;
    }

    let numero = Number(opcion);
    if (numero >= 1 && numero <= listaIAs.length) {
      abrirIA(numero - 1);
    } else {
      console.log("⚠️ Opción no válida, intentá de nuevo.");
    }
  }
}
