<template>
    <PrimeDrawer v-model:visible="visible">
        <template #header>
            <h2><i class="pi pi-map-marker" /> {{ title }}</h2>
        </template>
        <template #default>
            <img :src="imageFullPath">

            <p
                class="mt-4"
                v-text="description"
            />
        </template>
        <template #footer>
            <div class="flex flex-wrap gap-2 mb-4">
                <PrimeButton
                    icon="pi pi-bookmark"
                    rounded
                    variant="outlined"
                    severity="secondary"
                    aria-label="Save"
                    @click="add({summary: '追蹤成功', life: 2000, severity: 'success'})"
                />
                <PrimeButton
                    icon="pi pi-thumbs-up"
                    rounded
                    variant="outlined"
                    severity="secondary"
                    aria-label="Thumbs Up"
                    @click="add({summary: '謝謝你喜歡', life: 2000, severity: 'error'})"
                />
                <PrimeButton
                    icon="pi pi-share-alt"
                    rounded
                    variant="outlined"
                    severity="secondary"
                    aria-label="Share"
                    @click="add({summary: '分享成功', life: 2000, severity: 'success'})"
                />
            </div>
            <small>
                <i class="pi pi-calendar text-blue-600" />
                <span
                    class="text-gray-600 ml-2"
                    v-text="date"
                />
            </small>
        </template>
    </PrimeDrawer>
    <PrimeToast
        position="bottom-center"
        success-icon="pi pi-check"
        error-icon="pi pi-heart"
    />
</template>

<script setup lang="ts">
import {computed} from 'vue';
import PrimeButton from 'primevue/button';
import PrimeDrawer from 'primevue/drawer';
import PrimeToast from 'primevue/toast';
import {useToast} from 'primevue/usetoast';

const {add} = useToast();

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
});

const visible = defineModel('visible', {type: Boolean, default: false});
const imageFullPath = computed(() => new URL(`../assets/${props.filename}`, import.meta.url).href);
</script>