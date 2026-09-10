<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación y control de operaciones logísticas

    .tarjeta--bg-img.color-primario-vc.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema2/img_1.png", class="img-fluid p-0 w-100 h-100 object-fit-cover", alt="Vista aérea de una persona registrando un pedido en un computador portátil junto a una caja y un lector de código de barras")
        .col-12.col-lg-7.p-5.ps-5.ps-lg-3
            p.mb-0 La planeación y el control de las operaciones logísticas permiten coordinar los recursos, monitorear el desempeño de los procesos y garantizar el cumplimiento de los objetivos de la cadena de suministro. Para ello, las organizaciones utilizan herramientas de seguimiento y análisis que facilitan la toma de decisiones y promueven la mejora continua.

    separador

    #t_2_1
    .titulo-segundo.color-primario
      h2 2.1 Cuadros de control

    p.mb-4(data-aos="zoom-in-right") Los cuadros de control son herramientas de gestión utilizadas para monitorear y evaluar el desempeño de los procesos logísticos mediante indicadores previamente establecidos. Su finalidad es proporcionar información confiable y oportuna que permita medir el cumplimiento de objetivos, detectar desviaciones y establecer acciones de mejora para fortalecer la eficiencia de las operaciones. Dentro de la gestión logística, los indicadores asociados a los procesos logísticos son:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 1.
      |  Indicadores asociados a procesos logísticos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        thead
          tr
            th.col-auto.col-lg-3 Proceso logístico
            th.col-auto.col-lg-3 Indicadores
            th.col-auto.col-lg-auto ¿Qué permiten medir?
        tbody
          tr
            td.text-start Abastecimiento
            td.text-start
              ul.mb-0.ps-3
                li Cumplimiento de proveedores.
                li Tiempo de abastecimiento.
            td.text-start Evaluar la oportunidad y confiabilidad del suministro, considerando el cumplimiento de las condiciones acordadas y el tiempo requerido para disponer de los productos solicitados.
          tr
            td.text-start Almacenamiento
            td.text-start
              ul.mb-0.ps-3
                li Utilización de la capacidad.
                li Tiempo de preparación de pedidos.
            td.text-start Analizar el aprovechamiento del espacio disponible y la eficiencia con que se realizan las operaciones necesarias para preparar los productos requeridos para su despacho.
          tr
            td.text-start Inventarios
            td.text-start
              ul.mb-0.ps-3
                li Rotación de inventarios.
                li Exactitud del inventario.
            td.text-start Conocer la frecuencia con que se renuevan las existencias y verificar la correspondencia entre las cantidades físicas disponibles y los registros del sistema de información.
          tr
            td.text-start Transporte
            td.text-start
              ul.mb-0.ps-3
                li Cumplimiento de entregas.
                li Utilización de capacidad vehicular.
            td.text-start Evaluar el cumplimiento de los tiempos programados de entrega y el aprovechamiento de la capacidad disponible de los vehículos utilizados para movilizar las mercancías.
          tr
            td.text-start Distribución
            td.text-start
              ul.mb-0.ps-3
                li Pedidos entregados completos.
                li Tiempo del ciclo de entrega.
            td.text-start Valorar la capacidad de entregar las cantidades y referencias solicitadas, así como controlar el tiempo requerido para trasladar los pedidos hasta su destino.
          tr
            td.text-start Servicio al cliente
            td.text-start
              ul.mb-0.ps-3
                li Pedido perfecto.
                li Tasa de devoluciones.
            td.text-start Evaluar el nivel de cumplimiento de las entregas y detectar novedades relacionadas con productos incompletos, daños, errores, devoluciones u otras situaciones que afectan la satisfacción del cliente.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Grupo Éxito utiliza cuadros de control para supervisar indicadores como nivel de servicio, cumplimiento de entregas, rotación de inventarios, disponibilidad de productos y tiempos de abastecimiento en sus centros de distribución. Esta información permite identificar oportunidades de mejora y mantener la eficiencia de su red logística.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_2_2
    .titulo-segundo.color-primario
      h2 2.2 Matriz de proveedores (SRM)

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema2/img_2.png", class="img-fluid", alt="Hombre revisando documentos junto a una caja de embalaje, símbolo de la evaluación de proveedores")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") La Gestión de Relaciones con Proveedores (#[em Supplier Relationship Management – SRM]) es una metodología que permite administrar de manera estratégica las relaciones con los proveedores mediante procesos de evaluación, seguimiento y mejora continua. Su propósito es fortalecer la colaboración entre las partes y garantizar el suministro oportuno de bienes y servicios que soportan la operación logística.
        .tarjeta.color-acento-botones-vc.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 La matriz SRM facilita la clasificación de los proveedores de acuerdo con criterios como calidad, cumplimiento en las entregas, capacidad de respuesta, costos, sostenibilidad y nivel de riesgo, permitiendo establecer planes de desarrollo y estrategias de abastecimiento más eficientes.

    .row.justify-content-center.mb-0
      .col-12.col-lg-10
        .tarjeta.color-secundario-vc.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-1.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_30.png", alt="Ícono de una carpeta con un documento")
            .col-12.col-md-10.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Llamado a la acción. Caso práctico. Matriz de proveedores (SRM). El documento explica la manera de como hacer una matriz de proveedores por medio de un caso práctico.
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/anexo_01.pdf')" target="_blank")
                    span ir al recurso

    separador

    #t_2_3
    .titulo-segundo.color-primario
      h2 2.3 Matriz de clientes (CRM)

    .bloque-texto-g.color-acento-botones-vc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_3.png')})`}"
        role="img"
        aria-label="Repartidor entregando un pedido y registrando la confirmación en una tableta junto a una clienta"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Gestión de Relaciones con Clientes (#[em Customer Relationship Management – CRM]) es una herramienta que permite clasificar, analizar y priorizar a los clientes de acuerdo con variables como valor de compra, frecuencia, rentabilidad, comportamiento, nivel de servicio requerido y potencial de crecimiento. Además, integra estrategias, procesos y herramientas orientadas a conocer las necesidades del cliente, fortalecer la comunicación y mejorar el nivel de servicio durante todas las etapas de la cadena de suministro.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") A partir del análisis de diferentes variables, la matriz CRM permite agrupar a los clientes según su importancia y comportamiento, facilitando la definición de estrategias comerciales y logísticas acordes con las características y necesidades de cada segmento.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .tarjeta.color-secundario-vc.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-1.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_30.png", alt="Ícono de una carpeta con un documento")
            .col-12.col-md-10.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Llamado a la acción. Caso práctico. Matriz de clientes (CRM). El documento explica la manera de cómo hacer una matriz de clientes por medio de un caso práctico.
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/anexo_02.pdf')" target="_blank")
                    span ir al recurso

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Homecenter Colombia analiza permanentemente la información de compra de sus clientes para planificar inventarios, programar despachos y ofrecer servicios logísticos acordes con las necesidades de cada segmento del mercado, mejorando así la experiencia de compra tanto en tiendas físicas como en canales digitales.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_2_4
    .titulo-segundo.color-primario
      h2 2.4 Control de manufactura

    p.mb-5(data-aos="zoom-in-right") El control de manufactura comprende el seguimiento y la supervisión de las actividades desarrolladas durante los procesos de producción, garantizando que los recursos, materiales y operaciones se ejecuten conforme a la planeación establecida. Este control facilita la sincronización entre producción, abastecimiento, almacenamiento y distribución dentro de la cadena de suministro.

    p.mb-5(data-aos="zoom-in-right") Dentro de este control se consideran aspectos como:

    .tarjeta.tarjeta--fondo-img-03.p-2.p-md-4.px-3.p-lg-4.p-xl-5.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-4.px-5.mb-0(tipo="a")
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Programación de la producción
                p.mb-0 Organiza qué producir, cuánto y cuándo, según demanda y recursos disponibles. Ejemplo: una empresa de bebidas programa 10.000 unidades para cubrir los pedidos previstos de la semana.
              .py-0.px-3.py-lg-3.py-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Disponibilidad de materiales
                p.mb-0 Verifica que materias primas e insumos estén disponibles oportunamente para ejecutar la producción sin interrupciones. Ejemplo: una panificadora comprueba las existencias de harina, levadura y empaques antes de iniciar la jornada productiva.
              .py-0.px-3.py-lg-3.py-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Capacidad de producción
                p.mb-0 Determina la cantidad que puede producirse utilizando los recursos disponibles durante un periodo. Ejemplo: una planta establece que puede fabricar máximo 5.000 unidades diarias considerando maquinaria, personal y jornadas de trabajo.
              .py-0.px-3.py-lg-3.py-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Calidad de la producción
                p.mb-0 Comprueba que los productos elaborados cumplan las especificaciones y requisitos establecidos antes de continuar hacia almacenamiento o distribución. Ejemplo: una empresa de alimentos verifica peso, presentación y sellado antes de liberar cada lote producido.
              .py-0.px-3.py-lg-3.py-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Cumplimiento de órdenes de producción
                p.mb-0 Compara las cantidades y tiempos programados con los resultados obtenidos para identificar desviaciones. Ejemplo: si una orden establece 2.000 unidades y se producen 1.850, la empresa analiza las causas del incumplimiento.
        .col-10.col-lg-2.mb-0.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema2/img_4.png", class="img-fluid", alt="Cajas de cartón apiladas con un marcador de ubicación, símbolo del seguimiento de la producción")

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") Su aplicación permite identificar desviaciones en los procesos, optimizar la utilización de los recursos, reducir tiempos improductivos y asegurar la disponibilidad de productos terminados para atender oportunamente la demanda del mercado.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Tecnoquímicas S.A. realiza el control de sus procesos de manufactura mediante sistemas de programación y seguimiento de la producción que permiten garantizar la disponibilidad de medicamentos y productos de cuidado personal para su distribución nacional e internacional.

    separador

    #t_2_5
    .titulo-segundo.color-primario
      h2 2.5 Matriz de transporte

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-4(data-aos="zoom-in-right") La matriz de transporte es una herramienta de planeación utilizada para organizar y evaluar las alternativas de movilización de mercancías considerando variables como origen, destino, costos, tiempos de entrega, capacidad de carga, frecuencia de despacho y nivel de servicio. Su utilización facilita la selección de las rutas y medios de transporte más eficientes para cada operación logística.
        p.mb-0(data-aos="zoom-in-right") Además de optimizar los costos de distribución, esta herramienta contribuye a mejorar la utilización de los recursos, reducir tiempos de desplazamiento y fortalecer el cumplimiento de los compromisos adquiridos con los clientes.
      .col-8.col-lg-4.order-1.order-lg-2(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema2/img_6.png", class="img-fluid", alt="Carga de mercancía empacada junto a un avión en la pista de un aeropuerto")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Coordinadora Mercantil S.A. utiliza herramientas de planeación para organizar las rutas de transporte, asignar vehículos según la capacidad requerida y optimizar la distribución de mercancías en todo el territorio nacional. Esta planificación permite mejorar los tiempos de entrega, incrementar la eficiencia operativa y garantizar un servicio confiable a sus clientes.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .tarjeta.color-primario-vc.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-1.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_29.png", alt="Ícono de reproducción de video")
            .col-12.col-md-10.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Video sugerido: #[em Webinar]: herramientas tecnológicas en las cadenas de suministro. A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con planeación y control de operación logísticas:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Qzx76km6SOg" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.mb-0
      .col-12.col-lg-10
        .tarjeta.color-secundario-vc.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-1.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_30.png", alt="Ícono de una carpeta con un documento de lectura")
            .col-12.col-md-10.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lectura sugerida: Los cuatro ejes «WMS, SCM, CRM y ERP» para la e-logística. Se invita al aprendiz a profundizar en lo relacionado a planeación y control de operaciones logísticas, a través del siguiente artículo:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://revistas.utp.ac.pa/index.php/ric/article/view/1252/1415" target="_blank")
                    span Ir al recurso
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
