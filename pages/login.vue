<script setup lang="ts">
definePageMeta({
    layout:'login-layout'
})

</script>

<template lang="pug">
.flex.flex-row.items-center.bg-purple-900.relative.rounded-b-full.h-screen
    img(src="/images/AdoptMe.svg" width="750px" alt="Foto").bg-purple-300.absolute.bottom-0.rounded-full.border-4.border-white
    .grid.items-center.gap-4.bg-slate-100.p-6.rounded-md.absolute.right-0.mr-7.top-5.shadow-xl.w-96.min-h-96.max-h-2xl
        .flex.flex-row.items-center.gap-3
            img(src="/icons/cat_icon.svg" width="60px")
            p.text-2xl.text-purple-700.font-semibold Inicie sesión en Pet Guard
        
        hr
        .grid.items-center.gap-5
            .flex.flex-col.items-start.justify-center.gap-2
                p Usuario:
                input(type="text" placeholder="example123").w-full.p-2.rounded-md.border-b-2.border-purple-200
        
            .flex.flex-col.items-start.justify-between.gap-2
                p Contraseña:
                input(type="password" placeholder="Escribe aquí..." ).p-2.rounded-md.w-full.border-purple-200.border-b-2

            .w-full
                button().bg-purple-800.p-2.rounded-md.text-white.w-full
                    span Aceptar
            .w-full.bg-slate-50.p-2.rounded-md
                .flex.flex-row.items-center.gap-2
                    p.text-sm ¿Aún no tiene usuario?
                    button.text-purple-700 
                        span.text-sm Regístrese aquí
</template>