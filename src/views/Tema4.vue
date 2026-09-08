<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diseño de redes logísticas

    .tarjeta--bg-img.color-acento-contenido-v.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema4/img_1.png", class="img-fluid p-0 w-100 h-100 object-fit-cover", alt="Trabajadora revisando un documento junto a una tableta y estantes con cajas en una bodega")
        .col-12.col-lg-7.p-5.ps-5.ps-lg-3
            p.mb-0 El diseño de redes logísticas permite organizar el flujo de mercancías desde los proveedores hasta el cliente final mediante la integración eficiente de los procesos de transporte, almacenamiento y distribución. Una adecuada planificación de estas redes optimiza los recursos, reduce costos operativos y fortalece el nivel de servicio de la organización.

    separador

    #t_4_1
    .titulo-segundo.color-primario
      h2 4.1 Redes de transporte

    p.mb-4(data-aos="zoom-in-right") Las redes de transporte corresponden al conjunto de rutas, medios, infraestructura y recursos utilizados para movilizar mercancías entre los diferentes actores de la cadena de suministro. Su diseño busca garantizar que los productos lleguen al lugar correcto, en el tiempo previsto y bajo las condiciones de calidad y seguridad establecidas por la organización.
    p.mb-5(data-aos="zoom-in-right") La selección de una red de transporte depende de factores como:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-contenido.uno(data-aos="zoom-in-right")
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Tipo de mercancía")
            h4.mb-4 Tipo de mercancía
            p.mb-0 Considera las características físicas, conservación, fragilidad y condiciones especiales de la carga para seleccionar su transporte. Ejemplo: una empresa de alimentos utiliza vehículos refrigerados para distribuir productos congelados sin interrumpir la cadena de frío.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Volumen de carga")
            h4.mb-4 Volumen de carga
            p.mb-0 Determina la cantidad, peso y espacio ocupado por la mercancía para seleccionar vehículos y aprovechar su capacidad. Ejemplo: una distribuidora consolida pedidos de gran volumen en un tractocamión para movilizarlos hacia un centro de distribución.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Distancias")
            h4.mb-4 Distancias
            p.mb-0 Analiza la separación entre origen, destinos y puntos intermedios para establecer rutas, tiempos y alternativas de transporte. Ejemplo: una empresa utiliza rutas terrestres para abastecer clientes ubicados en ciudades cercanas a su centro de distribución.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Costos operativos")
            h4.mb-4 Costos operativos
            p.mb-0 Comprenden los gastos asociados con combustible, conductores, mantenimiento, peajes, seguros y utilización de vehículos. Ejemplo: una empresa consolida entregas de una misma zona para reducir recorridos y disminuir el costo por pedido transportado.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Infraestructura disponible")
            h4.mb-4 Infraestructura disponible
            p.mb-0 Considera las condiciones de carreteras, puertos, terminales, centros logísticos y accesos necesarios para movilizar mercancías. Ejemplo: una empresa utiliza vehículos pequeños para atender clientes ubicados en zonas urbanas con restricciones para camiones de gran tamaño.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Niveles de servicio requeridos")
            h4.mb-4 Niveles de servicio requeridos
            p.mb-0 Determinan las condiciones de tiempo, puntualidad, frecuencia y confiabilidad que debe cumplir el transporte según las necesidades del cliente. Ejemplo: una distribuidora programa entregas prioritarias para supermercados que manejan ventanas horarias específicas de recepción.

      .col-8.col-lg-4(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema4/img_2.png", class="img-fluid", alt="Repartidor cargando cajas en la parte trasera de una furgoneta")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        p.mb-0(data-aos="zoom-in-right") Una adecuada planificación permite optimizar recorridos, reducir tiempos de entrega y mejorar la utilización de los recursos logísticos.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Servientrega opera una red nacional de transporte integrada por centros logísticos, plataformas de clasificación y una flota terrestre y aérea que le permite distribuir documentos y mercancías a diferentes regiones del país, optimizando tiempos de entrega y garantizando la trazabilidad de los envíos.

    separador

    #t_4_2
    .titulo-segundo.color-primario
      h2 4.2 Redes de distribución

    .bloque-texto-g.color-acento-botones-vc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_3.png')})`}"
        role="img"
        aria-label="Bodega de distribución con cajas apiladas en su interior"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las redes de distribución comprenden el conjunto de instalaciones, puntos de almacenamiento, medios de transporte, rutas y actores que se articulan para movilizar los productos desde los lugares de origen hasta los clientes o consumidores finales. Su configuración busca garantizar disponibilidad, cobertura y cumplimiento de las entregas, procurando un equilibrio entre costos logísticos y nivel de servicio.
        br
        p.mb-0 En una red de distribución participan diferentes actores e instalaciones que intervienen en el almacenamiento, movilización, comercialización y entrega de los productos, los más importantes son:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .tarjeta.tarjeta--fondo-img-05.p-2.p-md-4.px-3.p-lg-4.p-xl-5.mb-3(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.p-5(tipo="b").mb-0
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Plantas de producción
                  p.mb-0 Son instalaciones donde se elaboran o acondicionan los productos. Constituyen el punto de origen desde el cual las mercancías ingresan a la red para continuar hacia almacenamiento, distribución o clientes.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Centros de distribución
                  p.mb-0 Reciben, almacenan, organizan y consolidan mercancías para atender diferentes zonas o clientes. Facilitan la gestión de inventarios, preparación de pedidos y coordinación de despachos dentro de la red.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Operadores logísticos
                  p.mb-0 Son empresas especializadas que gestionan actividades como almacenamiento, transporte, preparación de pedidos y distribución para otras organizaciones, aportando infraestructura, tecnología y experiencia para facilitar el flujo de mercancías.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Transportadores
                  p.mb-0 Ejecutan el traslado físico de las mercancías entre los diferentes puntos de la red, utilizando vehículos y medios adecuados según el tipo de carga, distancia, ruta y condiciones de entrega.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Distribuidores
                  p.mb-0 Actúan como intermediarios que reciben productos del fabricante para abastecer mercados, zonas o clientes específicos, facilitando la cobertura geográfica y acercando las mercancías a los diferentes canales de comercialización.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Puntos de venta
                  p.mb-0 Son establecimientos donde los productos se encuentran disponibles para su comercialización al consumidor final. Reciben mercancías de fabricantes o distribuidores y representan uno de los últimos puntos de la red.
      .col-12.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img_4.png", class="img-fluid", alt="Estibas de cajas apiladas junto a un gato hidráulico en una bodega")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Grupo Éxito dispone de una red de distribución conformada por centros de distribución estratégicamente ubicados que abastecen sus diferentes formatos comerciales, permitiendo mantener la disponibilidad de productos en supermercados, hipermercados y tiendas de proximidad en todo el territorio nacional.

    separador

    #t_4_3
    .titulo-segundo.color-primario
      h2 4.3 Rutas críticas

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema4/img_5.png", class="img-fluid", alt="Conductor consultando una ruta en una aplicación de mapas desde su vehículo")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") Las rutas críticas corresponden a la secuencia de actividades que determina el tiempo mínimo requerido para ejecutar un proceso logístico o un proyecto determinado. Estas actividades poseen una relación de dependencia que impide retrasos, ya que cualquier variación en una de ellas afecta directamente la duración total de la operación.
        .tarjeta.color-acento-botones-vc.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 La identificación de la ruta crítica permite priorizar recursos, controlar tiempos de ejecución y minimizar riesgos asociados a retrasos en la cadena de suministro, facilitando la programación eficiente de las actividades logísticas.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Durante el lanzamiento de un nuevo proyecto de vivienda, Marval S.A. debe coordinar actividades para la construcción de las unidades habitacionales, que van desde la preparación del sitio, hasta todos los trabajos civiles tanto en interiores como en exteriores. La identificación de la ruta crítica permite garantizar que las viviendas estén disponibles para exhibición en la fecha prevista para su comercialización.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_4_4
    .titulo-segundo.color-primario
      h2 4.4 Método PERT

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema4/img_6.png", alt="Camiones de carga junto a un cronómetro y cajas de embalaje")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El método PERT (#[em Program Evaluation and Review Technique]) es una herramienta de planeación utilizada para estimar y controlar el tiempo de ejecución de proyectos mediante el análisis de actividades y sus relaciones de dependencia. Este método considera escenarios optimistas, probables y pesimistas para calcular la duración esperada de cada actividad y del proyecto en su conjunto.

    p.mb-5(data-aos="zoom-in-right") En logística puede utilizarse para planificar proyectos u operaciones donde existen actividades dependientes y tiempos con cierto grado de incertidumbre. PERT considera tres estimaciones para calcular el tiempo esperado de cada actividad:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Estimaciones PERT
    .tabla-a.mb-5(data-aos="flip-left")
      table
        thead
          tr
            th.col-auto.col-lg-4 Estimación
            th.col-auto.col-lg-auto Descripción
        tbody
          tr
            td.text-start Tiempo optimista (O)
            td.text-start Tiempo mínimo en que podría realizarse la actividad si las condiciones son favorables.
          tr
            td.text-start Tiempo más probable (M)
            td.text-start Duración considerada más realista según las condiciones normales de ejecución.
          tr
            td.text-start Tiempo pesimista (P)
            td.text-start Tiempo máximo estimado cuando se presentan dificultades, retrasos o condiciones desfavorables.

    p.mb-5(data-aos="zoom-in-right") El tiempo esperado (TE) se calcula mediante: 
      strong TE = (O + 4M + P) / 6

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.color-primario-vc.py-4.px-5.mb-0(data-aos="zoom-in-right")
          p.mb-3(data-aos="zoom-in-right")
            strong Ejemplo:
            |  para realizar el traslado de mercancía desde una bodega hasta un centro de distribución se estiman 4 horas en condiciones favorables, 6 horas normalmente y 10 horas ante posibles retrasos.
          h5.mb-0(data-aos="zoom-in-right") TE = (4 + (4 × 6) + 10) / 6 = 6,33 horas
      .col-8.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema4/img_7.png", class="img-fluid", alt="Bodega de distribución con cajas apiladas en su interior")

    p.mb-3(data-aos="zoom-in-right") Por tanto, para efectos de planificación, la empresa puede considerar aproximadamente 6,3 horas como tiempo esperado para esta actividad.

    p.mb-5(data-aos="zoom-in-right") Además, cuando PERT se aplica a varias actividades relacionadas, permite construir una red de actividades, identificar sus dependencias y determinar la ruta crítica, es decir, la secuencia de actividades que condiciona directamente la duración total del proyecto u operación.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") DHL Supply Chain puede utilizar el método PERT para planificar la puesta en marcha de un nuevo centro de distribución, estimando los tiempos requeridos para adecuaciones físicas, instalación de equipos, capacitación del personal y entrada en operación de los sistemas logísticos.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_4_5
    .titulo-segundo.color-primario
      h2 4.5 Método CPM

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema4/img_8.png", class="img-fluid", alt="Trabajadora escaneando una caja mientras un compañero la recibe")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") El método CPM (Critical Path Method) es una técnica de programación que permite determinar la secuencia de actividades críticas de un proyecto cuando los tiempos de ejecución son conocidos. Su objetivo consiste en identificar las actividades que no admiten retrasos y optimizar la utilización de recursos para garantizar el cumplimiento de los cronogramas establecidos.
        .tarjeta.color-acento-botones-vc.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 La aplicación del CPM facilita el seguimiento permanente del proyecto, mejora la coordinación entre las áreas involucradas y permite establecer acciones correctivas cuando se presentan desviaciones en la programación.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Constructora Bolívar, en el desarrollo de proyectos de infraestructura logística, utiliza metodologías de programación como el CPM para coordinar actividades relacionadas con construcción de bodegas, instalación de sistemas, adecuación de patios de maniobra y entrega de las instalaciones dentro de los tiempos contractuales.
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
                  p.mb-0 Video sugerido: Foro: diseño de redes logísticas para la última milla. A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con diseño de redes logísticas:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=saNkaa9H_es" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .tarjeta.color-secundario-vc.p-4(data-aos="zoom-in-right")
          .row.justify-content-around.align-items-center
            .col-6.col-md-2.col-lg-1.mb-3.mb-sm-0
              figure
                img(src="@/assets/curso/tema1/img_30.png", alt="Ícono de una carpeta con un documento de lectura")
            .col-12.col-md-10.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lectura sugerida: Capítulo 2. Modelos de redes PERT-CPM. Se invita al aprendiz a profundizar en diseño de redes logísticas, tal como se muestra en el siguiente artículo:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://hopelchen.tecnm.mx/principal/sylabus/fpdb/recursos/r137431.PDF" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-03.py-3.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-8.col-lg-5.d-none.d-lg-block.mb-0
              img(src="@/assets/curso/tema1/img_31.png", class="img-fluid", alt="Micrófono con audífonos junto a una furgoneta de reparto, símbolo del podcast")
            .col-12.col-lg-7
              h2.mb-5 A continuación, se invita a ir al siguiente <em>podcast</em>:
              TarjetaAudio.color-primario.p-4.mb-0(
                texto="Diseño de redes logísticas: conectando el transporte con la distribución eficiente"
                :audio="require_src('@/assets/componentes/audios/audio-ej.mp3')"
                tiempo
              )
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
