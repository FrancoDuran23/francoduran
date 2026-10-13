/* Franco Durán · contenido y render. Editá CONTENT; el HTML solo tiene la estructura. */
(() => {
  "use strict";
  const ICONS = {"instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077", "x": "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z", "github": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12", "linkedin": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", "whatsapp": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z", "telegram": "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", "solana": "m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z", "stellar": "M12.283 1.851A10.154 10.154 0 001.846 12.002c0 .259.01.516.03.773A1.847 1.847 0 01.872 14.56L0 15.005v2.074l2.568-1.309.832-.424.82-.417 14.71-7.496 1.653-.842L24 4.85V2.776l-3.387 1.728-2.89 1.473-13.955 7.108a8.376 8.376 0 01-.07-1.086 8.313 8.313 0 0112.366-7.247l1.654-.843.247-.126a10.154 10.154 0 00-5.682-1.932zM24 6.925L5.055 16.571l-1.653.844L0 19.15v2.072L3.378 19.5l2.89-1.473 13.97-7.117a8.474 8.474 0 01.07 1.092A8.313 8.313 0 017.93 19.248l-.101.054-1.793.914a10.154 10.154 0 0016.119-8.214c0-.26-.01-.522-.03-.78a1.848 1.848 0 011.003-1.785L24 8.992Z"};
  const svg = (n, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[n]}"/></svg>`;

  const LINKS = {
    email: "mailto:francoduran232@gmail.com",
    whatsapp: "https://chat.whatsapp.com/Bj1KKgjcLue2FOVuX8osmq",
    github: "https://github.com/FrancoDuran23",
    linkedin: "https://www.linkedin.com/in/francoduran23/",
    x: "https://x.com/fdurandev",
    instagram: "https://instagram.com/fdurandev",
    jujuydev: "https://jujuy.dev.ar",
    colejuy: "https://colejuy.vercel.app",
    builder: "https://francoduran23.github.io/builder-session-jujuy/",
  };

  const T = {
    es: {
      "nav.do": "Lo que hago", "nav.projects": "Proyectos", "nav.eco": "Ecosistema", "nav.work": "Experiencia", "nav.contact": "Contacto",
      "hero.eyebrow": "San Salvador de Jujuy, Argentina",
      "hero.role": "Automatizo <b>procesos con IA en bancos comerciales</b> y asesoro a empresas como <b>consultor de IA</b>. Cofundador de <b>jujuy.dev</b>, creador de <b>Cole Juy</b>, organizador de hackathons y embajador de Monad, Solana y Stellar.",
      "hero.write": "Escribime", "hero.community": "Comunidad jujuy.dev",
      "do.eyebrow": "// lo que hago", "do.title": "IA en producción y comunidad en Jujuy",
      "projects.eyebrow": "// proyectos", "projects.title": "Cosas que están andando", "projects.lead": "Proyectos propios y MVPs que puedo mostrar en público.",
      "eco.eyebrow": "// ecosistema", "eco.title": "Embajador y organizador", "eco.lead": "Represento a estas redes en el NOA y organizo hackathons con ellas.",
      "eco.brandsTitle": "Los que empujan con nosotros", "eco.brandsLead": "Empresas, gobiernos, universidades y comunidades que apoyan a jujuy.dev.",
      "work.eyebrow": "// experiencia", "work.title": "Dónde trabajé", "work.lead": "Código no público por confidencialidad; lo explico en una charla.", "work.edu": "Formación", "work.skills": "Stack",
      "contact.eyebrow": "// contacto", "contact.title": "Hablemos", "contact.lead": "Consultoría de IA, charlas, hackathons o sumarte a la comunidad.",
      "footer.made": `Hecho por Franco Durán, cofundador de la comunidad <a href="${LINKS.jujuydev}" target="_blank" rel="noopener">jujuy.dev</a>.`,
      "footer.style": `Diseño basado en el sistema visual de <a href="${LINKS.colejuy}" target="_blank" rel="noopener">Cole Juy</a>.`,
      tags: ["Python", "Django", "LangChain", "RAG", "PostgreSQL", "Claude Code", "EVM", "Solana", "Stellar"],
      roles: [
        { n: "01", c: "var(--c1)", h: "Automatización de procesos con IA en bancos comerciales", p: "Scoring crediticio, extracción de datos de PDFs, informes automáticos y flujos de aprobación, en producción y con cobertura de tests." },
        { n: "02", c: "var(--c2)", h: "Consultor de IA en varias empresas", p: "Sistemas RAG, agentes y automatizaciones que resuelven trabajo repetitivo. Capacitaciones para equipos, docentes y organismos públicos." },
        { n: "03", c: "var(--c3)", h: "Cofundador de jujuy.dev", p: "La comunidad de desarrolladores de Jujuy: meetups, charlas, sorteos verificables y un chat para preguntar lo que sea.", mini: [["img", "assets/logos/jujuydev.svg", "jujuy.dev", LINKS.jujuydev, "jujuy.dev.ar"]] },
        { n: "04", c: "var(--c4)", h: "Creador de Cole Juy", p: "Tracker de colectivos en vivo de San Salvador de Jujuy: mapa, tiempos de llegada, cómo llegar y avisos por Telegram. Gratis, sin cuenta y sin instalar nada.", mini: [["img", "assets/logos/colejuy.png", "Cole Juy", LINKS.colejuy, "colejuy.vercel.app"]] },
        { n: "05", c: "var(--c5)", h: "Host de la Builder Session Jujuy", p: "La sede Jujuy del hackathon Agents on Open Rails, de Celo × Ripio, con seis ciudades en simultáneo.", mini: [["img", "assets/logos/celo.svg", "Celo", "https://celo.org"], ["img", "assets/logos/ripio.svg", "Ripio", "https://www.ripio.com/"], ["link", LINKS.builder, "Ver la presentación"]] },
        { n: "06", c: "var(--c6)", h: "Organizador de hackathons", p: "Armo y conduzco hackathons en Jujuy junto a comunidades y redes del ecosistema, desde la convocatoria hasta la demo." },
        { n: "07", c: "var(--c7)", h: "Embajador de Monad, Solana y Stellar", p: "Represento a estas redes en el NOA: onboarding de desarrolladores, talleres y hackathons.", mini: [["word", "MONAD"], ["svg", "solana", "Solana"], ["svg", "stellar", "Stellar"]] },
      ],
      projects: [
        { t: "Cole Juy", logo: "assets/logos/colejuy.png", s: "live", st: "En vivo", p: "Colectivos de San Salvador de Jujuy en el mapa: líneas, recorridos, paradas, posiciones en tiempo real, cómo llegar y avisos por Telegram.", stack: ["Next.js", "MapLibre", "Redis", "Telegram"], links: [[LINKS.colejuy, "Abrir"]] },
        { t: "jujuy.dev", logo: "assets/logos/jujuydev.svg", s: "live", st: "Comunidad", p: "Sitio y comunidad de los devs de Jujuy: eventos, proyectos, oportunidades y pared de miembros que se arma con cada PR.", stack: ["HTML", "GitHub Pages"], links: [[LINKS.jujuydev, "Abrir"], ["https://github.com/FrancoDuran23/jujuy_dev", "Repo"]] },
        { t: "TalentBase", img: "assets/projects/talentbase.webp", s: "live", st: "En vivo", p: "SaaS de matchmaking de talento con IA: embeddings, scoring semántico sobre pgvector y ranking explicable con LLM. En producción con clientes reales.", stack: ["Django", "pgvector", "LangChain", "Voyage AI"], links: [] },
        { t: "Mission Match", img: "assets/projects/missionmatch.webp", s: "win", st: "1er puesto", p: "Matching de voluntarios para parroquias con búsqueda semántica. Hecho de punta a punta en el hackathon del Acutis Summit (Expo Católica): equipo campeón.", stack: ["Django", "pgvector", "LangChain"], links: [] },
        { t: "EmpathIA", img: "assets/projects/emphatia.webp", s: "", st: "MVP", p: "Reescribe mensajes agresivos en comunicación empática, en tiempo real, con una base de patrones terapéuticos. Chat anónimo y temporal.", stack: ["Django", "WebSockets", "OpenAI"], links: [["https://emphatia.up.railway.app", "Abrir"]] },
        { t: "CIDEJ", img: "assets/projects/cidej.webp", s: "live", st: "En vivo", p: "Sitio de una fundación de capacitación comunitaria en Jujuy: proyectos, capacitaciones en IA e iniciativas sociales.", stack: ["TypeScript", "PostgreSQL", "Docker"], links: [["https://www.cidej23.org", "Abrir"]] },
        { t: "Vigo Inmobiliaria", img: "assets/projects/vigo.webp", s: "live", st: "En vivo", p: "Plataforma inmobiliaria con listados, búsqueda y contacto.", stack: ["Firebase", "Google Cloud"], links: [["https://vigoinmobiliaria.com", "Abrir"]] },
      ],
      ambassador: [
        { word: "MONAD", h: "Monad", s: "Embajador · EVM paralela de alto rendimiento" },
        { svg: "solana", h: "Solana", s: "Embajador · con Superteam Argentina" },
        { svg: "stellar", h: "Stellar", s: "Embajador · pagos y activos en el NOA" },
      ],
      jobs: [
        { h: "Dinardi Projects · software bancario", w: "2025 – hoy", b: [
          "Parsers de PDF para extraer datos financieros (estructura societaria, deuda, órganos de gestión) con tests unitarios y de integración sobre casos reales.",
          "Sistema de scoring crediticio de punta a punta con máquina de estados, integrando bureaus externos (Nosis WS01) y APIs financieras (SIDEBA).",
          "Generación automática de informes de crédito (PDF con WeasyPrint) con ratios financieros y flujo de caja proyectado.",
          "Arquitectura de roles y permisos con 6 roles y flujos de aprobación complejos.",
          "Uso diario de Claude Code y agentes para generar, revisar y refactorizar código sin perder cobertura de tests.",
        ], stack: ["Python 3.12", "Django 5.2", "HTMX", "PostgreSQL", "pytest", "Playwright"] },
        { h: "Oficina Anticorrupción · Provincia de Jujuy", w: "2021 – 2025", b: [
          "Lideré la modernización de un sistema legacy C#/ASP.NET a Python/Django: ingeniería inversa, rediseño de arquitectura y entrega incremental con tests por módulo.",
          "Sistema completo de declaraciones juradas patrimoniales, con datos sensibles, control de acceso por rol y validaciones exhaustivas.",
          "RAG en producción con LangChain para consultas legales, sobre una base documental propia indexada con pgvector y embeddings de Voyage AI.",
          "Análisis automático de documentos legales con LLMs, reduciendo trabajo manual repetitivo del equipo.",
          "40% menos de tiempo en la generación de informes patrimoniales con algoritmos propios.",
        ], stack: ["Python", "Django", "PostgreSQL", "LangChain", "pgvector"] },
        { h: "Lambda Solutions · backend y redes de fibra óptica", w: "2022 – 2025", b: [
          "Migración de un backend en C a Django + Redis: análisis del código legacy, ingeniería inversa y rediseño de arquitectura.",
          "Scripts en Python para corrección, transformación y mantenimiento de bases de datos en producción.",
          "Despliegues en Google App Engine y VMs Linux con flujos de entrega repetibles.",
          "App de gestión de redes de fibra óptica para clientes de telecomunicaciones, con ciclos de entrega cortos.",
          "Servidores MCP (Model Context Protocol) para exponer herramientas internas a asistentes de IA.",
        ], stack: ["Python", "Go", "Django", "PostgreSQL", "Redis", "MCP"] },
      ],
      edu: [
        ["Licenciatura en Tecnología de la Información", "Universidad de Palermo"],
        ["Analista Programador Universitario", "Universidad Nacional de Jujuy (UNJu)"],
        ["Director de Proyectos IT · Fundación CIDEJ", "Capacitaciones en IA para docentes y organismos públicos, con la UNJu"],
      ],
      skills: ["Python", "Django", "FastAPI", "HTMX", "Celery", "PostgreSQL", "pgvector", "Redis", "pytest", "Playwright", "Docker", "AWS", "GCP", "LangChain", "MCP", "Claude Code", "Go", "Next.js", "Solidity / EVM", "Solana", "Stellar"],
      contact: [["email", "francoduran232@gmail.com", LINKS.email], ["whatsapp", "WhatsApp de jujuy.dev", LINKS.whatsapp], ["linkedin", "LinkedIn", LINKS.linkedin], ["github", "GitHub", LINKS.github], ["x", "X · @fdurandev", LINKS.x], ["instagram", "Instagram · @fdurandev", LINKS.instagram]],
    },
    en: {
      "nav.do": "What I do", "nav.projects": "Projects", "nav.eco": "Ecosystem", "nav.work": "Experience", "nav.contact": "Contact",
      "hero.eyebrow": "San Salvador de Jujuy, Argentina",
      "hero.role": "I automate <b>processes with AI at commercial banks</b> and advise companies as an <b>AI consultant</b>. Co-founder of <b>jujuy.dev</b>, creator of <b>Cole Juy</b>, hackathon organizer and ambassador for Monad, Solana and Stellar.",
      "hero.write": "Email me", "hero.community": "jujuy.dev community",
      "do.eyebrow": "// what I do", "do.title": "AI in production and community in Jujuy",
      "projects.eyebrow": "// projects", "projects.title": "Things that are live", "projects.lead": "Personal projects and MVPs I can share publicly.",
      "eco.eyebrow": "// ecosystem", "eco.title": "Ambassador and organizer", "eco.lead": "I represent these networks in northern Argentina and run hackathons with them.",
      "eco.brandsTitle": "The ones pushing with us", "eco.brandsLead": "Companies, governments, universities and communities backing jujuy.dev.",
      "work.eyebrow": "// experience", "work.title": "Where I've worked", "work.lead": "Source code not public due to confidentiality; happy to walk through it.", "work.edu": "Education", "work.skills": "Stack",
      "contact.eyebrow": "// contact", "contact.title": "Let's talk", "contact.lead": "AI consulting, talks, hackathons, or joining the community.",
      "footer.made": `Made by Franco Durán, co-founder of the <a href="${LINKS.jujuydev}" target="_blank" rel="noopener">jujuy.dev</a> community.`,
      "footer.style": `Design based on the <a href="${LINKS.colejuy}" target="_blank" rel="noopener">Cole Juy</a> visual system.`,
      tags: ["Python", "Django", "LangChain", "RAG", "PostgreSQL", "Claude Code", "EVM", "Solana", "Stellar"],
      roles: [
        { n: "01", c: "var(--c1)", h: "AI process automation at commercial banks", p: "Credit scoring, PDF data extraction, automated reports and approval workflows, in production and fully tested." },
        { n: "02", c: "var(--c2)", h: "AI consultant for several companies", p: "RAG systems, agents and automations that remove repetitive work. Training for teams, teachers and public institutions." },
        { n: "03", c: "var(--c3)", h: "Co-founder of jujuy.dev", p: "The developer community of Jujuy: meetups, talks, verifiable raffles and a chat to ask anything.", mini: [["img", "assets/logos/jujuydev.svg", "jujuy.dev", LINKS.jujuydev, "jujuy.dev.ar"]] },
        { n: "04", c: "var(--c4)", h: "Creator of Cole Juy", p: "Live bus tracker for San Salvador de Jujuy: map, arrival times, directions and Telegram alerts. Free, no account, nothing to install.", mini: [["img", "assets/logos/colejuy.png", "Cole Juy", LINKS.colejuy, "colejuy.vercel.app"]] },
        { n: "05", c: "var(--c5)", h: "Host of the Jujuy Builder Session", p: "The Jujuy venue of the Agents on Open Rails hackathon by Celo × Ripio, run in six cities at once.", mini: [["img", "assets/logos/celo.svg", "Celo", "https://celo.org"], ["img", "assets/logos/ripio.svg", "Ripio", "https://www.ripio.com/"], ["link", LINKS.builder, "See the deck"]] },
        { n: "06", c: "var(--c6)", h: "Hackathon organizer", p: "I set up and run hackathons in Jujuy with ecosystem communities and networks, from the call to the demo." },
        { n: "07", c: "var(--c7)", h: "Ambassador for Monad, Solana and Stellar", p: "I represent these networks in northern Argentina: developer onboarding, workshops and hackathons.", mini: [["word", "MONAD"], ["svg", "solana", "Solana"], ["svg", "stellar", "Stellar"]] },
      ],
      projects: [
        { t: "Cole Juy", logo: "assets/logos/colejuy.png", s: "live", st: "Live", p: "Buses of San Salvador de Jujuy on a map: lines, routes, stops, live positions, directions and Telegram alerts.", stack: ["Next.js", "MapLibre", "Redis", "Telegram"], links: [[LINKS.colejuy, "Open"]] },
        { t: "jujuy.dev", logo: "assets/logos/jujuydev.svg", s: "live", st: "Community", p: "Site and community of Jujuy's developers: events, projects, opportunities and a members wall built from every PR.", stack: ["HTML", "GitHub Pages"], links: [[LINKS.jujuydev, "Open"], ["https://github.com/FrancoDuran23/jujuy_dev", "Repo"]] },
        { t: "TalentBase", img: "assets/projects/talentbase.webp", s: "live", st: "Live", p: "AI talent matchmaking SaaS: embeddings, semantic scoring over pgvector and explainable LLM ranking. In production with real clients.", stack: ["Django", "pgvector", "LangChain", "Voyage AI"], links: [] },
        { t: "Mission Match", img: "assets/projects/missionmatch.webp", s: "win", st: "1st place", p: "Volunteer matching for parishes with semantic search. Built end-to-end at the Acutis Summit hackathon (Expo Católica): champion team.", stack: ["Django", "pgvector", "LangChain"], links: [] },
        { t: "EmpathIA", img: "assets/projects/emphatia.webp", s: "", st: "MVP", p: "Rewrites aggressive messages into empathetic communication in real time, with a base of therapeutic patterns. Anonymous, temporary chat.", stack: ["Django", "WebSockets", "OpenAI"], links: [["https://emphatia.up.railway.app", "Open"]] },
        { t: "CIDEJ", img: "assets/projects/cidej.webp", s: "live", st: "Live", p: "Website for a community training foundation in Jujuy: projects, AI training and social initiatives.", stack: ["TypeScript", "PostgreSQL", "Docker"], links: [["https://www.cidej23.org", "Open"]] },
        { t: "Vigo Inmobiliaria", img: "assets/projects/vigo.webp", s: "live", st: "Live", p: "Real estate platform with listings, search and contact.", stack: ["Firebase", "Google Cloud"], links: [["https://vigoinmobiliaria.com", "Open"]] },
      ],
      ambassador: [
        { word: "MONAD", h: "Monad", s: "Ambassador · high-performance parallel EVM" },
        { svg: "solana", h: "Solana", s: "Ambassador · with Superteam Argentina" },
        { svg: "stellar", h: "Stellar", s: "Ambassador · payments and assets in northern Argentina" },
      ],
      jobs: [
        { h: "Dinardi Projects · banking software", w: "2025 – present", b: [
          "PDF parsers for automatic financial data extraction (corporate structure, debt, management bodies), with unit and integration tests on real cases.",
          "End-to-end credit scoring system with a state machine, integrating external bureaus (Nosis WS01) and financial APIs (SIDEBA).",
          "Automated credit report generation (PDF via WeasyPrint) with financial ratios and projected cash flow.",
          "Roles and permissions architecture with 6 roles and complex approval workflows.",
          "Daily use of Claude Code and agents for code generation, review and refactoring without losing test coverage.",
        ], stack: ["Python 3.12", "Django 5.2", "HTMX", "PostgreSQL", "pytest", "Playwright"] },
        { h: "Anti-Corruption Office · Jujuy Province", w: "2021 – 2025", b: [
          "Led the modernization of a legacy C#/ASP.NET system to Python/Django: reverse engineering, architecture redesign and incremental delivery with per-module tests.",
          "Full system for financial disclosure statements, with sensitive data, role-based access control and thorough validation.",
          "Production RAG with LangChain for legal queries over a custom document base indexed with pgvector and Voyage AI embeddings.",
          "Automated legal document analysis with LLMs, cutting the team's repetitive manual work.",
          "40% less time generating asset-disclosure reports with custom algorithms.",
        ], stack: ["Python", "Django", "PostgreSQL", "LangChain", "pgvector"] },
        { h: "Lambda Solutions · backend and fiber-optic networks", w: "2022 – 2025", b: [
          "Migration of a C backend to Django + Redis: legacy analysis, reverse engineering and full architecture redesign.",
          "Python scripts for correction, transformation and maintenance of production databases.",
          "Deployments on Google App Engine and Linux VMs with repeatable delivery flows.",
          "Fiber-optic network management app for telecom clients under short delivery cycles.",
          "MCP (Model Context Protocol) servers exposing internal tools to AI assistants.",
        ], stack: ["Python", "Go", "Django", "PostgreSQL", "Redis", "MCP"] },
      ],
      edu: [
        ["BSc in Information Technology", "Universidad de Palermo"],
        ["Analyst Programmer", "Universidad Nacional de Jujuy (UNJu)"],
        ["IT Project Director · CIDEJ Foundation", "AI training for teachers and public institutions, with UNJu"],
      ],
      skills: ["Python", "Django", "FastAPI", "HTMX", "Celery", "PostgreSQL", "pgvector", "Redis", "pytest", "Playwright", "Docker", "AWS", "GCP", "LangChain", "MCP", "Claude Code", "Go", "Next.js", "Solidity / EVM", "Solana", "Stellar"],
      contact: [["email", "francoduran232@gmail.com", LINKS.email], ["whatsapp", "jujuy.dev WhatsApp", LINKS.whatsapp], ["linkedin", "LinkedIn", LINKS.linkedin], ["github", "GitHub", LINKS.github], ["x", "X · @fdurandev", LINKS.x], ["instagram", "Instagram · @fdurandev", LINKS.instagram]],
    },
  };

  const BRANDS = [
    ["Fundación CIDEJ", "assets/logos/cidej.webp", "https://www.cidej23.org", "round"],
    ["SaltaDev", "assets/logos/saltadev.webp", "https://salta.dev", "round"],
    ["CuyoConnect", "assets/logos/cuyoconnect.webp", "https://cuyoconnect.com/", "round"],
    ["CrecimientoAR", "assets/logos/crecimientoar.webp", "https://crecimiento.build/", "round"],
    ["Superteam Argentina", "assets/logos/superteam-argentina.svg", "https://superteam.ar/", "lockup"],
    ["Municipalidad de San Salvador de Jujuy", "assets/logos/municipalidad-ssj.webp", "https://www.sansalvadordejujuy.gob.ar/", "lockup"],
    ["Gobierno de Jujuy", "assets/logos/gobierno-jujuy.webp", "https://jujuy.gob.ar/", "lockup"],
    ["Formosa.dev", "assets/logos/formosa-dev.webp", "https://formosa.dev.ar/", "lockup"],
    ["Mar del Plata Dev", "assets/logos/mardelplata-dev.webp", "https://mardelplata.dev.ar/", "lockup"],
    ["Celo", "assets/logos/celo.svg", "https://celo.org/", "lockup"],
    ["Ripio", "assets/logos/ripio.svg", "https://www.ripio.com/", "lockup"],
    ["Nerdearla", "assets/logos/nerdearla.webp", "https://nerdearla.com/", "lockup"],
  ];
  const MAIL_ICON = "M1.5 4.5h21v15h-21zM3 6.6v.9l9 5.6 9-5.6v-.9l-9 5.6z";

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ext = 'target="_blank" rel="noopener"';

  function miniBits(list) {
    if (!list) return "";
    return `<div class="mini">` + list.map((m) => {
      if (m[0] === "img") return `<a href="${m[3]}" ${ext}><img src="${m[1]}" alt="${esc(m[2])}">${m[4] ? esc(m[4]) : ""}</a>`;
      if (m[0] === "svg") return `<span class="word" title="${esc(m[2])}">${svg(m[1])} ${esc(m[2])}</span>`;
      if (m[0] === "word") return `<span class="word">${esc(m[1])}</span>`;
      if (m[0] === "link") return `<a href="${m[1]}" ${ext}>${esc(m[2])} ↗</a>`;
      return "";
    }).join("") + `</div>`;
  }

  function render(lang) {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach((el) => { const v = t[el.dataset.t]; if (v != null) el.innerHTML = v; });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));

    $("#hero-tags").innerHTML = t.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("");
    $("#hero-social").innerHTML = [["github", LINKS.github, "GitHub"], ["linkedin", LINKS.linkedin, "LinkedIn"], ["x", LINKS.x, "X"], ["instagram", LINKS.instagram, "Instagram"]]
      .map(([i, u, l]) => `<a class="icon-button" href="${u}" ${ext} aria-label="${l}">${svg(i)}</a>`).join("");

    $("#roles").innerHTML = t.roles.map((r) => `
      <article class="role-card reveal">
        <span class="chapa" style="--c:${r.c}">${r.n}</span>
        <div><h3>${esc(r.h)}</h3><p>${esc(r.p)}</p>${miniBits(r.mini)}</div>
      </article>`).join("");

    $("#projects").innerHTML = t.projects.map((p) => `
      <article class="project reveal">
        <div class="shot ${p.logo ? "logo-shot" : ""}"><img src="${p.logo || p.img}" alt="${esc(p.t)}" loading="lazy"></div>
        <div class="head"><h3>${esc(p.t)}</h3><span class="status ${p.s}">${esc(p.st)}</span></div>
        <p>${esc(p.p)}</p>
        <div class="stack">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
        ${p.links.length ? `<div class="links">${p.links.map(([u, l]) => `<a href="${u}" ${ext}>${esc(l)} ↗</a>`).join("")}</div>` : ""}
      </article>`).join("");

    $("#ambassador").innerHTML = t.ambassador.map((a) => `
      <div class="brand reveal">${a.svg ? svg(a.svg) : `<span class="word">${esc(a.word)}</span>`}<span><b>${esc(a.h)}</b><small>${esc(a.s)}</small></span></div>`).join("");

    $("#brands").innerHTML = BRANDS.map(([n, src, u, kind]) => `
      <a class="brand reveal" href="${u}" ${ext} aria-label="${esc(n)}"><img src="${src}" alt="${esc(n)}" class="${kind}" loading="lazy">${kind === "round" ? `<span>${esc(n)}</span>` : ""}</a>`).join("");

    $("#jobs").innerHTML = t.jobs.map((j) => `
      <article class="job reveal">
        <div class="head"><h3>${esc(j.h)}</h3><span class="when">${esc(j.w)}</span></div>
        <ul>${j.b.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="stack">${j.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
      </article>`).join("");

    $("#edu").innerHTML = t.edu.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("");
    $("#skills").innerHTML = t.skills.map((s) => `<span>${esc(s)}</span>`).join("");
    $("#contact-row").innerHTML = t.contact.map(([i, l, u]) => `<a class="button ${i === "email" ? "primary" : ""}" href="${u}" ${i === "email" ? "" : ext}>${i === "email" ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${MAIL_ICON}"/></svg>` : svg(i)}${esc(l)}</a>`).join("");

    observe();
    try { localStorage.setItem("lang", lang); } catch {}
  }

  let io;
  function observe() {
    io?.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -40px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  document.querySelectorAll("[data-lang]").forEach((b) => (b.onclick = () => render(b.dataset.lang)));
  let lang = "es";
  try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en"); } catch {}
  render(T[lang] ? lang : "es");
})();
