<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación de requerimientos logísticos

    .bloque-texto-g.color-acento-botones-vc.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_1.png')})`}"
        role="img"
        aria-label="Vista aérea de una grúa pórtico cargando un contenedor en un buque portacontenedores"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La planeación de requerimientos logísticos permite anticipar y organizar los recursos necesarios para responder de manera eficiente a las necesidades de la operación y la demanda.

    .tarjeta.color-acento-contenido-v.py-4.px-5.mb-0(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-11.mb-0.mb-4.mb-lg-0
          p.mb-0(data-aos="zoom-in-right") Este proceso considera materiales, inventarios, almacenamiento, transporte, personal, equipos y tiempos, facilitando su disponibilidad en el momento y lugar requeridos, evitando faltantes o excesos y favoreciendo la continuidad de los procesos que integran la cadena de suministro.
        .col-8.col-lg-1.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema3/img_2.png", class="img-fluid", alt="Mano sosteniendo una caja de cartón embalada")

    separador

    #t_3_1
    .titulo-segundo.color-primario
      h2 3.1 Análisis agregado

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema3/img_3.png", alt="Trabajadora etiquetando una caja junto a un computador portátil con un sistema de gestión")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El análisis agregado es una herramienta de planeación utilizada para estimar la demanda y definir los recursos necesarios durante un horizonte de tiempo determinado. Su propósito consiste en equilibrar la capacidad de producción, la disponibilidad de inventarios y los requerimientos del mercado, optimizando el uso de materiales, personal y equipos.

    p.mb-5(data-aos="zoom-in-right") Este análisis integra información relacionada con:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src="@/assets/curso/tema3/img_5.png", class="img-fluid", alt="Icono de una bombilla junto a un cuaderno de notas, que representa los pronósticos de ventas")
          h4.text-center Pronósticos de ventas
          p.text-center Estiman el comportamiento futuro de la demanda mediante datos históricos, tendencias y condiciones del mercado, proporcionando una referencia para planificar anticipadamente los niveles de producción, inventarios y recursos logísticos requeridos.
      .col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src="@/assets/curso/tema3/img_6.png", class="img-fluid", alt="Icono de una fábrica, que representa la capacidad instalada")
          h4.text-center Capacidad instalada
          p.text-center Representa el nivel máximo de producción u operación que puede alcanzar la organización con la infraestructura, equipos, tecnología y condiciones disponibles durante un periodo determinado, permitiendo identificar posibles limitaciones frente a la demanda.
      .col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src="@/assets/curso/tema3/img_7.png", class="img-fluid", alt="Icono de un montacargas transportando cajas, que representa los niveles de inventario")
          h4.text-center Niveles de inventario
          p.text-center Reflejan las cantidades de materias primas, productos en proceso o terminados disponibles en un momento determinado, permitiendo establecer necesidades de reposición y mantener un equilibrio entre disponibilidad, demanda y costos asociados.
      .col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-02.border.shadow.p-4.mb-0.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src="@/assets/curso/tema3/img_8.png", class="img-fluid", alt="Icono de un grupo de personas junto a un engranaje, que representa los recursos disponibles")
          h4.text-center Recursos disponibles
          p.text-center Comprenden el personal, materiales, equipos, instalaciones y medios necesarios para ejecutar las operaciones previstas, cuya disponibilidad permite determinar si la organización puede responder a los requerimientos de producción y logística proyectados.

    separador

    #t_3_2
    .titulo-segundo.color-primario
      h2 3.2 Plan agregado

    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-5(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema3/img_9.png", class="img-fluid", alt="Cuaderno con la palabra Plan escrita a mano, junto a una calculadora y una caja de embalaje")
      .col-12.col-lg-8.mb-0.mb-5
        p.mb-3(data-aos="zoom-in-right") El plan agregado corresponde al proceso mediante el cual la organización establece el nivel general de producción, inventarios, capacidad operativa y utilización de recursos para atender la demanda prevista durante un período determinado.
        .tarjeta.color-secundario-vc.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 Este plan constituye el enlace entre la planeación estratégica y la programación detallada de las operaciones. La elaboración del plan agregado permite coordinar las áreas de producción, compras, almacenamiento y logística, favoreciendo una utilización eficiente de los recursos y garantizando la continuidad de las operaciones dentro de la cadena de suministro.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Grupo Nutresa desarrolla planes agregados para coordinar la producción de sus diferentes líneas de alimentos, ajustando la capacidad de sus plantas y la disponibilidad de materias primas de acuerdo con las proyecciones de demanda nacional e internacional.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_3_3
    .titulo-segundo.color-primario
      h2 3.3 Programa maestro de producción (MPS)

    p.mb-3(data-aos="zoom-in-right") El Programa Maestro de Producción (#[em Master Production Schedule - MPS]) es una herramienta de planeación que determina qué productos deben fabricarse, en qué cantidades y en qué períodos, de acuerdo con la demanda proyectada y la capacidad disponible de la organización.
    p.mb-5(data-aos="zoom-in-right") El MPS permite coordinar la producción con las necesidades del mercado,

    .row.justify-content-center.cursor-pointer.mb-5
      .col-lg-4.col-md-9.col-11.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_10.png", class="img-fluid", alt="Icono de una gráfica de barras con tendencia ascendente")
          .crd_hover_txt--body_2
            h4.mb-3 Programación de compras
            p.mb-0 Permite determinar qué insumos y materiales deben adquirirse y en qué momento, de acuerdo con las cantidades y fechas previstas en el programa de producción, favoreciendo un abastecimiento oportuno.
      .col-lg-4.col-md-9.col-11.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_11.png", class="img-fluid", alt="Estantería con rollos de tela de distintos colores en una bodega textil")
          .crd_hover_txt--body_2
            h4.mb-3 Disponibilidad de materiales
            p.mb-0 Busca asegurar que las materias primas, componentes e insumos necesarios se encuentren disponibles cuando sean requeridos por producción, reduciendo interrupciones ocasionadas por faltantes o retrasos en el abastecimiento.
      .col-lg-4.col-md-9.col-11.mb-4.mb-lg-0(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_12.png", class="img-fluid", alt="Trabajadora operando una máquina industrial de costura en una planta de producción")
          .crd_hover_txt--body_2
            h4.mb-3 Utilización de los recursos productivos
            p.mb-0 Favorece la coordinación del personal, maquinaria, equipos e instalaciones con las necesidades de producción programadas, procurando aprovechar la capacidad disponible y disminuir tiempos improductivos, sobrecargas y uso innecesario de recursos.

    p.mb-5(data-aos="zoom-in-right") Su correcta elaboración reduce tiempos de espera, evita faltantes y mejora el cumplimiento de los pedidos de los clientes.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Colombina S.A. utiliza el Programa Maestro de Producción para planificar la fabricación de confites, chocolates y galletas, garantizando que las diferentes plantas produzcan las cantidades necesarias para abastecer tanto el mercado nacional como las exportaciones.
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")

    separador

    #t_3_4
    .titulo-segundo.color-primario
      h2 3.4 Planificación de requerimientos de materiales (MRP)

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-4(data-aos="zoom-in-right") La Planificación de Requerimientos de Materiales (#[em Material Requirements Planning - MRP]) es un sistema que permite calcular la cantidad y el momento en que deben adquirirse o producirse los materiales necesarios para cumplir el Programa Maestro de Producción.
        p.mb-0(data-aos="zoom-in-right") El MRP considera la demanda prevista, los inventarios disponibles, los tiempos de suministro y la estructura del producto para determinar oportunamente las necesidades de abastecimiento. Su aplicación contribuye a disminuir inventarios innecesarios, evitar faltantes de materiales y mejorar la coordinación entre compras y producción.
      .col-8.col-lg-4.order-1.order-lg-2(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema3/img_13.png", class="img-fluid", alt="Brazos robóticos ensamblando la carrocería de un automóvil en una línea de producción")

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-04.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-2.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema1/img_4.png", class="img-fluid", alt="Icono de un camión de reparto")
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Toyota emplea sistemas MRP para programar el suministro de componentes automotrices requeridos en sus líneas de ensamblaje, coordinando las entregas de proveedores nacionales e internacionales con la programación de producción.

    separador

    #t_3_5
    .titulo-segundo.color-primario
      h2 3.5 Lista de materiales (BOM)

    .tarjeta--bg-img.color-secundario-vc.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema3/img_14.png", class="img-fluid p-0 w-100 h-100 object-fit-cover", alt="Estantería de bodega con llantas almacenadas")
        .col-12.col-lg-7.p-5.ps-5.ps-lg-3
            p.mb-0 La lista de materiales (#[em Bill of Materials - BOM]) es el documento que identifica todos los componentes, materias primas, insumos y cantidades requeridas para fabricar un producto determinado. Constituye una herramienta fundamental para la planeación de la producción y el cálculo de los requerimientos de materiales.

    p.mb-5(data-aos="zoom-in-right") La información contenida en la BOM facilita la programación de compras, el control de inventarios y la correcta ejecución de los procesos productivos, permitiendo conocer con precisión la composición de cada producto elaborado por la organización. Los elementos son los siguientes:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Elementos de la BOM
    .tabla-a.mb-5(data-aos="flip-left")
      table
        thead
          tr
            th.col-auto.col-lg-3 Elemento de la BOM
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-3 Ejemplo
        tbody
          tr
            td.text-start Producto terminado
            td.text-start Corresponde al bien final que se obtiene después del proceso productivo. Constituye el punto de partida de la BOM, ya que a partir de la cantidad que se desea fabricar se calculan los componentes y materiales requeridos.
            td.text-start Mesa de madera
          tr
            td.text-start Componentes principales
            td.text-start Son las partes fundamentales que se integran para conformar el producto terminado. Su identificación permite determinar qué elementos deben estar disponibles y en qué cantidades antes de iniciar o continuar el proceso de fabricación.
            td.text-start Un tablero y cuatro patas
          tr
            td.text-start Materiales e insumos
            td.text-start Comprenden los elementos utilizados para fabricar, ensamblar, acondicionar o dar acabado al producto. Aunque algunos no constituyan una pieza principal, son necesarios para cumplir las características y especificaciones establecidas.
            td.text-start Tornillos, soportes, adhesivo y pintura
          tr
            td.text-start Cantidad requerida
            td.text-start Indica cuánto se necesita de cada componente, material o insumo para fabricar una unidad del producto. Permite calcular posteriormente las cantidades totales según el volumen establecido en el programa de producción.
            td.text-start 8 tornillos por mesa
          tr
            td.text-start Unidad de medida
            td.text-start Especifica la forma en que debe cuantificarse y controlarse cada componente o material, facilitando los cálculos de requerimientos, compras e inventarios y evitando diferencias en la interpretación de las cantidades necesarias.
            td.text-start Unidades, metros, litros o kilogramos
          tr
            td.text-start Nivel de estructura
            td.text-start Representa la posición jerárquica de cada elemento dentro de la composición del producto, permitiendo visualizar la relación entre producto terminado, subconjuntos, componentes y materiales requeridos para su fabricación.
            td.text-start Nivel 0: mesa; nivel 1: tablero, patas y accesorios
          tr
            td.text-start Código o referencia
            td.text-start Corresponde a la identificación única asignada a cada producto, componente o material. Facilita su localización, registro, seguimiento y diferenciación dentro de los sistemas utilizados para gestionar producción, compras e inventarios.
            td.text-start PAT-001: pata de madera

    separador

    #t_3_6
    .titulo-segundo.color-primario
      h2 3.6 Cantidad económica de pedido (EOQ)

    p.mb-3(data-aos="zoom-in-right") La cantidad económica de pedido (#[em Economic Order Quantity - EOQ]) es un modelo de planeación que permite determinar la cantidad óptima de unidades que deben solicitarse en cada pedido para minimizar los costos totales asociados al inventario, incluyendo los costos de ordenar y los costos de almacenamiento.
    p.mb-5(data-aos="zoom-in-right") Esta se determina por la siguiente relación:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
      h5 Figura 1.
      |    Relación de la cantidad económica de pedido
    figure(data-aos="flip-left").mb-5
      img(src='@/assets/curso/tema3/img_15.svg', class="img-fluid d-none d-lg-block", alt="La figura muestra la grafica que representa la relación entre la cantidad de pedido y los costos asociados a la gestión de inventarios. Muestra cómo el costo de ordenar disminuye al aumentar el tamaño del pedido, mientras el costo de mantenimiento se incrementa. La combinación de ambos genera una curva de costo total cuyo punto mínimo identifica la cantidad económica de pedido (Q*), orientada a equilibrar los costos de inventario. ").mb-3
      img(src='@/assets/curso/tema3/img_16.svg', class="img-fluid d-block d-lg-none", alt="La figura muestra la grafica que representa la relación entre la cantidad de pedido y los costos asociados a la gestión de inventarios. Muestra cómo el costo de ordenar disminuye al aumentar el tamaño del pedido, mientras el costo de mantenimiento se incrementa. La combinación de ambos genera una curva de costo total cuyo punto mínimo identifica la cantidad económica de pedido (Q*), orientada a equilibrar los costos de inventario. ").mb-3
      figcaption Nota. SENA, (2026).

    p.mb-4(data-aos="zoom-in-right") Donde:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-06.py-4.px-5.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-9.mb-0.mb-4.mb-lg-0
              ul.lista-ul.color-secundario
                li.mb-3
                  i.lista-ul__vineta
                  | #[strong Q*:] Cantidad económica u óptima que debe solicitarse en cada pedido.
                li.mb-3
                  i.lista-ul__vineta
                  | #[strong D – Demanda:] Cantidad total de unidades que se espera consumir o vender durante el periodo analizado, generalmente un año.
                li.mb-3
                  i.lista-ul__vineta
                  | #[strong S – Costo por pedido:] Costo asociado con generar y gestionar una orden, incluyendo actividades administrativas, recepción y procesamiento del pedido.
                li.mb-0
                  i.lista-ul__vineta
                  | #[strong H – Costo de mantenimiento:] Costo de conservar una unidad en inventario durante el periodo, considerando almacenamiento, seguros, deterioro, obsolescencia y otros costos asociados.
            .col-8.col-lg-3.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src="@/assets/curso/tema3/img_18.png", class="img-fluid", alt="Icono de un camión de reparto")

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10
        p.mb-0(data-aos="zoom-in-right") La aplicación del modelo EOQ contribuye a mejorar la gestión de inventarios, optimizar el flujo de materiales y reducir costos operativos, favoreciendo el equilibrio entre la disponibilidad de productos y la utilización eficiente de los recursos financieros de la organización.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-01.p-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0.mb-4.mb-lg-0
              h4.mb-3(data-aos="zoom-in-right") Ejemplo empresarial
              p.mb-0(data-aos="zoom-in-right") Olímpica S.A. puede utilizar el modelo EOQ para calcular la cantidad óptima de productos de alta rotación que debe solicitar a sus proveedores, evitando tanto el desabastecimiento como el exceso de inventario en sus centros de distribución y supermercados.
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
                  p.mb-0 Video sugerido: Planificación de Recursos. A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con planeación de requerimientos logísticos:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=43IyGaZzVMw" target="_blank")
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
                  p.mb-0 Lectura sugerida: El MRP en la gestión de inventarios. Se invita al aprendiz a profundizar en planeación de requerimientos logísticos, a través del siguiente artículo:
                .col-sm-auto.text-center
                  a.boton.color-acento-botones(href="https://www.redalyc.org/pdf/4655/465545875010.pdf" target="_blank")
                    span Ir al recurso
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
