<script lang="ts" setup>

</script>

<template lang="pug">
.grid.items-center.p-3.gap-4.bg-white.rounded-md.border-b-4.border-purple-300
    .flex.items-center.justify-start.gap-4
        button(@click="$router.push('/home')").bg-purple-300.px-2.py-1.items-center.rounded-md 
            Icon(name="tabler:arrow-left" size="24").text-purple-800.mt-1
        p.text-3xl.text-purple-700.font-semibold Cuidados y alimentación
    hr
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim, vel explicabo quibusdam veritatis aspernatur voluptatum, officiis quaerat at inventore repudiandae ad nisi nihil cumque rerum molestiae, eum accusamus placeat?
     

</template>