<template>
    <div class="card w-96 h-50 bg-secondary shadow-xl">
        <div class="card-body items-center text-center">
            <p>Enter your long URL below to generate a shortened link. It's quick, easy, and free.
                <span class="text-error">
                    Links will last for 24 hours.
                </span>
            </p>
            <div class="card-actions flex-nowrap mt-1">
                <input type="text" placeholder="Long link here" class="input input-bordered w-4/6 max-w-xs"
                    v-model="longLink" />
                <button class="btn btn-accent w-2/6" @click="handleClick">Shorten</button>
            </div>
        </div>
    </div>
    <div v-if="linkError" @click="linkError = false" role="alert" class="alert alert-warning w-96 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>Looks like your Byte sized Link needs a bit more... byte! Add a URL to shrink it down.</span>
    </div>
</template>

<script setup>

const emit = defineEmits(['change']),
    linkError = ref(false),
    longLink = ref(''),

    handleClick = async () => {
        if (longLink.value.length <= 0) { return linkError.value = true }
        linkError.value = false

        const { newLink } = await $fetch('/api/create', {
            method: 'post',
            body: { link: longLink.value }
        })

        emit('change', newLink)
    }
</script>

<style scoped>
/** */
</style>