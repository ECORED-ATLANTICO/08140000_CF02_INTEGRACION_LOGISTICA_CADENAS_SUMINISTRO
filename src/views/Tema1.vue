<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Políticas logísticas

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema1/img_1.png", alt="Vista aérea de un puerto con contenedores de carga, símbolo de la logística en la cadena de suministro")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 Las políticas logísticas orientan la ejecución de las actividades relacionadas con el abastecimiento, almacenamiento, producción y distribución de bienes y servicios. Su aplicación permite estandarizar procesos, optimizar recursos y garantizar el cumplimiento de los objetivos organizacionales dentro de la cadena de suministro.

    separador

    #t_1_1
    .titulo-segundo.color-primario
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema1/img_2.png", class="img-fluid", alt="Balanza de la justicia sobre libros junto a una caja de embalaje, que representa los lineamientos de las políticas logísticas")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") Las políticas logísticas corresponden al conjunto de lineamientos, criterios y directrices establecidos por una organización para planificar, controlar y coordinar las operaciones de la cadena de suministro. Estas políticas orientan la toma de decisiones relacionadas con el abastecimiento, la administración de inventarios, el almacenamiento, el transporte y la distribución de productos, buscando asegurar la eficiencia operativa y el cumplimiento de los niveles de servicio definidos por la empresa.
        .tarjeta.color-acento-botones-vc.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 La implementación de políticas logísticas favorece la estandarización de los procesos, facilita la asignación de responsabilidades y contribuye al uso adecuado de los recursos disponibles. Además, permite responder de manera oportuna a los cambios del mercado, fortalecer la competitividad empresarial y garantizar la satisfacción de los clientes mediante operaciones confiables y sostenibles.
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Grupo Éxito establece políticas logísticas para definir los niveles mínimos de inventario, las frecuencias de abastecimiento, los tiempos de reposición y las condiciones para el recibo y despacho de mercancías en sus centros de distribución y almacenes. Estas directrices permiten mantener la disponibilidad de productos y asegurar una operación uniforme en sus diferentes formatos comerciales.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2 Tipos

    .bloque-texto-g.color-acento-botones-vc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_5.png')})`}"
        role="img"
        aria-label="Balanza de la justicia y libros que representan los tipos de políticas logísticas"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las políticas logísticas establecen lineamientos que orientan la toma de decisiones y la ejecución de las operaciones relacionadas con abastecimiento, inventarios, almacenamiento, transporte, distribución y servicio. Cada una establece criterios específicos para orientar la ejecución de las actividades operativas y administrativas, garantizando la coordinación entre las diferentes áreas de la organización.

    p.mb-5(data-aos="zoom-in-right") Entre las más utilizadas se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-contenido.uno(data-aos="zoom-in-right")
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="De abastecimiento")
            h4.mb-4 De abastecimiento
            p.mb-0 Establece criterios para seleccionar proveedores, realizar compras y garantizar el suministro. Ejemplo: Grupo Éxito coordina el abastecimiento de productos considerando demanda, disponibilidad y condiciones acordadas con sus proveedores.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="De inventarios")
            h4.mb-4 De inventarios
            p.mb-0 Define niveles de existencias, reposición y controles para mantener disponibilidad sin generar excesos. Ejemplo: una cadena de supermercados establece inventarios mínimos para productos de alta rotación y activa su reposición al alcanzar el punto definido.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="De almacenamiento")
            h4.mb-4 De almacenamiento
            p.mb-0 Determina condiciones para recibir, ubicar, conservar y manipular mercancías eficientemente. Ejemplo: una empresa de alimentos establece zonas de almacenamiento según temperatura, características del producto y fechas de vencimiento.
          .tarjeta.color-secundario-vc.p-5.h-100.d-flex.flex-column.justify-content-center(titulo="De transporte")
            h4.mb-4 De transporte
            p.mb-0 Establece criterios para seleccionar medios, rutas, frecuencias y condiciones de movilización. Ejemplo: Bavaria programa vehículos y rutas de distribución según volumen de pedidos, destinos y capacidad de carga disponible.
      .col-8.col-lg-4(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema1/img_6.png", class="img-fluid", alt="Computador portátil con un listado de inventario en una bodega, junto a un ícono de ubicación")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        SlyderF.circl-arrow.mb-0(columnas="col-lg-6")
          .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src="@/assets/curso/tema1/img_8.png", class="img-fluid", alt="Icono de una caja con una flecha de retorno, que representa la logística inversa")
            h4.text-center Logística inversa
            p.text-center Establece procedimientos para devoluciones, recuperación, reutilización o disposición de productos y materiales. Ejemplo: una empresa de comercio electrónico recibe productos devueltos, verifica su condición y determina su reincorporación al inventario o disposición final.
          .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src="@/assets/curso/tema1/img_9.png", class="img-fluid", alt="Icono de una caja abierta junto a una lista de verificación")
            h4.text-center De servicio al cliente
            p.text-center Define parámetros logísticos de atención, entrega, cumplimiento y gestión de novedades. Ejemplo: Mercado Libre establece condiciones de despacho y seguimiento que permiten informar al cliente sobre el estado de su pedido.
          .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src="@/assets/curso/tema1/img_10.png", class="img-fluid", alt="Icono de una lista de verificación junto a un marcador de ubicación")
            h4.text-center De distribución
            p.text-center Orienta la forma de entregar productos desde los puntos de almacenamiento hasta los clientes. Ejemplo: una empresa de consumo masivo organiza entregas por zonas geográficas para consolidar pedidos y aprovechar la capacidad vehicular.
          .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src="@/assets/curso/tema1/img_11.png", class="img-fluid", alt="Icono de una lupa examinando una caja")
            h4.text-center De información y trazabilidad
            p.text-center Define criterios para registrar, actualizar y consultar información sobre productos y operaciones. Ejemplo: una empresa utiliza códigos de barras para registrar movimientos y conocer la ubicación de mercancías durante almacenamiento y despacho.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-4.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") Todas ellas contribuyen a reducir la incertidumbre, facilitar la toma de decisiones y promover la mejora continua de los procesos logísticos. La definición de estas políticas depende de factores como el tipo de producto, el comportamiento de la demanda, la capacidad operativa, los acuerdos con proveedores y las necesidades del mercado objetivo.
      .col-12.col-lg-8.mb-4.mb-lg-0
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Servientrega aplica políticas diferenciadas para la recepción, clasificación, transporte y entrega de envíos, estableciendo procedimientos específicos para documentos, mercancías, productos frágiles y envíos con condiciones especiales. Estas políticas permiten mantener la trazabilidad y el cumplimiento de los tiempos de entrega comprometidos con los clientes.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_1_3
    .titulo-segundo.color-primario
      h2 1.3 Políticas de compras

    .tarjeta--bg-img.color-secundario-vc.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema1/img_12.png", class="img-fluid p-0 w-100 h-100 object-fit-cover", alt="Carrito de compras con cajas de productos sobre un computador portátil, símbolo de las compras logísticas")
        .col-12.col-lg-7.p-5.ps-5.ps-lg-3
            p.mb-0 Las políticas de compras establecen los criterios que orientan la adquisición de bienes y servicios requeridos por la organización para el desarrollo de sus operaciones. Estas directrices buscan garantizar procesos de abastecimiento transparentes, oportunos y alineados con los objetivos estratégicos de la empresa.

    p.mb-5(data-aos="zoom-in-right") Dentro de estas políticas se definen aspectos como los siguientes:

    .tarjeta.tarjeta--fondo-img-03.p-2.p-md-4.px-3.p-lg-4.p-xl-5.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.py-4.px-5.mb-0(tipo="a")
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Selección y evaluación de proveedores
                p.mb-0 Comprende la aplicación de criterios para identificar, seleccionar y evaluar proveedores según su capacidad, experiencia, cumplimiento, calidad, precio y confiabilidad; con el propósito de garantizar fuentes de abastecimiento acordes con las necesidades de la organización.
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Condiciones de negociación
                p.mb-0 Orienta los acuerdos sobre precios, cantidades, descuentos, garantías, responsabilidades y demás condiciones comerciales con los proveedores, buscando relaciones favorables que contribuyan al control de costos y a la continuidad del abastecimiento.
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Criterios de calidad
                p.mb-0 Determina las especificaciones y requisitos que deben cumplir los bienes o servicios adquiridos, junto con los parámetros necesarios para verificar su conformidad antes de ser aceptados e incorporados a los procesos de la organización.
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Tiempos de entrega
                p.mb-0 Precisa los plazos y frecuencias requeridos para que los proveedores entreguen los bienes o servicios solicitados, procurando su disponibilidad oportuna y evitando interrupciones, retrasos o acumulaciones innecesarias de inventario.
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Condiciones de pago
                p.mb-0 Regula los términos para cumplir las obligaciones económicas con los proveedores, considerando plazos, anticipos, modalidades de pago, descuentos y requisitos documentales, de acuerdo con las condiciones negociadas y las políticas financieras de la organización.
              .py-0.px-3.py-lg-3.px-lg-4.py-lg-4.px-lx-5.mb-0
                h4.mb-3 Seguimiento al desempeño de los proveedores
                p.mb-0 Contempla mecanismos e indicadores para valorar periódicamente el cumplimiento del proveedor en calidad, entregas, cantidades, servicio y atención de novedades, permitiendo identificar desviaciones y orientar acciones de mejora.
        .col-10.col-lg-3.mb-0.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema1/img_14.png", class="img-fluid", alt="Furgoneta de reparto cargada con cajas de paquetería")

    p.mb-5(data-aos="zoom-in-right") Su adecuada aplicación reduce riesgos de desabastecimiento y fortalece las relaciones comerciales.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Grupo Nutresa implementa políticas de abastecimiento responsable que incluyen criterios de calidad, sostenibilidad, cumplimiento legal y desempeño de sus proveedores, promoviendo relaciones de largo plazo y garantizando la disponibilidad de materias primas para sus diferentes líneas de negocio.

    separador

    #t_1_4
    .titulo-segundo.color-primario
      h2 1.4 Políticas de inventarios

    p.mb-4(data-aos="zoom-in-right") Las políticas de inventarios determinan la forma en que la organización administra las existencias de materias primas, productos en proceso y productos terminados. Su finalidad es mantener niveles adecuados de inventario que permitan satisfacer la demanda sin generar costos excesivos por almacenamiento o pérdidas por obsolescencia.
    p.mb-5(data-aos="zoom-in-right") Estas políticas consideran variables como las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-4.mb-lg-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-acento-contenido-v")
          div(titulo="Inventario mínimo")
            p.mb-3 Cantidad mínima de existencias que debe mantenerse para atender la operación mientras ocurre la reposición y reducir riesgos de desabastecimiento.
            p.mb-0
              strong Ejemplo:
              |  una panificadora conserva permanentemente 20 sacos de harina para garantizar la continuidad de la producción.
          div(titulo="Inventario máximo")
            p.mb-3 Cantidad máxima de existencias que la organización determina almacenar para evitar sobre inventarios, costos adicionales y ocupación innecesaria de espacio.
            p.mb-0
              strong Ejemplo:
              |  un supermercado limita a 300 unidades el inventario de un producto refrigerado debido a su capacidad y vencimiento.
          div(titulo="Punto de reorden")
            p.mb-3 Nivel de inventario que indica el momento en que debe generarse una nueva solicitud de abastecimiento, considerando consumo y tiempo de reposición.
            p.mb-0
              strong Ejemplo:
              |  una distribuidora realiza un nuevo pedido cuando las existencias de una referencia disminuyen a 100 unidades.
          div(titulo="Inventario de seguridad")
            p.mb-3 Cantidad adicional de existencias mantenida para responder ante aumentos inesperados de demanda, retrasos de proveedores u otras variaciones del abastecimiento.
            p.mb-0
              strong Ejemplo:
              |  una farmacia conserva unidades adicionales de medicamentos de alta demanda para afrontar retrasos ocasionales en las entregas.
          div(titulo="Rotación de productos")
            p.mb-3 Indica la frecuencia con que los productos almacenados se venden, consumen o renuevan durante un periodo, permitiendo analizar su movimiento.
            p.mb-0
              strong Ejemplo:
              |  un supermercado identifica que los productos lácteos presentan alta rotación porque sus existencias se renuevan varias veces al mes.
          div(titulo="Frecuencia de reposición")
            p.mb-3 Determina cada cuánto tiempo deben reabastecerse las existencias según demanda, consumo, rotación y capacidad de almacenamiento.
            p.mb-0
              strong Ejemplo:
              |  un restaurante recibe frutas y verduras tres veces por semana para disponer de productos frescos sin mantener inventarios excesivos.
      .col-8.col-lg-4(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema1/img_15.png", class="img-fluid", alt="Trabajadora registrando en una tableta el inventario de cajas almacenadas en una estantería")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Alkosto administra políticas de inventario para productos tecnológicos y electrodomésticos considerando la alta rotación y la rápida obsolescencia del sector, ajustando permanentemente sus niveles de existencias de acuerdo con la demanda del mercado.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_1_5
    .titulo-segundo.color-primario
      h2 1.5 Políticas de recibo y despacho

    p.mb-4(data-aos="zoom-in-right") Las políticas de recibo y despacho establecen los procedimientos para controlar el ingreso y la salida de mercancías, asegurando que los productos sean verificados, registrados y movilizados conforme a los requisitos establecidos por la organización.
    p.mb-5(data-aos="zoom-in-right") Estas políticas contemplan actividades como:

    TabsC.color-primario.mb-5
      .py-3.px-4.py-md-4(titulo="Inspección física de la mercancía")
        .row.justify-content-center.align-items-center.mb-0
          .col-3.col-lg-1.mb-4.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema1/img_16.png", class="img-fluid", alt="Icono de un portapapeles con una caja")
          .col-12.col-lg-11
            h4(data-aos="fade-up") Inspección física de la mercancía
            p(data-aos="fade-up") Comprende la revisión de cantidades, estado, referencias, empaques y condiciones del producto durante el recibo. Ejemplo: un supermercado verifica que los productos refrigerados lleguen completos, sin daños y dentro de la temperatura requerida antes de aceptarlos.
      .py-3.px-4.py-md-4(titulo="Validación documental")
        .row.justify-content-center.align-items-center.mb-0
          .col-3.col-lg-1.mb-4.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema1/img_17.png", class="img-fluid", alt="Icono de un documento con una marca de verificación")
          .col-12.col-lg-11
            h4(data-aos="fade-up") Validación documental
            p(data-aos="fade-up") Consiste en comprobar que la mercancía corresponda con órdenes de compra, facturas, remisiones y demás documentos exigidos. Ejemplo: una bodega compara las referencias y cantidades recibidas con la orden de compra antes de autorizar su ingreso.
      .py-3.px-4.py-md-4(titulo="Registro en los sistemas de información")
        .row.justify-content-center.align-items-center.mb-0
          .col-3.col-lg-1.mb-4.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema1/img_18.png", class="img-fluid", alt="Icono de un monitor con una ficha de identificación")
          .col-12.col-lg-11
            h4(data-aos="fade-up") Registro en los sistemas de información
            p(data-aos="fade-up") Permite incorporar oportunamente los movimientos de mercancía al sistema para actualizar existencias y mantener su trazabilidad. Ejemplo: al recibir 200 unidades, el auxiliar registra la entrada en el WMS para actualizar inmediatamente el inventario disponible.
      .py-3.px-4.py-md-4(titulo="Asignación de ubicaciones de almacenamiento")
        .row.justify-content-center.align-items-center.mb-0
          .col-3.col-lg-1.mb-4.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema1/img_19.png", class="img-fluid", alt="Icono de una estantería con cajas y un marcador de ubicación")
          .col-12.col-lg-11
            h4(data-aos="fade-up") Asignación de ubicaciones de almacenamiento
            p(data-aos="fade-up") Orienta la ubicación de las mercancías considerando características, rotación, volumen, compatibilidad y condiciones de conservación. Ejemplo: un centro de distribución ubica productos de alta rotación cerca de la zona de preparación de pedidos para facilitar su movilización.
      .py-3.px-4.py-md-4(titulo="Preparación de pedidos para despacho")
        .row.justify-content-center.align-items-center.mb-0
          .col-3.col-lg-1.mb-4.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema1/img_20.png", class="img-fluid", alt="Icono de una caja con una flecha de actualización")
          .col-12.col-lg-11
            h4(data-aos="fade-up") Preparación de pedidos para despacho
            p(data-aos="fade-up") Organiza la selección, verificación, consolidación, empaque y disposición de los productos solicitados antes de su salida. Ejemplo: un centro de distribución realiza el #[em picking], verifica cantidades y consolida los pedidos por ruta antes de cargarlos en los vehículos.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") En los centros de distribución de Falabella Colombia, el recibo de mercancías incluye la verificación de cantidades, referencias y estado físico de los productos antes de autorizar su ingreso al inventario. Posteriormente, durante el despacho, cada pedido es validado nuevamente para garantizar que llegue correctamente al cliente.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_1_6
    .titulo-segundo.color-primario
      h2 1.6 Políticas de preparación de pedidos

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema1/img_21.png", alt="Trabajadora etiquetando cajas almacenadas en una estantería con ayuda de una tableta")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 Las políticas de preparación de pedidos definen los procedimientos para seleccionar, consolidar, verificar y acondicionar los productos que serán entregados al cliente. Estas directrices buscan garantizar exactitud, rapidez y calidad durante el proceso de alistamiento.

    p.mb-5(data-aos="zoom-in-right") Entre los aspectos que regulan se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img_22.png", class="img-fluid", alt="Persona embalando un objeto frágil con papel protector dentro de una caja")
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-05.p-2.p-md-4.px-3.p-lg-4.p-xl-5.mb-3(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0
            SlyderA.p-4(tipo="b").mb-0
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Métodos de #[em picking]
                  p.mb-0
                    strong Ejemplo:
                    |  un centro de distribución utiliza #[em picking] por zonas para preparar simultáneamente pedidos con múltiples referencias. Este método determina la forma de recolectar productos según volumen, pedidos y organización del almacén, mediante modalidades por pedido, zona, lote u ola.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Secuencia de preparación
                  p.mb-0
                    strong Ejemplo:
                    |  un operario sigue una ruta indicada por el WMS, comenzando por las ubicaciones más cercanas y continuando según la secuencia asignada. Esta política organiza el orden de las actividades y recorridos para recolectar y consolidar productos eficientemente.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Verificación de cantidades
                  p.mb-0
                    strong Ejemplo:
                    |  antes de consolidar un pedido, el operario escanea cada referencia y valida las unidades contra la orden registrada. Esta verificación comprueba que las unidades recolectadas correspondan con las cantidades solicitadas, evitando faltantes, sobrantes y errores.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Embalaje y etiquetado
                  p.mb-0
                    strong Ejemplo:
                    |  una empresa de comercio electrónico utiliza cajas y material protector según el tamaño y fragilidad de los artículos preparados, y cada caja recibe una etiqueta con código de barras, número de pedido, destino y datos requeridos para su distribución. El embalaje orienta la selección de materiales que protegen los productos, mientras que el etiquetado determina la información que debe incorporarse al pedido para facilitar su manejo, trazabilidad y entrega.
              .row.align-items-center.mb-0
                .col-12.mb-4.mb-lg-0
                  h3.mb-3 Control final antes del despacho
                  p.mb-0
                    strong Ejemplo:
                    |  el responsable verifica el pedido consolidado contra la orden y libera la mercancía para cargue. Este control comprende la revisión integral del pedido para confirmar productos, cantidades, embalaje, etiquetado y documentación antes de autorizar su salida.

    p.mb-5(data-aos="zoom-in-right") Su correcta aplicación contribuye a reducir devoluciones y mejorar el nivel de servicio.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Mercado Libre, a través de sus centros logísticos, aplica procedimientos estandarizados para el alistamiento de pedidos utilizando sistemas de identificación automática, verificación electrónica y control de calidad antes de la entrega a los operadores de transporte.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_1_7
    .titulo-segundo.color-primario
      h2 1.7 Políticas de manipulación, entrega y conservación de productos

    .bloque-texto-g.color-acento-botones-vc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_24.png')})`}"
        role="img"
        aria-label="Trabajador sellando una caja con cinta de embalaje en una bodega"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las políticas de manipulación, entrega y conservación establecen las condiciones necesarias para proteger las características físicas y funcionales de los productos durante las operaciones logísticas. Buscan preservar sus características, prevenir pérdidas o daños y garantizar que llegue al cliente en las condiciones de calidad y seguridad establecidas.

    p.mb-5(data-aos="zoom-in-right") Estas políticas son:

    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_25.png", class="img-fluid", alt="Persona sellando una caja de cartón con cinta adhesiva en una bodega")
          .crd_hover_txt--body
            .d-flex.align-items-center.mb-0
              i.fas.fa-circle-chevron-up(style="width: 20px; height: 40px; font-weight: 900; color: #fff; font-size: 20px; margin-right: 10px;")
              h4.mb-3 Manejo seguro de la mercancía
            p.mb-0 Orienta las prácticas y recursos utilizados para movilizar, cargar y descargar productos, evitando daños, pérdidas o accidentes. Ejemplo: en una bodega, los productos frágiles se manipulan con equipos adecuados y se mantienen identificados durante su movilización.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_26.png", class="img-fluid", alt="Trabajadores asegurando una carga paletizada con film plástico para su transporte")
          .crd_hover_txt--body
            .d-flex.align-items-center.mb-0
              i.fas.fa-circle-chevron-up(style="width: 20px; height: 40px; font-weight: 900; color: #fff; font-size: 20px; margin-right: 10px;")
              h4.mb-3 Requisitos de transporte
            p.mb-0 Comprende las condiciones que deben cumplir vehículos, equipos y procedimientos para movilizar la mercancía de forma segura. Ejemplo: los alimentos congelados se transportan en vehículos refrigerados que mantienen la temperatura requerida durante el recorrido.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_27.png", class="img-fluid", alt="Caja de cartón con símbolos de manipulación sobre una banda transportadora")
          .crd_hover_txt--body
            .d-flex.align-items-center.mb-0
              i.fas.fa-circle-chevron-up(style="width: 20px; height: 40px; font-weight: 900; color: #fff; font-size: 20px; margin-right: 10px;")
              h4.mb-3 Condiciones de almacenamiento
            p.mb-0 Determina los requerimientos de ubicación, temperatura, humedad, ventilación, apilamiento y protección según las características del producto. Ejemplo: una empresa de alimentos mantiene los productos refrigerados en cámaras con temperatura controlada para preservar sus condiciones.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_28.png", class="img-fluid", alt="Trabajador registrando información en un paquete antes de su entrega")
          .crd_hover_txt--body
            .d-flex.align-items-center.mb-0
              i.fas.fa-circle-chevron-up(style="width: 20px; height: 40px; font-weight: 900; color: #fff; font-size: 20px; margin-right: 10px;")
              h4.mb-3 Conservación de la calidad hasta la entrega
            p.mb-0 Integra prácticas de manipulación, almacenamiento, transporte y control destinadas a conservar las características del producto hasta su recepción. Ejemplo: una distribuidora verifica temperatura, empaque y condiciones de transporte para entregar productos perecederos sin afectar su calidad.

    p.mb-5(data-aos="zoom-in-right") Su implementación permite reducir pérdidas, prevenir daños, cumplir con la normativa aplicable y fortalecer la confianza de clientes y proveedores en los procesos logísticos de la organización. Ejemplo empresarial: Bavaria S.A. aplica políticas específicas para la manipulación y conservación de bebidas, controlando aspectos como el almacenamiento, la rotación de inventarios, la limpieza de las áreas de distribución y las condiciones de transporte, con el fin de preservar la calidad de sus productos hasta el consumidor final.

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
                  p.mb-0 Video sugerido. Qué es la política de inventarios. A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con políticas logísticas:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=40Mgg8UO3xQ" target="_blank")
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
                  p.mb-0 Lectura sugerida. Fundamentos de la gestión de inventarios. Se invita al aprendiz a profundizar en políticas logísticas, a través del siguiente artículo (página 32-50):
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.factory.com.co/wp-content/uploads/2019/03/Fundamentosdelagestiondeinventarios.pdf" target="_blank")
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
                texto="Políticas logísticas como ventaja competitiva en las organizaciones modernas"
                :audio="require_src('@/assets/componentes/audios/audio-ej.mp3')"
                tiempo
              )
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
