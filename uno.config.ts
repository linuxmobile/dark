import { defineConfig, presetTypography, presetWind } from "unocss";

export default defineConfig({
	presets: [presetWind(), presetTypography()],
	theme: {
		fontFamily: {
			display: "Clash Display",
		},
	},
});
