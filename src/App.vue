<template>
    <div
        class="grid grid-cols-[200px_auto]"
    >
        <NavigationBar :list="list" />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';

const list = [
    {
        label: 'Explore',
        icon: 'pi pi-search',
        route: {name: 'explore'},
    },
    {
        label: 'Bucket List',
        icon: 'pi pi-bookmark',
        route: {name: 'bucket-list'},
    },
];
</script>
