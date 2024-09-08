<script setup lang="ts">
const {logout, user} = useAuthUserStore()



</script>


<template lang="pug">
div( class="w-full top-0 ")
    nav(class='px-[40px] py-[14px] bg-white flex justify-between p-3 items-center')
      .transition-all.duration-200.cursor-pointer.flex.flex-row.gap-2(class='hover:scale-105')
        img(src='/icons/cat_icon.svg' width="30px")
        p.text-xl.font-semibold.text-purple-900 PET GUARD
      .flex.items-end.justify-center
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='' alt='')
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='' alt='')
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='' alt='')
        div.flex.gap-3.flex-row(v-if="user")
          span.text-purple-800 Hola, {{user.nombre}}
          button(@click="logout")
            Icon.text-purple-800.font-semibold(name="tabler:logout" size="25")
        div(class='hover:scale-105' v-else).flex.items-center.justify-center
            NuxtLink.cursor-pointer(to='/login')
              Icon.text-purple-800(name="tabler:user" size="25")
              span Iniciar sesion
</template>
