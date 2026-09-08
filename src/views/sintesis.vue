<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Parametrización de redes y flujos logísticos aborda la gestión integral de las operaciones logísticas, iniciando con las políticas que orientan las compras, inventarios, recibo, despacho, preparación, manipulación y conservación de productos. Integra herramientas de planeación y control para evaluar proveedores, clientes, manufactura y transporte, junto con métodos para determinar requerimientos de producción, materiales e inventarios. Asimismo, desarrolla el diseño de redes de transporte y distribución mediante técnicas de programación y análisis de rutas. Finalmente, incorpora la gestión de capacidades operativas y de almacenamiento, así como mecanismos de trazabilidad interna y externa y sistemas de codificación, favoreciendo el seguimiento, control y eficiencia de los flujos logísticos a lo largo de la cadena de suministro.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura muestra la estructura jerárquica de componente formativo: Parametrización de redes y control logístico. La información se organiza en cinco áreas interrelacionadas que abarcan la orientación de las operaciones, su planeación y control, la determinación de requerimientos, el diseño de redes y la gestión de capacidades y trazabilidad. Cada área integra conceptos, herramientas y métodos aplicables a diferentes procesos de la cadena de suministro, permitiendo comprender de manera articulada cómo se planifican, organizan, controlan y optimizan los recursos, flujos y operaciones logísticas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
