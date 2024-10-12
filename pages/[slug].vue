<template>
  <div v-if="color" :style="{ backgroundColor: color.hex }" class="font-display min-h-full h-full min-w-full flex flex-col items-start justify-between rounded-3xl p-6 overflow-hidden relative select-none">
    <NuxtLink to="/" class="absolute top-0 left-0 w-full h-full z-10"></NuxtLink>
    <p class="text-9xl font-semibold">{{ color.name }}</p>
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
