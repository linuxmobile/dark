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
		name: "Snow",
		hex: "#FFFAFA",
		rgb: "rgb(255, 250, 250)",
		class: "col-span-6",
	},
	{
		name: "Ivory",
		hex: "#FFFFF0",
		rgb: "rgb(255, 255, 240)",
		class: "col-span-3",
	},
	{
		name: "White Smoke",
		hex: "#F5F5F5",
		rgb: "rgb(245, 245, 245)",
		class: "col-span-3",
	},
	{
		name: "Seashell",
		hex: "#FFF5EE",
		rgb: "rgb(255, 245, 238)",
		class: "col-span-5",
	},
	{
		name: "Ghost White",
		hex: "#F8F8FF",
		rgb: "rgb(248, 248, 255)",
		class: "col-span-3",
	},
	{
		name: "Floral White",
		hex: "#FFFAF0",
		rgb: "rgb(255, 250, 240)",
		class: "col-span-4",
	},
	{
		name: "Old Lace",
		hex: "#FDF5E6",
		rgb: "rgb(253, 245, 230)",
		class: "col-span-3",
	},
	{
		name: "Antique White",
		hex: "#FAEBD7",
		rgb: "rgb(250, 235, 215)",
		class: "col-span-3",
	},
	{
		name: "Linen",
		hex: "#FAF0E6",
		rgb: "rgb(250, 240, 230)",
		class: "col-span-3",
	},
	{
		name: "Lavender Blush",
		hex: "#FFF0F5",
		rgb: "rgb(255, 240, 245)",
		class: "col-span-3",
	},
	{
		name: "Misty Rose",
		hex: "#FFE4E1",
		rgb: "rgb(255, 228, 225)",
		class: "col-span-4",
	},
	{
		name: "Alice Blue",
		hex: "#F0F8FF",
		rgb: "rgb(240, 248, 255)",
		class: "col-span-3",
	},
	{
		name: "Honeydew",
		hex: "#F0FFF0",
		rgb: "rgb(240, 255, 240)",
		class: "col-span-5",
	},
	{
		name: "Mint Cream",
		hex: "#F5FFFA",
		rgb: "rgb(245, 255, 250)",
		class: "col-span-5",
	},
	{
		name: "Azure",
		hex: "#F0FFFF",
		rgb: "rgb(240, 255, 255)",
		class: "col-span-3",
	},
	{
		name: "Beige",
		hex: "#F5F5DC",
		rgb: "rgb(245, 245, 220)",
		class: "col-span-4",
	},
	{
		name: "Cornsilk",
		hex: "#FFF8DC",
		rgb: "rgb(255, 248, 220)",
		class: "col-span-4",
	},
	{
		name: "Lemon Chiffon",
		hex: "#FFFACD",
		rgb: "rgb(255, 250, 205)",
		class: "col-span-3",
	},
	{
		name: "Light Goldenrod Yellow",
		hex: "#FAFAD2",
		rgb: "rgb(250, 250, 210)",
		class: "col-span-5",
	},
	{
		name: "Light Yellow",
		hex: "#FFFFE0",
		rgb: "rgb(255, 255, 224)",
		class: "col-span-3",
	},
	{
		name: "Papaya Whip",
		hex: "#FFEFD5",
		rgb: "rgb(255, 239, 213)",
		class: "col-span-5",
	},
	{
		name: "Blanched Almond",
		hex: "#FFEBCD",
		rgb: "rgb(255, 235, 205)",
		class: "col-span-4",
	},
	{
		name: "Bisque",
		hex: "#FFE4C4",
		rgb: "rgb(255, 228, 196)",
		class: "col-span-4",
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
