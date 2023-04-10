<template>
  <div class="">
    <Header />
      <main class="pt-16 max-w-screen">
        <slot/>
      </main>
    <Footer />
  </div>
</template>
<style>
main {
  min-height: calc(100vh - 40px); /* 100vh - footer hight */
}
</style>