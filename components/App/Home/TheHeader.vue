<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import RegisterModal from './RegisterModal.vue';

const openModalRegisterPet = () =>{
    const {open, close} = useModal({
        component: RegisterModal,
        attrs:{
            onClose: ()=>{
                close()
            }
        }
    })
    open()
}

</script>

<template lang="pug">
.w-full.flex.flex-row.px-2.py-1.justify-center.h-96.items-center.gap-2(class="bg-blue-50 bg-[url(/images/Pets.svg)] bg-center bg-contain rounded px-2").shadow-md
        .grid.gap-2.bg-slate-50.p-3.rounded-md.border-b-4.border-purple-300
            div.flex.flex-row.items-center.gap-2
                img(src="/icons/cat_icon.svg" width="110px")
                .grid.gap-2
                    p.text-6xl.font-semibold.text-purple-800 PET GUARD
                    p.text-sm.text-slate-700 Unificador de la fauna en el campus universitario
            button.bg-purple-900.text-white.p-2.rounded(
                class="hover:bg-purple-500 shadow-xl transition-all duration-300 ease-in-out"
                @click="openModalRegisterPet"
                )
                span Registre a su mascota

</template>