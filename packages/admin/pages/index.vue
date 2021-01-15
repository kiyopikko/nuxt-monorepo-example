<template>
  <div>
    <super-button />
    <div>{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    text() {
      return this.$store.getters['simple/text']
    },
  },
  mounted() {
    this.$log()
    this.$store.commit('simple/setText', { text: 'mounted!' })
    setTimeout(() => {
      this.$store.commit('simple/setText', { text: '' })
    }, 2000)
  },
})
</script>
