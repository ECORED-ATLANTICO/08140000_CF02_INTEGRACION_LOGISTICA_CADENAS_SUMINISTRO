<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Capacidad y trazabilidad logística
    
    #t_5_1
    .titulo-segundo.color-primario
      h2 5.1 Capacidad instalada

    separador
    #t_5_2
    .titulo-segundo.color-primario
      h2 5.2 Capacidad de almacenamiento

    separador
    #t_5_3
    .titulo-segundo.color-primario
      h2 5.3 Capacidad de distribución

    separador
    #t_5_4
    .titulo-segundo.color-primario
      h2 5.4 Trazabilidad interna

    separador
    #t_5_5
    .titulo-segundo.color-primario
      h2 5.5 Trazabilidad externa

    separador
    #t_5_6
    .titulo-segundo.color-primario
      h2 5.6 Codificación GS1-128

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
