<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import FichaMascotaModal from '~/components/Global/FichaMascotaModal.vue';
import type { IMascotaResponse } from '~/models/mascota';
import SolicitudAdopcionModa from './SolicitudAdopcionModal.vue';
import SolicitudAdopcionModal from './SolicitudAdopcionModal.vue';

interface Props{
    mascota:IMascotaResponse;
}
const props = defineProps<Props>()


const openFichaMascota = () =>{
    const{open,close} = useModal({
        component: FichaMascotaModal,
        attrs:{
            mascota: props.mascota,
            onClose: ()=>{
                close()
            }
        }
    })
    open()
}

const openSolicitudModal = () =>{
    const {open, close} = useModal({
        component: SolicitudAdopcionModal,
        attrs:{
            mascota: props.mascota,
            onClose: () => {
                close()
            }
        }
    })
    open()
}
</script>

<template lang="pug">
div.w-64.p-4.flex.flex-col.justify-center.items-center.gap-4.rounded-md.bg-purple-200.border-t-4.border-purple-700.shadow-xl
        .flex.flex-row.gap-2.items-center
            p.text-sm Nombre: 
            p.text-md.font-semibold.text-purple-700.font-semibold {{ props.mascota.nombre }}
        img(src="/icons/cat_icon.svg" width="100px")
        .flex.flex-col.justify-center.items-center
            .flex.flex-row.items-center.gap-2
                p.text-sm Peso:
                p.text-purple-800 {{ props.mascota.peso }} kg
            .flex.flex-row.items-center.gap-2
                p.text-sm Estado de salud:
                p(v-if="props.mascota.is_enfermo").text-purple-800 Enfermo
                p(v-else).text-purple-800 Sano
        .flex.w-full.items-center.justify-between
            button(@click="openSolicitudModal").flex.gap-1.items-center.text-white.bg-purple-700.p-2.rounded-md
                Icon(name="tabler:dog-bowl")
                span Adoptar
            button(@click="openFichaMascota").flex.items-center.gap-1.text-slate.bg-purple-300.p-2.rounded-md
                Icon(name="tabler:list-details")
                span Ver ficha

</template>