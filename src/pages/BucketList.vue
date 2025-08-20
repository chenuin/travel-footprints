<template>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 items-start gap-4 p-2">
        <PrimeCard>
            <template #header>
                <img
                    alt="user header"
                    src="@/assets/25193328-830f-494d-8205-8c7e936dde3d.jpg"
                >
            </template>
            <template #title>
                濟州島 제주섬
            </template>
            <template #subtitle>
                韓國人心目中的度假天堂
            </template>
            <template #content>
                <p class="m-0">
                    濟州島有獨特的火山地形、湛藍的海岸線、神秘的熔岩洞窟，以及春天盛開的油菜花海，還有美食如黑豬肉、海鮮鍋和橘子，也絕對不容錯過!
                </p>
            </template>
        </PrimeCard>
    </div>
</template>

<script setup lang="ts">
import PrimeCard from 'primevue/card';
</script>