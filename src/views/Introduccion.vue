<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start
      .col-lg-5
        img(src="../assets/curso/introduccion/img_1.png" alt="Imagen de introducción").mb-3      
      .col-lg-7
        p.mb-3 La integración de las cadenas de suministro requiere procesos logísticos coordinados que permitan gestionar de manera eficiente el flujo de materiales, información y recursos desde los proveedores hasta el cliente final. Para lograrlo, las organizaciones implementan políticas, herramientas de planeación y mecanismos de control que facilitan la toma de decisiones y fortalecen el desempeño de las operaciones logísticas.
        
        .tarjeta.color-acento-contenido-v.p-3.mb-5
          p.mb-3 A través de este componente formativo se desarrollan los fundamentos relacionados con las políticas logísticas, la planeación de requerimientos, los cuadros de control, las redes de transporte y distribución, así como las metodologías utilizadas para programar y optimizar las operaciones de la cadena de suministro. Asimismo, se estudian herramientas como el Programa Maestro de Producción (MPS), la Planificación de Requerimientos de Materiales (MRP), las redes logísticas, los métodos PERT y CPM, y los sistemas de trazabilidad que apoyan la gestión eficiente de los procesos.  
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
