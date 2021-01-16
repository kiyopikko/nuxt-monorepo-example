<template>
  <button class="b-btn" @click="changeText">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useText } from 'base/compositions'

export default defineComponent({
  setup() {
    const { text, changeText } = useText()

    return {
      text,
      changeText,
    }
  },
})
</script>
