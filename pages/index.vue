<template>
    <section class=" w-screen pt-3 h-full flex flex-col justify-start items-center">

        <Head>
            <Link rel="canonical" href="http://bytsize.link/" />
        </Head>
        <Hero>
            Byte Size Link
        </Hero>
        <Shorten @change="e => { handleChange(e) }" />
        <ClientOnly>
            <NewLink v-if="link.length" :link="link" />
        </ClientOnly>

    </section>
</template>

<script setup>

const link = ref([]),

    handleChange = (e) => {
        link.value = e
    }


useSeoMeta({
    title: 'Byte Size Link',
    description: 'Shorten long URLs instantly & manage them easily! Ellery Hulme\'s link shortener, built with Vue.js & Supabase, offers a simple & lightweight solution.',
    ogTitle: 'Efficient Link Shortening with Ellery Hulme',
    ogDescription: 'Discover our lightweight link shortener, created by Ellery Hulme, leveraging Vue.js and Supabase for a seamless experience.',
    ogUrl: 'https://bytsize.link/',
    twitterCard: 'summary',
    keywords: 'link shortener, Vue.js, Supabase, DaisyUI, Tailwind CSS, efficient link shortening, custom CSS, SCSS, Ellery Hulme',
    author: 'Ellery Hulme',
    robots: 'index, follow',
})

</script>

<style scoped>
/** */
</style>