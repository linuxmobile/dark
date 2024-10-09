<template>
  <div ref="cursor" class="z-10 absolute -top-3 -left-3 size-6 bg-white mix-blend-difference pointer-events-none transition-all animate-ease-in-out duration-75" id="cursor"></div>
  <NuxtPage />
</template>
<script setup>
import { usePointer } from "@vueuse/core";

const { saveScrollPosition } = useScrollPosition();

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
		const adjustedX = x.value + window.scrollX;
		const adjustedY = y.value + window.scrollY;
		cursor.value.style.transform = `translate3d(${adjustedX}px, ${adjustedY}px, 0)`;
	}
});

const router = useRouter();
router.beforeEach((to, from, next) => {
	saveScrollPosition();
	next();
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

body::-webkit-scrollbar {
  display: none;
}

*,html,body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
