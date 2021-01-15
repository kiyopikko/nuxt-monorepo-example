import { mount } from '@vue/test-utils'
import SuperButton from '~/components/SuperButton.vue'

describe('SuperButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SuperButton)
    expect(wrapper.vm).toBeTruthy()
  })
})
