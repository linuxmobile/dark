<template>
  <button @click="openModal" class="fixed bottom-5 right-10 bg-gray-950 p-3 rounded-xl z-10">
    <InfoIcon class="size-8"/>
  </button>
  <dialog ref="dialogRef" class="rounded-3xl p-10 bg-neutral-800 text-white max-w-lg w-full relative">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Sobre este sitio</h2>
      <button @click="closeModal" class="text-gray-400 hover:text-white absolute top-5 right-5">
        <CloseIcon class="size-6"/>
      </button>
    </div>
    <div class="prose-invert prose">
      <p>Bienvenido a <strong>DARK</strong>, tu paleta definitiva de tonos oscuros alternativos para reemplazar el negro puro (#000000).</p>
      <h3>¿Por qué evitar el negro puro?</h3>
      <p>El uso de negro puro y blanco en el diseño puede causar incomodidad y fatiga visual debido al alto contraste. Este sitio presenta una variedad de tonos oscuros que mantienen la legibilidad y reducen la fatiga visual.</p>
      <h3>Créditos</h3>
      <p>Este sitio está inspirado en el trabajo de <strong>Dmitry Sergushkin</strong>, un diseñador de productos digitales e investigador de UX.</p>
      <p>Más información en <a href="https://uxplanet.org/alternatives-to-using-pure-black-000000-for-text-and-backgrounds-54ef0e733cdb" target="_blank" class="text-blue-400 hover:underline">dmitrysergushkin.com</a></p>
    </div>
  </dialog>
</template>
<script setup lang="ts">
const dialogRef = ref<HTMLDialogElement | null>(null);

const openModal = () => {
	dialogRef.value?.showModal();
};

const closeModal = () => {
	dialogRef.value?.close();
};
</script>
