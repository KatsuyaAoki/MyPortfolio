<template>
  <header class="fixed top-0 left-0 z-50 bg-white shadow-sm w-screen h-16">
    <div class="mx-auto max-w-6xl flex flex-row justify-between items-center h-full">
      <NuxtLink to="/" class="text-2xl font-bold px-3">MyPortfolio</NuxtLink>
      <nav class="flex flex-row space-x-1">
        <NuxtLink to="/" class="capitalize font-bold px-3 duration-300 hover:opacity-60">top</NuxtLink>
        <NuxtLink to="/works" class="capitalize font-bold px-3 duration-300 hover:opacity-60">works</NuxtLink>
        <NuxtLink to="/blog" class="capitalize font-bold px-3 duration-300 hover:opacity-60">blog</NuxtLink>
      </nav>
    </div>
  </header>
</template>