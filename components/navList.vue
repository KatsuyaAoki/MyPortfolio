<script setup lang="ts">
interface Emits {
	(e: 'resetClass', v:null):void;
}
const emits = defineEmits<Emits>();
</script>
<template>
	<nav class="flex flex-col md:flex-row md:space-x-2">
		<NuxtLink @click="emits('resetClass', null)" to="/" class="font-mono border-b py-4 md:border-b-0 md:py-0 md:px-2 font-bold capitalize duration-300 hover:opacity-60">top</NuxtLink>
		<NuxtLink @click="emits('resetClass', null)" to="/works" class="font-mono border-b py-4 md:border-b-0 md:py-0 md:px-2 font-bold capitalize duration-300 hover:opacity-60">works</NuxtLink>
		<NuxtLink @click="emits('resetClass', null)" to="/blog" class="font-mono border-b py-4 md:border-b-0 md:py-0 md:px-2 font-bold capitalize duration-300 hover:opacity-60">blog</NuxtLink>
	</nav>
</template>