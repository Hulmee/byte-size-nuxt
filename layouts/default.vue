<template>
    <div>

        <Head>
            <Link rel="canonical" href="http://bytsize.link/" />
        </Head>
        <Nav />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
main {
    height: calc(100dvh - (4rem + 4rem))
}
</style>