<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diseño de redes logísticas
    
    #t_4_1
    .titulo-segundo.color-primario
      h2 4.1 Redes de transporte  

    separador
    #t_4_2
    .titulo-segundo.color-primario
      h2 4.2 Redes de distribución

    separador
    #t_4_3
    .titulo-segundo.color-primario
      h2 4.3 Rutas críticas

    separador
    #t_4_4
    .titulo-segundo.color-primario
      h2 4.4 Método PERT

    separador
    #t_4_5
    .titulo-segundo.color-primario
      h2 4.5 Método CPM

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
