export default {
  global: {
    Name: 'Parametrización de redes y control logístico',
    Description:
      'El componente formativo aborda la parametrización de redes y control logístico mediante la aplicación de políticas organizacionales, herramientas de planeación, modelos de programación y control de operaciones, con el propósito de optimizar la integración de la cadena de suministro. Analiza aspectos relacionados con políticas logísticas, cuadros de control, planeación agregada, MPS, MRP, redes de transporte y distribución, capacidad operativa, trazabilidad y diagramación de procesos, fortaleciendo la toma de decisiones y la eficiencia en las operaciones logísticas de las organizaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Políticas logísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Políticas de compras',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Políticas de inventarios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Políticas de recibo y despacho',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Políticas de preparación de pedidos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Políticas de manipulación, entrega y conservación de productos',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación y control de operaciones logísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cuadros de control',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Matriz de proveedores (SRM)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Matriz de clientes (CRM)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Control de manufactura',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Matriz de transporte',
            hash: 't_2_5',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planeación de requerimientos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis agregado',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Plan agregado',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Programa maestro de producción (MPS)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Planificación de requerimientos de materiales (MRP)',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Lista de materiales (BOM)',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Cantidad económica de pedido (EOQ)',
            hash: 't_3_6',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diseño de redes logísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Redes de transporte',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Redes de distribución',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Rutas críticas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Método PERT',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Método CPM',
            hash: 't_4_5',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Capacidad y trazabilidad logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Capacidad instalada',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Capacidad de almacenamiento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Capacidad de distribución',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Trazabilidad interna',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Trazabilidad externa',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Codificación GS1-128',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actividades',
      significado: 'Acciones que conforman un proceso logístico.',
    },
    {
      termino: 'ASME',
      significado:
        'Norma utilizada para representar gráficamente procesos mediante símbolos estandarizados.',
    },
    {
      termino: 'BOM',
      significado:
        'Lista estructurada de materiales y componentes requeridos para fabricar un producto.',
    },
    {
      termino: 'Capacidad',
      significado:
        'Nivel máximo de operación que puede alcanzar una organización con los recursos disponibles.',
    },
    {
      termino: 'CPM',
      significado:
        'Método para identificar la ruta crítica y programar proyectos.',
    },
    {
      termino: 'CRM',
      significado:
        'Herramienta para gestionar las relaciones con los clientes.',
    },
    {
      termino: 'Cursograma',
      significado:
        'Representación gráfica detallada de un proceso mediante símbolos estandarizados.',
    },
    {
      termino: 'Distribución',
      significado: 'Proceso de entrega de productos al cliente final.',
    },
    {
      termino: 'EOQ',
      significado: 'Modelo que determina la cantidad económica de pedido.',
    },
    {
      termino: 'GS1-128',
      significado:
        'Estándar internacional para la identificación de unidades logísticas mediante códigos de barras.',
    },
    {
      termino: 'Inventario',
      significado: 'Conjunto de productos disponibles para atender la demanda.',
    },
    {
      termino: 'ISO 28000',
      significado:
        'Norma internacional para la gestión de la seguridad en la cadena de suministro.',
    },
    {
      termino: 'ISO 9001',
      significado: 'Norma internacional para la gestión de la calidad.',
    },
    {
      termino: 'Logística',
      significado: 'Gestión del flujo de bienes, servicios e información.',
    },
    {
      termino: 'MPS',
      significado:
        'Programa maestro que define la producción según la demanda prevista.',
    },
    {
      termino: 'MRP',
      significado: 'Sistema para planificar los requerimientos de materiales.',
    },
    {
      termino: 'PERT',
      significado:
        'Técnica para planificar y controlar proyectos mediante tiempos estimados.',
    },
    {
      termino: 'Políticas',
      significado:
        'Directrices que orientan la ejecución de los procesos logísticos.',
    },
    {
      termino: 'Proveedores',
      significado:
        'Organizaciones que suministran bienes o servicios a una empresa.',
    },
    {
      termino: 'Red logística',
      significado:
        'Conjunto de procesos e instalaciones que integran la cadena de suministro.',
    },
    {
      termino: 'SRM',
      significado:
        'Herramienta para gestionar las relaciones con los proveedores.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para realizar el seguimiento de un producto durante toda la cadena de suministro.',
    },
    {
      termino: 'Transporte',
      significado:
        'Actividad destinada al desplazamiento de mercancías entre diferentes ubicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anaya Tejero, J. J. (2015). Logística integral: La gestión operativa de la empresa (5.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Garzón Quiroga, J. A., & Arenas Quimbayo, O. A. (2021). Capacidades logísticas y diseño de estrategias para los operadores 2PL y 3PL de la ciudad de Ibagué. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/7439/Capacidades_logisticas_y_dise%C3%B1o_de_estrategias.pdf?sequence=1',
    },
    {
      referencia:
        'Mariscal, E., Flores-Roux, E., Guerrero, R., & Elbittar, A. (2021). Eliminación de barreras al comercio digital: Desafíos de logística. Banco Interamericano de Desarrollo.',
      link: 'https://publications.iadb.org/es/publications/spanish/viewer/Eliminacion-de-barreras-al-comercio-digital-desafios-de-logistica.pdf',
    },
    {
      referencia:
        'Meneses, C. R. (2020). Evolución de la gestión de la cadena de suministro y la logística, desde una visión tecnológica y sostenible. Revista RETO, 8(1).',
      link: 'https://revistas.sena.edu.co/index.php/RETO/article/view/2863',
    },
    {
      referencia:
        'Mora García, L. A. (2023). Gestión logística integral: Las mejores prácticas en la cadena de abastecimiento (3.ª ed.). Ecoe Ediciones.',
      link: 'https://www.ecoeediciones.com/wp-content/uploads/2023/01/9789585035676-9789585035683-Gestion-logistica-integral.-Las-mejores-practicas-en-la-cadena-de-abastecimiento-3ra-edicion-contenido.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Quintero Guzmán',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
