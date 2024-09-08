<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';


</script>

<template lang="pug">
div.contenedor
    .bg-purple-100.h-screen
        .w-full.bg-purple-800.blur-md.absolute.h-full.rounded-b-full(class="opacity-100")
        GlobalTheNavbar.sticky.z-50.top-0
        .px-2.mx-auto.container
            .flex.gap-6.mt-4
                div
                    .sticky.z-50
                        GlobalTheSideBar
                    .w-32.flex.h-32.bg-transparent.absolute.bottom-2.rounded-full.left-0.flex-col.gap-1.p-1.ml-4.items-center.justify-center.mb-2
                        button.bg-white.p-2.rounded-full.items-center.justify-center.flex
                            Icon(name="tabler:brand-whatsapp" size="30").text-purple-800
                        button.bg-white.p-2.rounded-full.items-center.justify-center.flex
                            Icon(name="tabler:brand-instagram" size="30").text-purple-800
                        button.bg-white.p-2.rounded-full.items-center.justify-center.flex
                            Icon(name="tabler:brand-messenger" size="30").text-purple-800
                        
                .w-full.overflow-x-hidden.z-50
                    slot

    ModalsContainer
</template>
<style scoped>
.contenedor {
    height: calc(100vh - 60px);
}

.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(0.2rem);
}
</style>