// ============================================
// Directorio de IAs Gratuitas
// Proyecto - Fundamentos de programación en JavaScript
// ============================================

// ---------------------------------------------------------
// REQUISITO: Arreglos y objetos para almacenar y manipular datos
// Cada IA es un objeto con sus propiedades y un MÉTODO propio
// (mostrarInfo), tal como pide la Lección 5: "Implementar
// métodos dentro de un objeto".
// ---------------------------------------------------------
let listaIAs = [
  { nombre: "ChatGPT", uso: "Chat general y redacción", categoria: "Texto", url: "https://chat.openai.com", precioPremium: 20,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Claude", uso: "Escritura y programación", categoria: "Texto", url: "https://claude.ai", precioPremium: 20,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Gemini", uso: "Asistente integrado con Google", categoria: "Texto", url: "https://gemini.google.com", precioPremium: 19.99,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Perplexity", uso: "Búsqueda con fuentes verificadas", categoria: "Texto", url: "https://www.perplexity.ai", precioPremium: 20,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "DeepSeek", uso: "Chat y razonamiento de código", categoria: "Texto", url: "https://chat.deepseek.com", precioPremium: 0,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Copilot", uso: "Asistente de Microsoft", categoria: "Texto", url: "https://copilot.microsoft.com", precioPremium: 20,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "GitHub Copilot", uso: "Autocompletado de código", categoria: "Código", url: "https://github.com/features/copilot", precioPremium: 10,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Leonardo.Ai", uso: "Generación de imágenes", categoria: "Imagen", url: "https://leonardo.ai", precioPremium: 12,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Bing Image Creator", uso: "Generación de imágenes", categoria: "Imagen", url: "https://www.bing.com/images/create", precioPremium: 0,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "NotebookLM", uso: "Resumir y estudiar documentos", categoria: "Estudio", url: "https://notebooklm.google.com", precioPremium: 19.99,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } },
  { nombre: "Suno", uso: "Crear canciones con IA", categoria: "Audio", url: "https://suno.com", precioPremium: 10,
    mostrarInfo: function () { return `${this.nombre} (${this.categoria}) - ${this.uso} - $${this.precioPremium}/mes`; } }
];

// ---------------------------------------------------------
// REQUISITO (Lección 5): recorrer un arreglo de objetos con forEach()
// ---------------------------------------------------------
function listarTodas() {
  let texto = "========= DIRECTORIO DE IAs =========\n";
  listaIAs.forEach(function (ia, index) {
    texto += `${index + 1}. ${ia.mostrarInfo()}\n`;
  });
  texto += "======================================";
  return texto;
}

// ---------------------------------------------------------
// REQUISITO (Lección 3): función que filtra elementos según una condición
// ---------------------------------------------------------
function filtrarGratuitas() {
  return listaIAs.filter(function (ia) {
    return ia.precioPremium === 0;
  });
}

function mostrarGratuitas() {
  let gratuitas = filtrarGratuitas();
  let texto = "🆓 IAs 100% gratuitas (sin plan premium):\n";
  gratuitas.forEach(function (ia) {
    texto += `- ${ia.mostrarInfo()}\n`;
  });
  console.log(texto);
  alert(texto);
}

// ---------------------------------------------------------
// REQUISITO (Lección 4): función que RECIBE PARÁMETROS y RETORNA un resultado
// ---------------------------------------------------------
function calcularTotal(indices) {
  let total = 0;
  for (let i = 0; i < indices.length; i++) {
    total += listaIAs[indices[i]].precioPremium;
  }
  return total;
}

// Arma el texto de la selección actual + el total (usa la función anterior)
function textoSeleccion(seleccion, total) {
  if (seleccion.length === 0) return "🛒 No tenés IAs seleccionadas.";
  let texto = "🛒 Selección actual:\n";
  seleccion.forEach(function (indice, i) {
    texto += `${i + 1}. ${listaIAs[indice].nombre} - $${listaIAs[indice].precioPremium}/mes\n`;
  });
  texto += `\n💰 Total premium estimado: $${total.toFixed(2)}/mes`;
  return texto;
}

// Pide los números separados por coma y arma el arreglo de selección (push)
function pedirSeleccion() {
  let seleccion = [];
  let entrada = prompt(listarTodas() + "\n\nEscribí los NÚMEROS de las IAs que querés, separados por coma.\nEjemplo: 1,3,5");

  if (entrada === null || entrada.trim() === "") return seleccion;

  let partes = entrada.split(",");
  for (let i = 0; i < partes.length; i++) {
    let numero = Number(partes[i].trim());
    if (numero >= 1 && numero <= listaIAs.length) {
      let indice = numero - 1;
      if (!seleccion.includes(indice)) {
        seleccion.push(indice); // arreglos: agregar elemento
      }
    }
  }
  return seleccion;
}

// Permite quitar alguna IA de la selección antes de abrir (splice)
function preguntarSiQuitar(seleccion) {
  let seguir = true;
  while (seguir) {
    let total = calcularTotal(seleccion);
    let respuesta = prompt(textoSeleccion(seleccion, total) + "\n\n¿Querés quitar alguna? Escribí su número, o dejá vacío para continuar.");

    if (respuesta === null || respuesta.trim() === "") {
      seguir = false;
    } else {
      let numero = Number(respuesta.trim());
      let indice = numero - 1;
      let posicion = seleccion.indexOf(indice);
      if (posicion !== -1) {
        seleccion.splice(posicion, 1); // arreglos: quitar elemento
      }
      if (seleccion.length === 0) seguir = false;
    }
  }
  return seleccion;
}

// Abre todas las IAs seleccionadas en pestañas nuevas
function abrirSeleccionadas(seleccion, total) {
  let nombres = [];
  seleccion.forEach(function (indice) {
    let ia = listaIAs[indice];
    let ventana = window.open(ia.url, "_blank");
    if (!ventana) console.log(`⚠️ Se bloqueó ${ia.nombre}: ${ia.url}`);
    nombres.push(ia.nombre);
  });
  let resumen = `🚀 Se abrieron ${seleccion.length} pestañas: ${nombres.join(", ")}\n💰 Total: $${total.toFixed(2)}/mes`;
  console.log(resumen);
  alert(resumen);
}

// Flujo completo de selección múltiple, usando WHILE (estructura de repetición)
function seleccionarYAbrir() {
  let seguirUsando = true;

  while (seguirUsando) {
    let seleccion = pedirSeleccion();

    if (seleccion.length === 0) {
      let reintentar = confirm("No seleccionaste ninguna IA válida. ¿Querés intentar de nuevo?");
      if (!reintentar) break;
      continue;
    }

    seleccion = preguntarSiQuitar(seleccion);

    if (seleccion.length === 0) {
      console.log("🛒 Te quedaste sin IAs seleccionadas.");
      continue;
    }

    let total = calcularTotal(seleccion);
    let confirmar = confirm(textoSeleccion(seleccion, total) + "\n\n¿Abrir estas IAs ahora?");
    if (confirmar) {
      abrirSeleccionadas(seleccion, total);
    }

    seguirUsando = confirm("¿Querés hacer una nueva selección?");
  }
}

// ---------------------------------------------------------
// REQUISITO: uso de if / switch (estructuras condicionales)
// Función principal: arranca al hacer clic en el botón de index.html
// ---------------------------------------------------------
function iniciarPrograma() {
  console.log("🤖 Bienvenido al Directorio de IAs Gratuitas");

  let modo = prompt(
    "¿Qué querés hacer?\n" +
    "1. Ver el directorio completo y elegir IAs\n" +
    "2. Ver solo las IAs 100% gratuitas (sin plan premium)\n" +
    "Escribí 1 o 2:"
  );

  switch (modo) {
    case "1":
      seleccionarYAbrir(); // función llamada dentro de otra función
      break;
    case "2":
      mostrarGratuitas();
      break;
    default:
      alert("⚠️ Opción no válida. Volvé a presionar el botón para intentar de nuevo.");
  }

  console.log("👋 ¡Hasta luego!");
}
