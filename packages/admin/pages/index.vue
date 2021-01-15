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
      return this.$store.getters['test/text']
    },
  },
  mounted() {
    this.$log()
    this.$store.commit('test/setText', { text: 'mounted!' })
    setTimeout(() => {
      this.$store.commit('test/setText', { text: '' })
    }, 2000)
  },
})
</script>
