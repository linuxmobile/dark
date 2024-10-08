<template>
  <NuxtLink :to="`/${props.name.toLowerCase().replace(/ /g, '-')}`" :class="props.class" class="font-display min-h-62 min-w-full flex flex-col items-start justify-between rounded-3xl p-6" :style="{ backgroundColor: props.hex }">
    <p class="text-2xl font-semibold">{{ props.name }}</p>
    <div class="w-full flex items-end justify-end">
      <div class="flex flex-col items-start text-lg opacity-60">
        <p>HEX: {{ props.hex }}</p>
        <p>RGB: {{ props.rgb }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
	class: {
		type: String,
		default: "",
	},
	name: {
		type: String,
		required: true,
	},
	hex: {
		type: String,
		required: true,
	},
	rgb: {
		type: String,
		required: true,
	},
});
</script>
