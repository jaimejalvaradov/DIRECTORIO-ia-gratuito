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

// Arreglo con los índices seleccionados (nuestro "carrito")
let seleccion = [];

// Dibuja la lista de IAs con casilleros, uno por uno, en la página
function renderizarLista() {
  let contenedor = document.getElementById("lista");
  for (let i = 0; i < listaIAs.length; i++) {
    let ia = listaIAs[i];
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <input type="checkbox" onchange="cambiarSeleccion(${i}, this.checked)">
      <div class="info">
        <div class="nombre">${ia.nombre}</div>
        <div class="detalle">${ia.uso} · ${ia.categoria}</div>
      </div>
      <div class="precio">$${ia.precioPremium}/mes</div>
    `;
    contenedor.appendChild(div);
  }
}

// Se ejecuta cada vez que el usuario marca o desmarca un casillero
function cambiarSeleccion(indice, marcado) {
  if (marcado) {
    seleccion.push(indice);
    console.log(`✅ Agregada: ${listaIAs[indice].nombre}`);
  } else {
    let posicion = seleccion.indexOf(indice);
    seleccion.splice(posicion, 1);
    console.log(`🗑️ Quitada: ${listaIAs[indice].nombre}`);
  }
  actualizarResumen();
}

// Recalcula la suma y actualiza el texto en pantalla
function actualizarResumen() {
  let nombres = [];
  let total = 0;

  for (let i = 0; i < seleccion.length; i++) {
    let ia = listaIAs[seleccion[i]];
    nombres.push(ia.nombre);
    total += ia.precioPremium;
  }

  let textoSeleccion = seleccion.length === 0
    ? "Ninguna IA seleccionada"
    : nombres.join(" - ");

  document.getElementById("seleccionadas").textContent = textoSeleccion;
  document.getElementById("total").textContent = `Total premium: $${total.toFixed(2)}/mes`;

  console.log(`💰 Total actual: $${total.toFixed(2)}/mes`);
}

// Abre todas las pestañas seleccionadas
function abrirSeleccionadas() {
  if (seleccion.length === 0) {
    alert("Marcá al menos una IA antes de abrir.");
    return;
  }

  for (let i = 0; i < seleccion.length; i++) {
    let ia = listaIAs[seleccion[i]];
    window.open(ia.url, "_blank");
  }

  console.log(`🚀 Se abrieron ${seleccion.length} pestañas.`);
}

// Arranca apenas carga la página
renderizarLista();
