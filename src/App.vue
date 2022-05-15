<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue"
import Footer from "./components/Footer.vue"

export default {
    Components: {
        FooterVue
    },
    components: { Footer }
}

</script>



