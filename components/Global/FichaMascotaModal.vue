<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import type { IMascotaResponse } from '~/models/mascota';

interface Props{
    mascota: IMascotaResponse;
}
const props = defineProps<Props>()

</script>

<template lang="pug">
VueFinalModal(
    content-class="fixed h-full rounded top-0 p-0 z-50 bg-white w-[50%] right-0  overflow-auto bg-[url(./images/patron.png)] bg-center bg-cover"
    content-transition="vfm-slide-right"
    overlay-transition="vfm-fade"
    :esc-to-close="false"
    border-cell 
)
    .grid.gap-4.border-t-4.border-purple-800.px-4(class="")
        p.text-2xl.text-purple-800.mt-2.text-center.border-b-2.border-purple-300.py-1 Ficha de la mascota

        p.text-sm Este panel detalla toda la informacion referente a esta mascota 
        .w-full.grid.gap-4.items-center.p-2.rounded-md.bg-slate-50 
            .flex.flex-row.justify-start.items-center.gap-2
                p.text-sm Nombre:
                p.text-purple-700 {{ props.mascota.nombre }}
            
            .flex.flex-row.justify-start.items-center.gap-2
                p.text-sm Peso:
                p.text-purple-700 {{ props.mascota.peso }} kg
            
            .flex.flex-row.justify-start.items-center.gap-2
                p.text-sm Edad:
                p.text-purple-700 {{ props.mascota.edad }} años 
            
            .flex.flex-row.justify-start.items-center.gap-2
                p.text-sm Estado de salud:
                p.text-purple-700(v-if="props.mascota.is_enfermo") Enfermo 
                p.text-purple-700(v-else) Sano 

       

</template>