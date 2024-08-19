<script setup lang="ts">


</script>


<template lang="pug">
div( class="w-full top-0 ")
    nav(class='px-[40px] py-[14px] bg-white flex justify-between p-3 items-center')
      .transition-all.duration-200.cursor-pointer.flex.flex-row.gap-2(class='hover:scale-105')
        img(src='/icons/cat_icon.svg' width="30px")
        p.text-xl.font-semibold.text-purple-900 PET GUARD
      .flex.items-end
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='' alt='')
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='' alt='')
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='' alt='')
        div(class='hover:scale-105')
          NuxtLink.cursor-pointer(to='/')
            img(src='/icons/follow.svg' alt='' width="30px")
</template>
