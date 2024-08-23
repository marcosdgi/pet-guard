<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import RegisterModal from '~/components/App/Home/RegisterModal.vue';




const openModalRegister = () =>{
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

.grid.gap-6.items-center.rounded-md.overflow-auto.contenedor.bg-white.h-auto
    AppHomeTheHeader 
    .grid.gap-4.px-4
        .flex.gap-2.items-center.bg-slate-100.p-4.rounded-md.h-auto.shadow-md
                        .flex.justify-center.items-center.gap-2
                            img(src="/images/logoPet.svg" width="300px").rounded-full
                            .bg-white.border-l-2.border-purple-300.h-auto.p-2.rounded-md.h-auto.gap-4.flex.flex-col.max-w-sm
                                p.text-3xl.text-purple-600 Nuestros servicios
                                hr
                                p.mt-2 Brindamos información para el correcto cuidado y alimentación de tus mascotas. Te ofrecemos ayuda médica profesional para tus peluditos. Tener una mascota no es solo un acto de amor, debes proporcionarles los cuidados adecuados, nuestro sitio PET GUARD te brinda toda la información acerca de su mantenimiento en cuanto a su salud, alimentación y ejercitación física.
                                p Puedes contactarnos a través de nuestro correo 
                                NuxtLink(href="#").text-purple-600 petguard@gmail.com
                                .flex.flex-row.gap-2
                                    p.whitespace-nowrap.text-sm ¿Necesitas información? 
                                    button.text-sm(@click="$router.push('/informacion')").text-purple-800.whitespace-nowrap.overflow-hidden.overflow-ellipsis Haz click aquí para ver los cuidados y alimentación para tu mascota



        .grid.gap-2.items-center.bg-slate-100.p-4.rounded-md.h-auto.shadow-md
                        .flex.justify-center
                            img(src="/images/cuidados.svg" width="300px")
                        hr
                        button.bg-purple-200.p-2.rounded-md(
                            class="hover:bg-purple-100 transition-colors ease-in-out"
                            @click="$router.push(`/seguimientoMascotas`)"
                            )
                            span.text-xl.text-purple-800 Registro, seguimiento y gestión 
        .grid.gap-2.items-center.bg-slate-100.p-4.rounded-md.h-auto.shadow-md
                        .flex.justify-center
                            img(src="/images/adoptMe.svg" width="300px")
                        hr
                        button.bg-purple-200.p-2.rounded-md(
                            class="hover:bg-purple-100 transition-colors ease-in-out"
                            @click="$router.push(`/mascotas`)"
                            )
                            span.text-xl.text-purple-800 Adopciones


        .flex.flex-col.justify-center.items-center.gap-2.mt-10.border-t-4.border-purple-300
                    .grid.items-center.gap-2.mt-5
                        p ¿ Aún no registra a su mascota?
                        div.flex.justify-center.items-center
                            button.bg-blue-400.p-2.rounded-md.text-white(
                                @click="openModalRegister"
                            )
                                span Hágalo aquí
                
</template>

<style >
.contenedor{
    height: calc(100vh - 80px);
}
</style>