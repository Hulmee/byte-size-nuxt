<template>
    <section class=" w-screen pt-3 h-full flex flex-col justify-start items-center">
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
// const link = ref([]),
const link = ref([]),

    handleChange = (e) => {
        // getLink(lLink)
        // link.value = e
        console.log(e);
        link.value = e
    }


useSeoMeta({
    title: 'Byte Size Link',
    description: 'Shorten long URLs instantly & manage them easily! Ellery Hulme\'s link shortener, built with  Nuxt.js & Supabase, offers a simple & lightweight solution.',
    ogTitle: 'Efficient Link Shortening with Ellery Hulme',
    ogDescription: 'Discover our lightweight link shortener, created by Ellery Hulme, leveraging  Nuxt.js and Supabase for a seamless experience.',
    // ogUrl: canonical,
    twitterCard: 'summary',
    keywords: 'link shortener,  Nuxt.js, Supabase, DaisyUI, Tailwind CSS, efficient link shortening, custom CSS, SCSS, Ellery Hulme',
    author: 'Ellery Hulme',
    robots: 'index, follow',
})

</script>

<style scoped>
/** */
</style>