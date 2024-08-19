<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';


</script>

<template lang="pug">
div.contenedor
    .bg-purple-100.h-screen
        GlobalTheNavbar.sticky.z-50.top-0
        .px-2.mx-auto.container
            .flex.gap-6.mt-4
                div
                    .sticky.z-50
                        GlobalTheSideBar
                .w-full.overflow-x-hidden
                    slot
        
    ModalsContainer
</template>
<style scoped>
.contenedor{
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