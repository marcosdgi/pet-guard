<script lang="ts" setup>

interface buttons {
  id: number,
  text: string
  image_path: string,
  route: string,
}
const buttons: buttons[] = [
  { id: 1, text: 'Inicio', image_path: '/icons/home.svg', route: '/home' },
  { id: 2, text: 'Adopciones', image_path: '/icons/pets-paw-dog.svg', route: '/mascotas' },
  { id: 3, text: 'Seguimiento', image_path: '/icons/check-list.svg', route: '/seguimientoMascotas' },
  { id: 4, text: 'Cuidados y Alimentación', image_path: '/icons/examination_health_exam_care_medical_awareness_treatment_icon_140899.svg', route: '/informacion' },
//   { id: 6, text: 'Table Example', image_path: 'tabler:folder-dollar', route: '/table-example' },
//   { id: 7, text: 'Modal Example', image_path: 'tabler:folder', route: '/modalPage' },
]    


const isActive = ref(true)
const toggleSideBarVisibility = () => {
  if(isActive.value === true){
     isActive.value = false 
  }else{
    isActive.value = true
  }
}

</script>


<template lang="pug">

aside.mt-2.border-t-4.border-purple-600.rounded-md.h-96( class="sideBar" :class="{'sideBarOff':!isActive, 'sideBarOn': isActive}" )
      template(v-for="button in buttons" :key="button.id")
        NuxtLink( :to="button.route" )
          div( class="sideBarChild p-1 rounded-md " :class="{'hover:bg-purple-100 transition-colors  ease-in-out 1.5ms': isActive}" )
            img(size="24px" :src= "button.image_path" width="20px")
            p(class=" ml-2.5 " :class="{ 'sideBarChildOff': !isActive }") {{button.text}}
            hr
        button(class="absolute flex justify-center right-[-12px]  border bg-white bottom-80 rounded-[50%] w-[25px] h-[25px] " @click=" toggleSideBarVisibility ") 
                img(src="/icons/playMusic.svg")

</template>
    
    <style scoped>
    
    .sideBar{
      @apply   text-justify shadow-xl pl-3 py-5 flex-col flex gap-y-5  text-2xl bg-white w-[20rem] ;
    }
    .sideBarChild{
      @apply flex mb-2 ml-5 text-[17px] items-center text-purple-900 align-middle;
      
    }
    .sideBar {
      @apply  relative   shadow-xl pl-3 py-5 flex-col flex gap-y-5 text-2xl bg-white w-[20rem];
    }
    .sideBarOff {
      @apply   shadow-xl pl-3 py-5 flex-col flex gap-y-5 text-2xl bg-white w-24  transition-all duration-300 ease-in-out;
    }
    .sideBarOn {
      @apply   shadow-xl pl-3 py-5 flex-col flex gap-y-5 text-2xl bg-white w-52  transition-all duration-300 ease-in-out;
    }
    
    .sideBarChild {
      @apply flex mb-2 ml-5 text-[17px] items-center text-[#0F6491] align-middle w-[10rem];
    }
    

    .sideBarChildOff{
      @apply mb-2 ml-5 text-[17px] items-center text-[#0F6491] align-middle hidden;
    
    }
    </style>