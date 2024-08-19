<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

</script>

<template lang="pug">
VueFinalModal(
    content-class="fixed h-full rounded top-0 p-0 z-50 bg-white w-[50%] right-0  overflow-auto "
    content-transition="vfm-slide-right"
    overlay-transition="vfm-fade"
    :esc-to-close="false"
    border-cell 
    )
        .grid.gap-4.items-center.px-2.rounded-md(class="border-t-[10px] border-purple-700")
            .flex.justify-center.items-center
                p.text-2xl.font-semibold.text-blue-900 Registre su mascota 

            p.text-sm En este panel usted debe introducir los datos de su mascota para que el sistema pueda comenzar a darle seguimiento y a la vez usted pueda conocer el estado de su amigo peludo.

            .grid.gap-4.items-center.px-4
                .flex.flex-row.items-center.gap-3.w-full.justify-start
                    p.text-sm Nombre de su mascota: 
                    input(type="text" placeholder="Escriba aquí...").rounded.border-b-2.border-purple-300

                .flex.flex-row.items-center.gap-3.w-full.justify-start
                    p.text-sm Raza: 
                    select(placeholder="Seleccione una raza..." :value="'Seleccione una raza'" ).rounded.border-b-2.border-purple-300
                        option
                            span Pequines
                        option
                            span Husky Siberiano
                        option Pastor Aleman

                .flex.flex-row.items-center.gap-3.w-full.justify-start
                    p.text-sm Peso: 
                    input(type="number").border-b-2.border-purple-300.w-10

                .flex.flex-row.items-center.gap-3.w-full.justify-start 
                    p.text-sm ¿Está enfermo?
                    input(type="checkbox" :value="false")

                

        .flex.justify-center.w-full.mt-10        
            button.bg-green-600.rounded-md.p-2.text-white
                span Registrar Mascota    



</template>
<style scoped>
::-webkit-scrollbar{
    display: none;
}
</style>