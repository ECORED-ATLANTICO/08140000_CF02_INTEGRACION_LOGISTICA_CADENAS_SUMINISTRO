<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación de requerimientos logísticos
    
    #t_3_1
    .titulo-segundo.color-primario
      h2 3.1 Análisis agregado

    separador
    #t_3_2
    .titulo-segundo.color-primario
      h2 3.2 Plan agregado

    separador
    #t_3_3
    .titulo-segundo.color-primario
      h2 3.3 Programa maestro de producción (MPS)

    separador
    #t_3_4
    .titulo-segundo.color-primario
      h2 3.4 Planificación de requerimientos de materiales (MRP)

    separador
    #t_3_5
    .titulo-segundo.color-primario
      h2 3.5 Lista de materiales (BOM)

    separador
    #t_3_6
    .titulo-segundo.color-primario
      h2 3.6 Cantidad económica de pedido (EOQ)

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
