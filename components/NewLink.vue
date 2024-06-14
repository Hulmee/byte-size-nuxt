<template>
  <div class=" w-96 mt-10">
    <div class="mockup-browser border bg-base-300">
      <div class="mockup-browser-toolbar">
        <div class="input"><span>{{ link[0].long_link }}</span></div>
      </div>
      <div class="flex flex-col items-center justify-center px-2 py-8 bg-base-200">
        <h3>New Link</h3>
        <div class="flex  m-1">

          <p class="mx-1"> <span>{{ baseURL }}</span><span>{{ link[0].id }}</span></p>
          <kbd @click="handleCopy" class="kbd kbd-sm mx-1 cursor-pointer">Copy</kbd>
        </div>
        <small>Expires: <span>{{ new Date(link[0].expires_at).toLocaleString('en-AU', {
          day: 'numeric', weekday: 'short', month: 'short',
          year: 'numeric', hour: 'numeric', minute: 'numeric'
            }) }}</span></small>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  link: {
    type: Array,
    required: true,
  }
}),
  { link } = props,
  // msg = ref(''),
  host = window.location.host,
  baseURL = window.location.href,
  shortURL = host + '/' + link[0].id,


  handleCopy = () => {
    if (shortURL) {

      alert(`url ${shortURL} has been coppied`)
      navigator.clipboard.writeText(shortURL);
    }
    else {
      alert(`nothing to copy`)
    }
  }
console.log(link);
console.log(shortURL);
</script>

<style>
/** */
</style>