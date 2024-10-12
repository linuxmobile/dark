<template>
  <main class="grid grid-cols-auto lg:grid-cols-12 grid-rows-6 gap-6 pb-6 mx-auto select-none">
    <Tiles
      v-for="(color, index) in colors"
      :key="index"
      :class="color.class"
      :name="color.name"
      :hex="color.hex"
      :rgb="color.rgb"
    />
    <Details />
  </main>
</template>
<script setup lang="ts">
const { restoreScrollPosition } = useScrollPosition();

const colors = [
	{
		name: "Charcoal Gray",
		hex: "#121212",
		rgb: "rgb(18, 18, 18)",
		class: "col-span-6",
	},
	{
		name: "Dark Slate Gray",
		hex: "#191919",
		rgb: "rgb(25, 25, 25)",
		class: "col-span-3",
	},
	{
		name: "Outer Space",
		hex: "#252525",
		rgb: "rgb(37, 37, 37)",
		class: "col-span-3",
	},
	{
		name: "Rich Black",
		hex: "#0A0A0A",
		rgb: "rgb(10, 10, 10)",
		class: "col-span-6 md:col-span-5",
	},
	{
		name: "Coffee Bean",
		hex: "#1B1B1B",
		rgb: "rgb(27, 27, 27)",
		class: "col-span-3",
	},
	{
		name: "Dark Gray",
		hex: "#212427",
		rgb: "rgb(33, 36, 39)",
		class: "col-span-3 md:col-span-4",
	},
	{
		name: "Oil Black",
		hex: "#0C0C0C",
		rgb: "rgb(12, 12, 12)",
		class: "col-span-6 md:col-span-4 xl:col-span-3",
	},
	{
		name: "Obsidian",
		hex: "#0B1215",
		rgb: "rgb(11, 18, 21)",
		class: "col-span-3 md:col-span-5 xl:col-span-3",
	},
	{
		name: "Ebony",
		hex: "#222428",
		rgb: "rgb(34, 36, 40)",
		class: "col-span-3",
	},
	{
		name: "Black Chocolate",
		hex: "#100D08",
		rgb: "rgb(16, 13, 8)",
		class: "col-span-6 md:col-span-5 xl:col-span-3",
	},
	{
		name: "Gunmetal",
		hex: "#1D1F21",
		rgb: "rgb(29, 31, 33)",
		class: "col-span-3 xl:col-span-4",
	},
	{
		name: "Smoky Black",
		hex: "#101720",
		rgb: "rgb(16, 23, 32)",
		class: "col-span-3 md:col-span-4 xl:col-span-3",
	},
	{
		name: "Oxford Blue",
		hex: "#212A37",
		rgb: "rgb(33, 42, 55)",
		class: "col-span-6 md:col-span-4 xl:col-span-5",
	},
	{
		name: "Eerie Black",
		hex: "#232023",
		rgb: "rgb(35, 32, 35)",
		class: "col-span-3 md:col-span-5",
	},
	{
		name: "Jet Black",
		hex: "#161618",
		rgb: "rgb(22, 22, 24)",
		class: "col-span-3",
	},
	{
		name: "Iridium",
		hex: "#181818",
		rgb: "rgb(24, 24, 24)",
		class: "col-span-6 md:col-span-5 xl:col-span-4",
	},
	{
		name: "Arsenic",
		hex: "#11181C",
		rgb: "rgb(17, 24, 28)",
		class: "col-span-3 xl:col-span-4",
	},
	{
		name: "Charleston Green",
		hex: "#212124",
		rgb: "rgb(33, 33, 36)",
		class: "col-span-3 md:col-span-4 xl:col-span-3",
	},
	{
		name: "Dark Gunmetal",
		hex: "#222428",
		rgb: "rgb(34, 36, 40)",
		class: "col-span-6 md:col-span-3 xl:col-span-5",
	},
	{ name: "Jet", hex: "#2A2A2A", rgb: "rgb(42, 42, 42)", class: "col-span-3" },
	{
		name: "Black Olive",
		hex: "#242526",
		rgb: "rgb(36, 37, 38)",
		class: "col-span-3 xl:col-span-5",
	},
	{
		name: "Midnight Blue",
		hex: "#212121",
		rgb: "rgb(33, 33, 33)",
		class: "col-span-6 md:col-span-3 xl:col-span-4",
	},
];

onMounted(() => {
	nextTick(() => {
		setTimeout(() => {
			restoreScrollPosition();
		}, 30);
	});
});
</script>
