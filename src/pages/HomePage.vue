<template>
    <div>
        <CompassIcon
            :key="status"
            width="200px"
            height="200px"
            class="spinner"
            @click="clickIcon"
        />
    </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue';
import {ref} from 'vue';
import CompassIcon from '@/assets/compass.svg';

const status:Ref<boolean> = ref(true);

const clickIcon = () => {
    status.value = !status.value;
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    width: 100%;
    flex: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('@/assets/bg.webp');
}

@keyframes spin {
    from {
        transform: rotate(30deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    @apply absolute;
    @apply top-[40%];
    @apply left-[400px];

    animation: spin 4s ease 1;
}
</style>