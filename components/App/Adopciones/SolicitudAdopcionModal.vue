<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import type { IMascotaResponse } from '~/models/mascota';
interface Props {
    mascota: IMascotaResponse;
}
const props = defineProps<Props>()

</script>

<template lang="pug">
VueFinalModal(
    content-class="fixed h-full rounded top-0 p-0 z-50 bg-white w-[50%] right-0  overflow-auto "
    content-transition="vfm-slide-right"
    overlay-transition="vfm-fade"
    :esc-to-close="false"
    border-cell 
)
    .grid.gap-4.border-t-4.border-purple-800.px-4.mb-10
            p.text-2xl.text-purple-800.mt-2.text-center.border-b-2.border-purple-300.py-1 Solicitud de adopción

            p.text-sm Debe rellenar los datos requeridos correctamente para notificarle a un administrador su solicitud y poder continuar con el proceso. Se solicitará datos de contactos, condiciones de convivencia entre otros.
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

            hr
            p.text-md.text-purple-700 Sus datos personales

            .flex.flex-row.gap-2.justify-start.items-center 
                p.text-sm Introduzca su nombre completo:
                input(type="text" placeholder="Nombre y apellidos").border-b-2.border-purple-300
            .flex.flex.row.gap-2.justify-start.items-center 
                p.text-sm No. Telefónico: 
                input(type="tel" placeholder="+53 55 55 55 55").border-b-2.border-purple-300
            
            .flex.flex.row.gap-2.justify-start.items-center 
                p.text-sm Correo electrónico: 
                input(type="email" placeholder="example@gmail.com").border-b-2.border-purple-300
            
            .flex.flex-col.gap-2.justify-start.items-center 
                p.text-sm Trabajador/a o estudiante:
                select(value="").border.border-purple-300.rounded
                    option 
                        span Estudiante 
                    option 
                        span Trabajador/a      

            .flex.flex-col.gap-2.justify-start.items-center 
                p.text-sm Condiciones en las que usted vive (Se tendrá en cuenta para aceptar su solicitud): 
                textarea(type="tel" placeholder="Escribe aquí").w-full.border.border-b-2.border-purple-300.p-2.rounded-md
            
            .w-full.flex.justify-center
                button().bg-purple-800.text-white.p-3.rounded-md.flex.gap-2.items-center
                    Icon(name="tabler:device-floppy" size="24")
                    span Realizar solicitud
</template>