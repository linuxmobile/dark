// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
	},
	css: ["@unocss/reset/tailwind.css"],
	devtools: { enabled: true },
	modules: ["@vueuse/nuxt", "@unocss/nuxt", "@nuxtjs/color-mode"],
	experimental: {
		viewTransition: true,
	},
});
