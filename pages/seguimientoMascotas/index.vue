<script setup lang="ts">

</script>

<template lang="pug">
.grid.gap-4.p-4.items-center.border-b-4.border-purple-300.bg-white.rounded-md
    p.text-2xl.font-semibold.text-purple-700 Seguimiento de mascotas
    hr
    .grid.gap-4.items-center.px-3
        p.text-sm En esta sección se le da seguimiento y gestión a las mascotas que se encuentran registradas en el sistema y residen actualmente dentro del refugio del campus
    
    
    div.w-full.shadow-md
        table.border.w-full
            thead.bg-purple-300.text-center
                th.border Nombre 
                th.border Raza 
                th.border Fecha ingreso 
                th.border Peso
                th.border Edad
                th.border.w-10.whitespace-nowrap Estado de salud 
                //- th 
            tbody
                tr.text-center
                    td.border Mishi
                    td.border Gato
                    td.border 10-10-2020
                    td.border 10kg
                    td.border 2 años
                    td.border Si


</template>