<template>
    <LeafletMap ref="myMap" />
    <TravelCard
        v-if="location"
        v-model:visible="visible"
        v-bind="location"
    />
</template>

<script setup lang="ts">
import type {Ref} from 'vue';
import type {Map as LMap, Marker} from 'leaflet';
import type {Location} from '@/interfaces/locations.type';
import {ref, computed, watch} from 'vue';
import L from 'leaflet';
import LeafletMap from '@/components/LeafletMap.vue';
import TravelCard from '@/components/TravelCard.vue';
import locations from '@/locations.json';

const visible: Ref<boolean> = ref(false);

const myMap: Ref<{mapInstance: LMap} | null> = ref(null);
const mapInstance = computed(() => (
    myMap.value && myMap.value.mapInstance
));
const location: Ref<Location | null> = ref(null);
const locationMap = computed(() => (
    locations.reduce((carry, data) => {
        return carry.set(data.title, data);
    }, new Map())
));

const clickMaker = (maker: Marker) => {
    maker.bindPopup('You found me!')
        .openPopup();
    visible.value = true;
    location.value = locationMap.value.get(maker.options.title);

    setTimeout(() => {
        maker.closePopup();
    }, 1000);
};

const addMakers = (map: LMap) => {
    const makers = locations.map((config: Location): Marker => {
        const {title, latlng: {lat, lng}} = config;

        return L.marker([+lat, +lng], {title}).addTo(map);
    });

    L.featureGroup(makers)
        .on('click', ({sourceTarget}) => {
            clickMaker(sourceTarget);
        })
        .addTo(map);
};

watch(mapInstance, value => {
    if (value) {
        addMakers(value);
    }
});
</script>
