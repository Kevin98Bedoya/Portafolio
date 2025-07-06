document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  function prefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function isDark() {
    return html.getAttribute('data-theme') === 'dark' ||
           (!html.hasAttribute('data-theme') && prefersDark());
  }

  function setIcon(dark) {
    const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon-icon lucide-sun-moon"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>`;
    themeIcon.innerHTML = dark ? sun : moon;
  }

  if (!html.hasAttribute('data-theme')) {
    html.setAttribute('data-theme', prefersDark() ? 'dark' : 'light');
  }

  setIcon(isDark());

  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dark = isDark();
    html.setAttribute('data-theme', dark ? 'light' : 'dark');
    setIcon(!dark);
  });



  const languageToggle = document.getElementById('language-toggle');
  const traducciones = {
    es: {
      "profesion": "Programador",
      "sobre-mi-titulo": "Sobre mí",
      "sobre-mi-texto": "Soy un programador que disfruta el desentrañar y convertir en soluciones funcionales los constantes retos digitales del mundo del software, con experiencia en la automatización y la inteligencia artificial. Mi interés en el hardware me proporciona una valiosa perspectiva sobre el rendimiento, las capacidades subyacentes de mis creaciones y asesorías sobre equipos.",
      "tecnologias": "Tecnologías",
      "experiencia": "Experiencia",
      "experiencia-rol-1": "Practicante ingeniero en sistemas, Programador, IA",
      "experiencia-tareas-1": "Mantenimiento de datos, IA para análisis de documentos y extracción de información con Gemini desplegada en Tigo.",
      "experiencia-rol-2": "Asistente Administrativo y Contable",
      "experiencia-tareas-2": "Automatización de gestión de archivos contables y reportes con Python, World Office y Excel.",
      "experiencia-rol-3": "Practicante tecnólogo en sistemas de información, Programador, Automatizador de procesos",
      "experiencia-tareas-3": "Automatización de pruebas de software con Selenium y Robot Framework.",
      "proyectos": "Proyectos",
      "proyectos-titulo-3": "Proyecto Tigo 2",
      "proyectos-que-es-3": "Validador de archivos",
      "proyectos-descripcion-3": "Ejemplo sobre el método de validación cronológica de las imagenes de un archivo excel en mi estadía como prácticante ingeniero en sistemas en la empresa UNE EPM Telecomunicaciones S.A E.S.P..",
      "proyectos-titulo-2": "Proyecto Tigo",
      "proyectos-que-es-2": "Extractor de información con IA",
      "proyectos-descripcion-2": "Ejemplo sobre el método de extracción y procesamiento de información de un archivo word en mi estadía como prácticante ingeniero en sistemas en la empresa UNE EPM Telecomunicaciones S.A E.S.P..",
      "proyectos-titulo-1": "Proyecto Nutresa",
      "proyectos-que-es-1": "Automatización Camaleom",
      "proyectos-descripcion-1": "Ejemplo sobre el método de automatización de procesos en mi estadía como practicante tecnólogo en sistemas de información en la empresa Nutresa S.A..",
      "formacion": "Formación",
      "formacion-titulo-1": "Estudiante Ingieniería en Sistemas",
      "formacion-descripcion-1": "Mi formación en ingeniería me proporcionó conocimientos avanzados en áreas como compiladores, inteligencia artificial y visión artificial. Además, desarrollé una comprensión profunda de la arquitectura de computadores, sistemas operativos y la administración de bases de datos.",
      "formacion-titulo-2": "Título Tecnología en Sistemas de Información",
      "formacion-descripcion-2": "Desarrollé habilidades sólidas en lógica de programación, POO con Java, estructuras de datos esenciales, gestión de archivos .txt y bases de datos SQL Server. Mi experiencia abarca el desarrollo de software profesional con C# y la creación de aplicaciones web con JSP y PHP, además de conocimientos en inteligencia de negocios con visual studio y power BI.",
      "extra": "Extra",
      "extra-titulo-1": "Hardware",
      "extra-que-es-1": "Experiencia en planificación y montaje de infraestructura de hardware."
    },
    en: {
      "profesion": "Programmer",
      "sobre-mi-titulo": "About me",
      "sobre-mi-texto": "I am a programmer who enjoys unraveling and turning the constant digital challenges of the software world into functional solutions, with experience in automation and artificial intelligence. My interest in hardware provides me with a valuable perspective on the performance and underlying capabilities of my creations and equipment advice.",
      "tecnologias": "Technologies",
      "experiencia": "Experience",
      "experiencia-rol-1": "Systems Engineering Intern, Programmer, AI",
      "experiencia-tareas-1": "Data maintenance, AI for document analysis and information extraction with Gemini deployed at Tigo.",
      "experiencia-rol-2": "Administrative and Accounting Assistant",
      "experiencia-tareas-2": "Automation of accounting file management and reports with Python, World Office, and Excel.",
      "experiencia-rol-3": "Information Systems Technology Intern, Programmer, Process Automation",
      "experiencia-tareas-3": "Software test automation with Selenium and Robot Framework.",
      "proyectos": "Projects",
      "proyectos-titulo-3": "Tigo Proyect 2",
      "proyectos-que-es-3": "File validator",
      "proyectos-descripcion-3": "Example of the chronological validation method for images in an Excel file during my time as a systems engineering intern at UNE EPM Telecomunicaciones S.A. E.S.P..",
      "proyectos-titulo-2": "Tigo Proyect",
      "proyectos-que-es-2": "AI-powered information extractor",
      "proyectos-descripcion-2": "Example of the method of extracting and processing information from a Word file during my stay as a systems engineering intern at UNE EPM Telecomunicaciones S.A. E.S.P..",
      "proyectos-titulo-1": "Nutresa Proyect",
      "proyectos-que-es-1": "Camaleom Automation",
      "proyectos-descripcion-1": "A example of the process automation method during my time as a systems technologist intern at Nutresa S.A..",
      "formacion": "Education",
      "formacion-titulo-1": "Systems Engineering Student",
      "formacion-descripcion-1": "My engineering education provided me with advanced knowledge in areas such as compilers, artificial intelligence, and computer vision. Additionally, I developed a deep understanding of computer architecture, operating systems, and database administration.",
      "formacion-titulo-2": "Information Systems Technology Degree",
      "formacion-descripcion-2": "I developed solid skills in programming logic, OOP with Java, essential data structures, .txt file management, and SQL Server databases. My experience includes professional software development with C# and the creation of web applications with JSP and PHP, in addition to knowledge in business intelligence with Visual Studio and Power BI.",
      "extra": "Extra",
      "extra-titulo-1": "Hardware",
      "extra-que-es-1": "Experience in planning and assembling hardware infrastructure."
    }
  };

  let idiomaActual = 'es';

  function cambiarIdioma() {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    actualizarTextos();
  }

  function actualizarTextos() {
    document.getElementById('profesion').textContent = traducciones[idiomaActual].profesion;
    document.getElementById('sobre-mi-titulo').textContent = traducciones[idiomaActual]['sobre-mi-titulo'];
    document.getElementById('sobre-mi-texto').textContent = traducciones[idiomaActual]['sobre-mi-texto'];
    document.getElementById('tecnologias').textContent = traducciones[idiomaActual].tecnologias;
    document.getElementById('experiencia').textContent = traducciones[idiomaActual].experiencia;
    document.getElementById('experiencia-rol-1').textContent = traducciones[idiomaActual]['experiencia-rol-1'];
    document.getElementById('experiencia-tareas-1').textContent = traducciones[idiomaActual]['experiencia-tareas-1'];
    document.getElementById('experiencia-rol-2').textContent = traducciones[idiomaActual]['experiencia-rol-2'];
    document.getElementById('experiencia-tareas-2').textContent = traducciones[idiomaActual]['experiencia-tareas-2'];
    document.getElementById('experiencia-rol-3').textContent = traducciones[idiomaActual]['experiencia-rol-3'];
    document.getElementById('experiencia-tareas-3').textContent = traducciones[idiomaActual]['experiencia-tareas-3'];
    document.getElementById('proyectos').textContent = traducciones[idiomaActual].proyectos;
    document.getElementById('proyectos-titulo-1').textContent = traducciones[idiomaActual]['proyectos-titulo-1'];
    document.getElementById('proyectos-que-es-1').textContent = traducciones[idiomaActual]['proyectos-que-es-1'];
    document.getElementById('proyectos-descripcion-1').textContent = traducciones[idiomaActual]['proyectos-descripcion-1'];
    document.getElementById('proyectos-titulo-2').textContent = traducciones[idiomaActual]['proyectos-titulo-2'];
    document.getElementById('proyectos-que-es-2').textContent = traducciones[idiomaActual]['proyectos-que-es-2'];
    document.getElementById('proyectos-descripcion-2').textContent = traducciones[idiomaActual]['proyectos-descripcion-2'];
    document.getElementById('proyectos-titulo-3').textContent = traducciones[idiomaActual]['proyectos-titulo-3'];
    document.getElementById('proyectos-que-es-3').textContent = traducciones[idiomaActual]['proyectos-que-es-3'];
    document.getElementById('proyectos-descripcion-3').textContent = traducciones[idiomaActual]['proyectos-descripcion-3'];
    document.getElementById('formacion').textContent = traducciones[idiomaActual].formacion;
    document.getElementById('formacion-titulo-1').textContent = traducciones[idiomaActual]['formacion-titulo-1'];
    document.getElementById('formacion-descripcion-1').textContent = traducciones[idiomaActual]['formacion-descripcion-1'];
    document.getElementById('formacion-titulo-2').textContent = traducciones[idiomaActual]['formacion-titulo-2'];
    document.getElementById('formacion-descripcion-2').textContent = traducciones[idiomaActual]['formacion-descripcion-2'];
    document.getElementById('extra').textContent = traducciones[idiomaActual]['extra'];
    document.getElementById('extra-titulo-1').textContent = traducciones[idiomaActual]['extra-titulo-1'];
    document.getElementById('extra-que-es-1').textContent = traducciones[idiomaActual]['extra-que-es-1'];
  }

  // Evento de clic para el botón de idioma
  languageToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace navegue a '#'
    cambiarIdioma();
  });

  actualizarTextos();
});