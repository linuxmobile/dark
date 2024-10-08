<template>
  <NuxtPage />
</template>
<script setup>
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
