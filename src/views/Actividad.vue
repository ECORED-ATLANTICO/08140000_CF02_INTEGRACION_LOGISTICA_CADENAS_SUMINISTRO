<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Parametrización de redes logísticas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de los conceptos relacionados con la parametrización de redes logísticas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de las políticas logísticas dentro de una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estandarizar y orientar las operaciones logísticas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los controles de inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las políticas logísticas orientan y estandarizan las operaciones de la cadena de suministro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál política logística contribuye directamente a garantizar el abastecimiento oportuno de materiales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Política de compras.', esCorrecta: true },
            { id: 'b', texto: 'Política tributaria.', esCorrecta: false },
            { id: 'c', texto: 'Política financiera.', esCorrecta: false },
            { id: 'd', texto: 'Política comercial.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Las políticas de compras garantizan el abastecimiento oportuno de bienes y servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué herramienta permite evaluar el desempeño de las operaciones logísticas mediante indicadores?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Método PERT.', esCorrecta: false },
            { id: 'b', texto: 'Lista de materiales (BOM).', esCorrecta: false },
            { id: 'c', texto: 'Cuadro de control.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Programa Maestro de Producción (MPS).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los cuadros de control permiten medir y hacer seguimiento al desempeño logístico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué herramienta fortalece la gestión de las relaciones con los proveedores?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'CRM.', esCorrecta: false },
            { id: 'b', texto: 'SRM.', esCorrecta: true },
            { id: 'c', texto: 'EOQ.', esCorrecta: false },
            { id: 'd', texto: 'CPM.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El SRM facilita la administración y evaluación de los proveedores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta permite programar la producción de acuerdo con la demanda prevista?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programa Maestro de Producción (MPS).',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Diagrama de flujo.', esCorrecta: false },
            { id: 'c', texto: 'ISO 28000.', esCorrecta: false },
            { id: 'd', texto: 'Cursograma analítico.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El MPS establece qué producir, cuánto producir y cuándo hacerlo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál sistema calcula los materiales requeridos para cumplir el Programa Maestro de Producción?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'EOQ.', esCorrecta: false },
            { id: 'b', texto: 'CRM.', esCorrecta: false },
            { id: 'c', texto: 'MRP.', esCorrecta: true },
            { id: 'd', texto: 'CPM.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El MRP determina los materiales necesarios para cumplir la programación de producción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué documento identifica todos los componentes necesarios para fabricar un producto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'BOM.', esCorrecta: true },
            { id: 'b', texto: 'PERT.', esCorrecta: false },
            { id: 'c', texto: 'Cuadro de control.', esCorrecta: false },
            { id: 'd', texto: 'ISO 9001.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La Lista de Materiales (BOM) relaciona todos los componentes requeridos para fabricar un producto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es la finalidad del modelo EOQ?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar la ruta crítica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar la cantidad económica de pedido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar diagramas de flujo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar relaciones con clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El modelo EOQ permite determinar la cantidad óptima de compra para minimizar costos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento integra centros de distribución, rutas y medios de transporte dentro de la cadena de suministro?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Red logística.', esCorrecta: true },
            { id: 'b', texto: 'Política financiera.', esCorrecta: false },
            { id: 'c', texto: 'Inventario físico.', esCorrecta: false },
            { id: 'd', texto: 'Organigrama empresarial.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La red logística integra los recursos necesarios para movilizar productos de manera eficiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué método identifica las actividades críticas que determinan la duración de un proyecto logístico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'GS1-128.', esCorrecta: false },
            { id: 'b', texto: 'Método CPM.', esCorrecta: true },
            { id: 'c', texto: 'SRM.', esCorrecta: false },
            { id: 'd', texto: 'CRM.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El método CPM permite identificar la ruta crítica y controlar la duración de un proyecto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué capacidad logística hace referencia al volumen máximo de mercancías que puede almacenarse en una bodega?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Capacidad de distribución.', esCorrecta: false },
            { id: 'b', texto: 'Capacidad instalada.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Capacidad de almacenamiento.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Capacidad comercial.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La capacidad de almacenamiento determina el volumen máximo de mercancías que puede conservar una bodega.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de trazabilidad permite realizar seguimiento al producto dentro de la organización?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Trazabilidad externa.', esCorrecta: false },
            { id: 'b', texto: 'Trazabilidad interna.', esCorrecta: true },
            { id: 'c', texto: 'Trazabilidad comercial.', esCorrecta: false },
            { id: 'd', texto: 'Trazabilidad financiera.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La trazabilidad interna permite controlar el recorrido del producto dentro de la empresa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál estándar internacional facilita la identificación de unidades logísticas mediante códigos de barras?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'ISO 9001.', esCorrecta: false },
            { id: 'b', texto: 'GS1-128.', esCorrecta: true },
            { id: 'c', texto: 'CPM.', esCorrecta: false },
            { id: 'd', texto: 'CRM.', esCorrecta: false },
          ],
          mensaje_correcto:
            'GS1-128 es el estándar utilizado para identificar unidades logísticas y mejorar la trazabilidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué variable indica el nivel de existencias en el cual debe generarse una nueva solicitud de abastecimiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inventario máximo.', esCorrecta: false },
            { id: 'b', texto: 'Punto de reorden.', esCorrecta: true },
            { id: 'c', texto: 'Rotación de productos.', esCorrecta: false },
            { id: 'd', texto: 'Frecuencia de reposición.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El punto de reorden indica cuándo debe realizarse una nueva solicitud de abastecimiento considerando el consumo y el tiempo de reposición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué herramienta permite clasificar y priorizar clientes considerando variables como valor de compra, frecuencia, rentabilidad y potencial de crecimiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Matriz CRM.', esCorrecta: true },
            { id: 'b', texto: 'Matriz SRM.', esCorrecta: false },
            { id: 'c', texto: 'Matriz de transporte.', esCorrecta: false },
            { id: 'd', texto: 'Cuadro de control.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La matriz CRM permite analizar y priorizar clientes para establecer estrategias comerciales y logísticas acordes con sus características y necesidades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito principal del análisis agregado dentro de la planeación de requerimientos logísticos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar las unidades logísticas mediante códigos de barras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar las rutas utilizadas para distribuir mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Equilibrar la demanda prevista con la capacidad y los recursos disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registrar los movimientos internos de los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis agregado permite estimar la demanda y establecer los recursos necesarios, procurando equilibrar capacidad, inventarios y requerimientos del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes factores debe analizarse para seleccionar adecuadamente una red de transporte?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de cargos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura jerárquica de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de proveedores registrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipo de mercancía, volumen de carga y distancia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección de una red de transporte considera características de la mercancía, volumen, distancias, costos, infraestructura y niveles de servicio requeridos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Una empresa necesita estimar la duración de una actividad logística cuyos tiempos presentan incertidumbre. ¿Qué método debería utilizar?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'EOQ.', esCorrecta: false },
            { id: 'b', texto: 'PERT.', esCorrecta: true },
            { id: 'c', texto: 'CRM.', esCorrecta: false },
            { id: 'd', texto: 'MRP.', esCorrecta: false },
          ],
          mensaje_correcto:
            'PERT permite estimar la duración esperada de las actividades utilizando tiempos optimista, más probable y pesimista.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué aspecto permite determinar el volumen o peso máximo de mercancías que puede movilizar un vehículo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Capacidad de carga.', esCorrecta: true },
            { id: 'b', texto: 'Cobertura geográfica.', esCorrecta: false },
            { id: 'c', texto: 'Frecuencia de despacho.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Disponibilidad tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La capacidad de carga permite establecer cuánto volumen o peso puede movilizar un vehículo y facilita la adecuada asignación de pedidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una empresa necesita conocer el recorrido de una mercancía desde el proveedor hasta su entrega al cliente. ¿Qué tipo de trazabilidad debe aplicar?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Trazabilidad interna.', esCorrecta: false },
            { id: 'b', texto: 'Trazabilidad operativa.', esCorrecta: false },
            { id: 'c', texto: 'Trazabilidad externa.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Trazabilidad de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La trazabilidad externa permite seguir las mercancías durante su desplazamiento entre proveedores, fabricantes, operadores logísticos, distribuidores y clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
