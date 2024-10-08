import { useScroll } from "@vueuse/core";

const scrollPosition = ref({ x: 0, y: 0 });

export function useScrollPosition() {
	const { x, y } = useScroll(window);

	function saveScrollPosition() {
		if (x.value !== 0 || y.value !== 0) {
			scrollPosition.value = { x: x.value, y: y.value };
		}
	}

	function restoreScrollPosition() {
		window.scrollTo({
			top: scrollPosition.value.y,
			left: scrollPosition.value.x,
			behavior: "auto",
		});
	}

	return {
		saveScrollPosition,
		restoreScrollPosition,
	};
}
