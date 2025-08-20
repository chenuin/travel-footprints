<template>
    <div class="flex flex-col justify-between bg-white h-screen">
        <div>
            <div class="flex flex-col items-center justify-center p-2 h-[150px]">
                <img
                    src="@/assets/travel-bag-64.png"
                    width="32"
                >
                <RouterLink to="/">
                    <h1 class="mt-2 font-bold hover:text-teal-600">
                        Travel Footprints
                    </h1>
                </RouterLink>
            </div>
            <PrimePanelMenu
                :model="list"
                class="p-2"
            >
                <template #item="{item}">
                    <RouterLink
                        v-if="item.route"
                        v-slot="{ href, navigate }"
                        :to="item.route"
                        custom
                    >
                        <a
                            v-ripple
                            class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
                            :href="href"
                            @click="navigate"
                        >
                            <span :class="item.icon" />
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </RouterLink>
                </template>
            </PrimePanelMenu>
        </div>
        <div class="p-2 text-gray-500">
            <small>Copyright © 2025 chenuin</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import type {MenuItem} from 'primevue/menuitem';
import PrimePanelMenu from 'primevue/panelmenu';

defineProps({
    list: {
        type: Array<MenuItem>,
        required: true,
    },
});
</script>
