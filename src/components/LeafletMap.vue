<template>
    <div
        ref="mapContainer"
        class="h-screen"
    />
</template>

<script setup lang="ts">
import type {Ref} from 'vue';
import type {Map} from 'leaflet';
import {onMounted, onUnmounted, ref} from 'vue';
import L from 'leaflet';

const mapContainer = ref(null);
const mapInstance: Ref<Map | null> = ref(null);

onMounted(() => {
    if (mapContainer.value) {
        mapInstance.value = L.map(mapContainer.value)
            .setView([33.5560075, 126.7755712], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
            . addTo(mapInstance.value);
    }
});

defineExpose({mapInstance});

onUnmounted(() => {
    if (mapInstance.value) {
        mapInstance.value.remove();
    }
});
</script>
