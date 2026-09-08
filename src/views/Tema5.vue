<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Capacidad y trazabilidad logística

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema5/img_1.png", alt="Trabajador tomando una caja de una estantería en una bodega")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 La capacidad y la trazabilidad logística constituyen elementos fundamentales para garantizar el flujo eficiente de productos dentro de la cadena de suministro. Su adecuada gestión permite optimizar el uso de los recursos, controlar el movimiento de las mercancías y asegurar el seguimiento de los productos desde su origen hasta el consumidor final.

    separador

    #t_5_1
    .titulo-segundo.color-primario
      h2 5.1 Capacidad instalada

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema5/img_5.png", class="img-fluid", alt="Equipo de trabajo revisando indicadores en pantallas y documentos en una oficina")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") La capacidad instalada corresponde al máximo nivel de producción o prestación de servicios que una organización puede alcanzar utilizando la infraestructura, tecnología, equipos y talento humano disponibles durante un período determinado. Este indicador permite evaluar el potencial operativo de la empresa y planificar adecuadamente la utilización de sus recursos.
        .tarjeta.color-acento-botones-vc.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 El análisis de la capacidad instalada facilita la toma de decisiones relacionadas con ampliaciones de infraestructura, adquisición de equipos, contratación de personal y programación de la producción, permitiendo responder oportunamente a las variaciones de la demanda y mejorar la eficiencia de las operaciones logísticas.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Grupo Nutresa evalúa permanentemente la capacidad instalada de sus plantas de producción para garantizar que la fabricación de alimentos responda oportunamente al comportamiento del mercado nacional e internacional, optimizando el uso de maquinaria, personal y recursos tecnológicos.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_5_2
    .titulo-segundo.color-primario
      h2 5.2 Capacidad de almacenamiento

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones-vc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_3.png')})`}"
        role="img"
        aria-label="Trabajadores revisando cajas en los pasillos de una bodega"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La capacidad de almacenamiento representa el volumen máximo de mercancías que puede ser recibido, organizado y conservado dentro de una bodega o centro de distribución bajo condiciones adecuadas de seguridad, accesibilidad y conservación. Su adecuada administración permite optimizar el aprovechamiento del espacio físico, facilitar la ubicación de productos, reducir tiempos de operación y mejorar la productividad de los procesos de recibo, almacenamiento y despacho.

    p.mb-5(data-aos="zoom-in-right") Entre los factores que influyen en la capacidad de almacenamiento se encuentran:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Factores de la capacidad de almacenamiento
    .tabla-a.mb-5(data-aos="flip-left")
      table
        thead
          tr
            th.col-auto.col-lg-3 Factor
            th.col-auto.col-lg-auto Descripción
        tbody
          tr
            td.text-start Dimensiones de la bodega
            td.text-start Determinan el espacio físico disponible para almacenar mercancías y desarrollar las operaciones. Deben considerarse las áreas destinadas a recepción, almacenamiento, preparación de pedidos, despacho y circulación.
          tr
            td.text-start Altura útil de almacenamiento
            td.text-start Corresponde a la altura que puede aprovecharse efectivamente para almacenar mercancías, considerando las características de la edificación, los sistemas de almacenamiento, equipos y condiciones de seguridad.
          tr
            td.text-start Tipo de estanterías
            td.text-start Influye en la cantidad de productos que pueden ubicarse y en el aprovechamiento vertical y horizontal del espacio. Su selección depende del tipo de carga y operación realizada.
          tr
            td.text-start Rotación de inventarios
            td.text-start Determina la frecuencia con que los productos ingresan y salen de la bodega. Los artículos de alta rotación requieren ubicaciones accesibles que faciliten su preparación y movilización.
          tr
            td.text-start Equipos de manipulación
            td.text-start Condicionan la distribución del espacio y los requerimientos de circulación. Montacargas, transpaletas y otros equipos requieren pasillos y áreas de maniobra que reducen el espacio destinado directamente al almacenamiento.
          tr
            td.text-start Características de los productos
            td.text-start El peso, volumen, dimensiones, fragilidad, peligrosidad y condiciones de conservación determinan cómo pueden almacenarse los productos y cuánto espacio requieren dentro de la instalación.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Almacenes Éxito gestionan la capacidad de sus centros de distribución mediante sistemas de almacenamiento que permiten organizar miles de referencias de productos según su rotación, peso, dimensiones y condiciones de conservación, optimizando el espacio disponible y agilizando los procesos logísticos.

    separador

    #t_5_3
    .titulo-segundo.color-primario
      h2 5.3 Capacidad de distribución

    .row.justify-content-center.mb-5
      .col-12.col-lg-3.mb-0
        p.mb-4(data-aos="zoom-in-right") La capacidad de distribución corresponde a la posibilidad que tiene una organización para movilizar y entregar mercancías a sus clientes dentro de los tiempos, cantidades y condiciones previamente establecidas.
        p.mb-0(data-aos="zoom-in-right") Su evaluación considera aspectos como:
      .col-12.col-lg-9.mb-4.mb-lg-0
        TabsA.color-acento-contenido.uno(data-aos="zoom-in-right")
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Disponibilidad de vehículos")
            h4.mb-4 Disponibilidad de vehículos
            p.mb-0 Considera la cantidad, tipo y estado operativo de los vehículos destinados a los despachos, así como su adecuación al volumen y características de las mercancías que deben transportarse.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Cobertura geográfica")
            h4.mb-4 Cobertura geográfica
            p.mb-0 Determina el alcance territorial de la operación de distribución, teniendo en cuenta la ubicación de los clientes, distancias, rutas disponibles, condiciones de acceso y zonas que pueden ser atendidas.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Frecuencia de despachos")
            h4.mb-4 Frecuencia de despachos
            p.mb-0 Establece la periodicidad con que las mercancías pueden enviarse hacia los diferentes destinos, según la demanda, disponibilidad de productos, programación de pedidos y compromisos de entrega establecidos.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="Capacidad de carga")
            h4.mb-4 Capacidad de carga
            p.mb-0 Indica el volumen o peso máximo de mercancías que pueden movilizar los vehículos, facilitando la asignación de pedidos y el aprovechamiento de los recursos disponibles para cada recorrido.

    .row.justify-content-center.cursor-pointer.mb-5
      .col-12.col-md-9.col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_4.png", class="img-fluid", alt="Mano interactuando con una tableta que muestra un mapa de rutas de distribución")
          .crd_hover_txt--body_2
            h4.mb-3 Recursos tecnológicos
            p.mb-0 Integran sistemas y herramientas para programar despachos, optimizar rutas, localizar vehículos, monitorear entregas y gestionar información, facilitando la coordinación y el control de las operaciones de distribución.
      .col-12.col-md-9.col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_5.png", class="img-fluid", alt="Equipo de trabajo revisando indicadores en pantallas y documentos en una oficina")
          .crd_hover_txt--body_2
            h4.mb-3 Personal operativo
            p.mb-0 Incluye conductores, auxiliares y demás trabajadores encargados del cargue, transporte, descargue y entrega de mercancías, cuya disponibilidad, experiencia y competencias contribuyen al cumplimiento de la operación.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10
        p.mb-0(data-aos="zoom-in-right") Una adecuada capacidad de distribución permite mejorar el nivel de servicio, disminuir tiempos de entrega y fortalecer la competitividad empresarial.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Coordinadora Mercantil administra su capacidad de distribución mediante una amplia red nacional de centros operativos, vehículos y rutas logísticas que le permiten atender diariamente miles de envíos en diferentes ciudades del país con altos niveles de cumplimiento.

    separador

    #t_5_4
    .titulo-segundo.color-primario
      h2 5.4 Trazabilidad interna

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        p.mb-3(data-aos="zoom-in-right") La trazabilidad interna corresponde al seguimiento que realiza una organización sobre el recorrido de los productos durante los procesos desarrollados dentro de sus propias instalaciones. Este control permite conocer la ubicación de las mercancías, las actividades ejecutadas y los responsables de cada operación.
        p.mb-0(data-aos="zoom-in-right") La aplicación de sistemas de trazabilidad interna fortalece el control de inventarios, facilita las auditorías, reduce errores operativos y mejora la gestión de la información durante los procesos logísticos.
      .col-10.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema5/img_6.png", class="img-fluid", alt="Cajas con marcadores de ubicación sobre un mapa, junto a un computador portátil")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Tecnoquímicas S.A. implementa sistemas de identificación y control que permiten registrar el recorrido de medicamentos desde la recepción de materias primas hasta el almacenamiento del producto terminado, garantizando el cumplimiento de los requisitos de calidad y trazabilidad.

    separador

    #t_5_5
    .titulo-segundo.color-primario
      h2 5.5 Trazabilidad externa

    .tarjeta--bg-img.color-secundario-vc.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema5/img_7.png", class="img-fluid p-0 w-100 h-100 object-fit-cover", alt="Mano interactuando con un panel digital de indicadores logísticos")
        .col-12.col-lg-7.p-5.ps-5.ps-lg-3
          p.mb-0 La trazabilidad externa permite realizar el seguimiento de las mercancías durante su desplazamiento entre proveedores, fabricantes, operadores logísticos, distribuidores y clientes finales.

    p.mb-3(data-aos="zoom-in-right") Este proceso facilita el control de las entregas, mejora la comunicación entre los diferentes actores de la cadena de suministro y fortalece la confianza de los consumidores.
    p.mb-5(data-aos="zoom-in-right") La implementación de sistemas de trazabilidad externa facilita la localización de productos, la gestión de devoluciones, el control de incidencias y el cumplimiento de requisitos legales relacionados con la seguridad y calidad de los bienes comercializados.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Servientrega ofrece servicios de seguimiento en línea que permiten conocer el estado y la ubicación de los envíos durante todo el proceso de transporte, desde la recepción del paquete hasta la entrega al destinatario.

    separador

    #t_5_6
    .titulo-segundo.color-primario
      h2 5.6 Codificación GS1-128

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema5/img_8.png", class="img-fluid", alt="Mano sosteniendo un teléfono con un mapa de ruta, junto a una caja con código de barras")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") La codificación GS1-128 es un estándar internacional utilizado para identificar unidades logísticas mediante códigos de barras que contienen información detallada sobre los productos y las operaciones de la cadena de suministro. Este sistema facilita la captura automática de datos y mejora la trazabilidad de las mercancías durante los procesos de almacenamiento, transporte y distribución.
        .tarjeta.color-secundario-vc.p-4.mb-3(data-aos="zoom-in-right")
          p.mb-0 El estándar GS1-128 permite incorporar información como número de lote, fecha de vencimiento, cantidad, número de serie y otros datos logísticos mediante identificadores de aplicación, favoreciendo la interoperabilidad entre empresas y fortaleciendo el control de las operaciones.
        p.mb-0(data-aos="zoom-in-right") Su utilización contribuye a disminuir errores en el registro de información, agilizar los procesos de recepción y despacho, mejorar la gestión de inventarios y garantizar la trazabilidad completa de los productos dentro de la cadena de suministro.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") DHL Supply Chain utiliza estándares internacionales de identificación como GS1-128 para registrar y controlar unidades logísticas durante las operaciones de almacenamiento y distribución, facilitando la captura automática de información y el seguimiento de las mercancías a lo largo de la cadena de suministro.
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
                  p.mb-0 Video sugerido: Gestión de la cadena de suministro. A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con capacidad y trazabilidad logística:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=rXOmpRxRYkw" target="_blank")
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
                  p.mb-0 Lectura sugerida: Trazabilidad en la cadena de valor de la Industria. Se invita al aprendiz a profundizar en capacidad y trazabilidad logística, a través del artículo:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.minsait.com/cms-content/importacion/newsroom_documents/trazabilidadcadenavalorindustria_b.pdf" target="_blank")
                    span Ir al recurso
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
