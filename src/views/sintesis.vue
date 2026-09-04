<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Parametrización de redes y flujos logísticos aborda la gestión integral de las operaciones logísticas, iniciando con las políticas que orientan las compras, inventarios, recibo, despacho, preparación, manipulación y conservación de productos. Integra herramientas de planeación y control para evaluar proveedores, clientes, manufactura y transporte, junto con métodos para determinar requerimientos de producción, materiales e inventarios. Asimismo, desarrolla el diseño de redes de transporte y distribución mediante técnicas de programación y análisis de rutas. Finalmente, incorpora la gestión de capacidades operativas y de almacenamiento, así como mecanismos de trazabilidad interna y externa y sistemas de codificación, favoreciendo el seguimiento, control y eficiencia de los flujos logísticos a lo largo de la cadena de suministro.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
