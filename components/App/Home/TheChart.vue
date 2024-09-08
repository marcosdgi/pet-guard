<script setup lang="ts">
import {Chart} from 'chart.js'
let donut: Chart = null
const canvasDonut = ref(null)
//-configurando la dona y sus datos
onMounted(
    () => {
        donut = new Chart(canvasDonut.value, {
            type: 'doughnut',
            data: {
                labels: ['X', 'Y', 'Z', 'F', 'G '],
                datasets: [{
                    data: [
                        1,1,1,1,1

                    ],
                    backgroundColor: [
                        'rgba(186, 74, 74, 1)',
                        'rgba(255, 109, 61, 1)',
                        'rgba(255, 204, 0, 1)',
                        'rgba(34, 163, 230, 1)',
                        'rgba(217, 217, 217, 1)',
                    ],
                    borderColor: [],
                    borderWidth: 4,
                }],
            },
            options: {
                responsive: true,
                
            }
        })


    }
)

</script>

<template lang="pug">
.flex.flex-col.gap-2.items-center.justify-center
    canvas( ref="canvasDonut")
</template>