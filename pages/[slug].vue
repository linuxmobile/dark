<template>
  <NuxtLink to="/" v-if="color" :style="{ backgroundColor: color.hex }" class="font-display min-h-full h-full min-w-full flex flex-col items-start justify-between rounded-3xl p-6 overflow-hidden">
    <p class="text-2xl font-semibold">{{ color.name }}</p>
    <div class="w-full flex items-end justify-end">
      <div class="flex flex-col items-start text-lg opacity-60">
        <p>HEX: {{ color.hex }}</p>
        <p>RGB: {{ color.rgb }}</p>
      </div>
    </div>
  </NuxtLink>
  <div v-else>
    <p class="text-red-500">Color not found</p>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const colors = [
	{ name: "Charcoal Gray", hex: "#121212", rgb: "rgb(18, 18, 18)" },
	{ name: "Dark Slate Gray", hex: "#191919", rgb: "rgb(25, 25, 25)" },
	{ name: "Outer Space", hex: "#252525", rgb: "rgb(37, 37, 37)" },
	{ name: "Rich Black", hex: "#0A0A0A", rgb: "rgb(10, 10, 10)" },
	{ name: "Coffee Bean", hex: "#1B1B1B", rgb: "rgb(27, 27, 27)" },
	{ name: "Dark Gray", hex: "#212427", rgb: "rgb(33, 36, 39)" },
	{ name: "Oil Black", hex: "#0C0C0C", rgb: "rgb(12, 12, 12)" },
	{ name: "Obsidian", hex: "#0B1215", rgb: "rgb(11, 18, 21)" },
	{ name: "Ebony", hex: "#222428", rgb: "rgb(34, 36, 40)" },
	{ name: "Black Chocolate", hex: "#100D08", rgb: "rgb(16, 13, 8)" },
	{ name: "Gunmetal", hex: "#1D1F21", rgb: "rgb(29, 31, 33)" },
	{ name: "Smoky Black", hex: "#101720", rgb: "rgb(16, 23, 32)" },
	{ name: "Oxford Blue", hex: "#212A37", rgb: "rgb(33, 42, 55)" },
	{ name: "Eerie Black", hex: "#232023", rgb: "rgb(35, 32, 35)" },
	{ name: "Jet Black", hex: "#161618", rgb: "rgb(22, 22, 24)" },
	{ name: "Iridium", hex: "#181818", rgb: "rgb(24, 24, 24)" },
	{ name: "Arsenic", hex: "#11181C", rgb: "rgb(17, 24, 28)" },
	{ name: "Charleston Green", hex: "#212124", rgb: "rgb(33, 33, 36)" },
	{ name: "Dark Gunmetal", hex: "#222428", rgb: "rgb(34, 36, 40)" },
	{ name: "Jet", hex: "#2A2A2A", rgb: "rgb(42, 42, 42)" },
	{ name: "Black Olive", hex: "#242526", rgb: "rgb(36, 37, 38)" },
	{ name: "Midnight Blue", hex: "#212121", rgb: "rgb(33, 33, 33)" },
];

const color = colors.find(
	(c) => c.name.toLowerCase().replace(/ /g, "-") === route.params.slug,
);

useHead({
	bodyAttrs: {
		class: "h-full w-full [&>div]:h-full overflow-hidden",
	},
});
</script>
