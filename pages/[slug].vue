<template>
  <section class="h-full flex flex-col justify-start items-center">

    <Hero>Redirect Page</Hero>
    <!-- <pre>{{ linkMsg }}</pre> -->
    <pre>{{ link }}</pre>

    <span v-if="!linkMsg" class="loading loading-dots loading-lg text-primary mt-2"></span>
    <div v-else class="stats bg-accent  shadow">
      <div class="stat place-items-center">
        <div class="stat-value">{{ linkMsg }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute(),
  router = useRouter(),
  linkMsg = ref(''),
  link = ref('')

const fetchLibrary = async () => {
  const { msg, linkURL } = await $fetch(`/api/link/${route.params.slug}`)
  console.log(msg)
  link.value = linkURL
  linkMsg.value = msg
}

watchEffect(async () => {
  if (link.value) {
    await navigateTo(link.value, { external: true }); // Navigate using the router
  }
})

onMounted(() => {
  fetchLibrary()
})
</script>

<style>
/** */
</style>