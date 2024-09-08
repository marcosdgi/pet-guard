<script setup lang="ts">
import type { Header, Item, BodyRowClassNameFunction } from 'vue3-easy-data-table';
const { $api } = useNuxtApp()

const { data: mascotas, execute } = useAsyncData(async () => {
    return await $api.mascota.obtenerMascotas()
})


const headers: Header[] = [
    { text: "Nombre", value: "nombre", width: 120, sortable: true },
    { text: "Raza", value: "raza.nombre", width: 120, sortable: true },
    { text: "Fecha ingreso", value: "fecha_ingreso", width: 120, sortable: true },
    { text: "Edad", value: "edad", width: 120, sortable: true },
    { text: "Estado de salud", value: "is_enfermo", width: 120, sortable: true },
]

const items = computed<Item[]>(() => {

    if (mascotas.value) {
        return mascotas?.value as Item[]
    } else {
        return []
    }
})

console.log(items.value)


const { user } = useAuthUserStore()

console.log(user)

</script>

<template lang="pug">
.grid.gap-2.px-4.py-2.items-center.border-b-4.border-purple-300.bg-white.rounded-md.container.overflow-y-auto
    .grid.gap-2
        p.text-2xl.font-semibold.text-purple-700 Seguimiento de mascotas
        hr
    .grid.gap-2.justify-center.px-3
        p.text-sm En esta sección se le da seguimiento y gestión a las mascotas que se encuentran registradas en el sistema y residen actualmente dentro del refugio del campus
    
    div
        .flex.mb-2.flex-row.items-center.text-purple-800.gap-2
            Icon(name="tabler:search" size="24")
            input(type="text" placeholder="Buscar mascota").border-2.border-purple-300.rounded-md.w-52.p-2
        EasyDataTable(
                class="customize-table"
                :items="items"
                :headers="headers"
                :rows-per-page="5"
                
            )
            
                    template(#header-nombre="{text}")
                            p {{ text }}
                    template(#header-raza="{text}")
                            p {{ text }}
                    template(#header-fecha_ingreso="{text}")
                            p {{ text }}
                    template(#header-edad="{text}")
                            p {{ text }}
                    template(#header-is_enfermo="{text}")
                            p {{ text }}
                    //-body
                    template(#item-nombre="{nombre}")
                        .flex.flex-row.gap-2.items-center.justify-start 
                            Icon.text-purple-800(name="tabler:eye" size="24px")
                            p {{ nombre }}
                    template(#item-raza="{raza}")
                        .flex.flex-row.items-center.justify-start 
                            p {{ raza }}
                    template(#item-fecha_ingreso="{fecha_ingreso}")
                        .flex.flex-row.items-center.justify-start 
                            p {{ fecha_ingreso }}
                    template(#item-fecha_edad="{edad}")
                        .flex.flex-row.items-center.justify-start 
                            p {{ edad }} años 
                           
                    template(#item-is_enfermo="{is_enfermo}")
                        .flex.flex-row.items-center.justify-start 
                            p(v-if="is_enfermo") Enfermo
                            p(v-else) Sano

</template>
<style scoped>
.container {
    height: calc(100vh - 100px);
}
</style>