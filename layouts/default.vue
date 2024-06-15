<template>
    <div>

        <Head>
            <Link rel="canonical" :href="canonical" />
        </Head>

        <Nav />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>
const route = useRoute(),
    config = useRuntimeConfig(),
    canonical = config.public.canonicalURL + route.fullPath


</script>

<style scoped>
main {
    height: calc(100dvh - (4rem + 4rem))
}
</style>