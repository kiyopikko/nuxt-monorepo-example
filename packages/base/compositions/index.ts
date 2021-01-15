import { reactive, toRefs } from '@vue/composition-api'

export const useText = () => {
  const state = reactive({
    text: '0',
  })

  const changeText = () => {
    state.text = `${Math.random()}`
  }

  return {
    changeText,
    ...toRefs(state),
  }
}
