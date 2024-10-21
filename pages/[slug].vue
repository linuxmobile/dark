<template>
  <div v-if="color" :style="{ backgroundColor: color.hex }" class="font-display min-h-full h-full min-w-full flex flex-col items-start justify-between rounded-3xl p-6 overflow-hidden relative select-none">
    <NuxtLink to="/" class="absolute top-0 left-0 w-full h-full z-10"></NuxtLink>
    <p class="text-4xl md:text-9xl font-semibold">{{ color.name }}</p>
    <div class="w-full flex items-end justify-end z-20">
      <div class="flex flex-col items-start text-2xl opacity-60 relative">
        <div class="relative group">
          <p @mouseenter="showCopyButton('hex')" @mouseleave="hideCopyButton('hex')" class="flex gap-x-2 items-center z-20 cursor-default"><span class=""><CopyIcon /></span> HEX: {{ color.hex }}</p>
          <div v-show="hoverHex" @mouseenter="keepHover('hex')" @mouseleave="hideCopyButton('hex')" @click="copyToClipboard(color.hex)" class="absolute -top-8 -left-20 bg-gray-300 text-black rounded-md px-2 py-1 w-fit font-medium cursor-pointer">Copy</div>
        </div>
        <div class="relative group">
          <p @mouseenter="showCopyButton('rgb')" @mouseleave="hideCopyButton('rgb')" class="flex gap-x-2 items-center z-20 cursor-default"><span class=""><CopyIcon /></span> RGB: {{ color.rgb }}</p>
          <div v-show="hoverRgb" @mouseenter="keepHover('rgb')" @mouseleave="hideCopyButton('rgb')" @click="copyToClipboard(color.rgb)" class="absolute -top-5 -left-20 bg-gray-300 text-black rounded-md px-2 py-1 w-fit font-medium cursor-pointer">Copy</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-red-500">Color not found</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { isCopied, copyToClipboard } = useClipboard();

const hoverHex = ref(false);
const hoverRgb = ref(false);
let hoverTimeout: NodeJS.Timeout;

const showCopyButton = (type: "hex" | "rgb") => {
	clearTimeout(hoverTimeout);
	if (type === "hex") hoverHex.value = true;
	if (type === "rgb") hoverRgb.value = true;
};

const hideCopyButton = (type: "hex" | "rgb") => {
	hoverTimeout = setTimeout(() => {
		if (type === "hex") hoverHex.value = false;
		if (type === "rgb") hoverRgb.value = false;
	}, 500);
};

const keepHover = (type: "hex" | "rgb") => {
	clearTimeout(hoverTimeout);
};

const colors = [
	{
		name: "Snow",
		hex: "#FFFAFA",
		rgb: "rgb(255, 250, 250)",
	},
	{
		name: "Ivory",
		hex: "#FFFFF0",
		rgb: "rgb(255, 255, 240)",
	},
	{
		name: "White Smoke",
		hex: "#F5F5F5",
		rgb: "rgb(245, 245, 245)",
	},
	{
		name: "Seashell",
		hex: "#FFF5EE",
		rgb: "rgb(255, 245, 238)",
	},
	{
		name: "Ghost White",
		hex: "#F8F8FF",
		rgb: "rgb(248, 248, 255)",
	},
	{
		name: "Floral White",
		hex: "#FFFAF0",
		rgb: "rgb(255, 250, 240)",
	},
	{
		name: "Old Lace",
		hex: "#FDF5E6",
		rgb: "rgb(253, 245, 230)",
	},
	{
		name: "Antique White",
		hex: "#FAEBD7",
		rgb: "rgb(250, 235, 215)",
	},
	{
		name: "Linen",
		hex: "#FAF0E6",
		rgb: "rgb(250, 240, 230)",
	},
	{
		name: "Lavender Blush",
		hex: "#FFF0F5",
		rgb: "rgb(255, 240, 245)",
	},
	{
		name: "Misty Rose",
		hex: "#FFE4E1",
		rgb: "rgb(255, 228, 225)",
	},
	{
		name: "Alice Blue",
		hex: "#F0F8FF",
		rgb: "rgb(240, 248, 255)",
	},
	{
		name: "Honeydew",
		hex: "#F0FFF0",
		rgb: "rgb(240, 255, 240)",
	},
	{
		name: "Mint Cream",
		hex: "#F5FFFA",
		rgb: "rgb(245, 255, 250)",
	},
	{
		name: "Azure",
		hex: "#F0FFFF",
		rgb: "rgb(240, 255, 255)",
	},
	{
		name: "Beige",
		hex: "#F5F5DC",
		rgb: "rgb(245, 245, 220)",
	},
	{
		name: "Cornsilk",
		hex: "#FFF8DC",
		rgb: "rgb(255, 248, 220)",
	},
	{
		name: "Lemon Chiffon",
		hex: "#FFFACD",
		rgb: "rgb(255, 250, 205)",
	},
	{
		name: "Light Goldenrod Yellow",
		hex: "#FAFAD2",
		rgb: "rgb(250, 250, 210)",
	},
	{
		name: "Light Yellow",
		hex: "#FFFFE0",
		rgb: "rgb(255, 255, 224)",
	},
	{
		name: "Papaya Whip",
		hex: "#FFEFD5",
		rgb: "rgb(255, 239, 213)",
	},
	{
		name: "Blanched Almond",
		hex: "#FFEBCD",
		rgb: "rgb(255, 235, 205)",
	},
	{
		name: "Bisque",
		hex: "#FFE4C4",
		rgb: "rgb(255, 228, 196)",
	},
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
