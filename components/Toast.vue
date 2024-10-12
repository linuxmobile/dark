<template>
  <div v-if="visible" class="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg transition-opacity duration-300" :class="{ 'opacity-0': !visible }">
    {{ message }}
  </div>
</template>

<script setup>
const visible = ref(false);
const message = ref("");

function showToast(msg) {
	message.value = msg;
	visible.value = true;
	setTimeout(() => {
		visible.value = false;
	}, 3000);
}

defineExpose({ showToast });
</script>

<style scoped>
.transition-opacity {
  transition: opacity 0.3s;
}
</style>
