<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación y control de operaciones logísticas 

    #t_2_1
    .titulo-segundo.color-primario
      h2 2.1 Cuadros de control

    separador
    #t_2_2
    .titulo-segundo.color-primario
      h2 2.2 Matriz de proveedores (SRM)

    separador
    #t_2_3
    .titulo-segundo.color-primario
      h2 2.3 Matriz de clientes (CRM)

    separador
    #t_2_4
    .titulo-segundo.color-primario
      h2 2.4 Control de manufactura

    separador
    #t_2_5
    .titulo-segundo.color-primario
      h2 2.5 Matriz de transporte
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
