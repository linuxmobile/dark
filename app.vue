<template>
    <div ref="cursor" class="z-10 absolute -top-3 -left-3 size-6 bg-white mix-blend-difference pointer-events-none transition-all animate-ease-in-out duration-75" id="cursor"></div>
  <NuxtPage />
</template>
<script setup>
import { usePointer } from "@vueuse/core";

useHead({
	htmlAttrs: {
		class: "bg-black text-white p-6 h-full w-full",
	},
	title: "Dark",
	meta: [
		{
			name: "description",
			content:
				"Discover DARK – the ultimate palette of alternative dark shades to replace #000000. Elevate your web design and graphics with unique, rich, and visually striking color choices. A fresh take on dark colors for bold and modern creativity.",
		},
	],
});

const { x, y } = usePointer();
const cursor = ref(null);

watch([x, y], () => {
	if (cursor.value) {
		cursor.value.style.transform = `translate3d(${x.value}px, ${y.value}px, 0)`;
	}
});
</script>
<style>
@font-face {
  font-family: 'Clash Display';
  src: url(/clash.woff2);
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
