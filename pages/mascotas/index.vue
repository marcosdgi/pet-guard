<script setup lang="ts">
import type { IMascotaResponse } from '~/models/mascota';
const { $api } = useNuxtApp()
const { data: mascotas, execute } = useAsyncData(async () => {
    return await $api.mascota.obtenerMascotas()
})



</script>

<template lang="pug">
.grid.gap-6.items-center.bg-white.rounded-md.border-b-4.border-purple-300.p-4
    .flex.justify-between.items-center.p-2(class="bg-[url(./images/patron.png)] bg-center bg-cover")
        p.text-3xl.text-purple-700.font-semibold Adopciones
    hr
    p En esta sección usted podrá ver las mascotas que tenemos en el refugio del campus recibiendo cuidados y que fueron acogidos para darles un hogar. Si usted desea tener un compañero puede adoptar uno y se le instruirá sobre el proceso para hacerlo
    .grid.gap-2.bg-slate-50.p-4.rounded-md.h-80.overflow-auto
        .flex.flex-row.flex-wrap.gap-6.justify-center(class="bg-[url(./images/conjunto.png)] bg-center bg-cover")
            template(v-for="mascota in mascotas" :key="mascota.id")
                AppAdopcionesCardMascota(:mascota="mascota")
                

</template>