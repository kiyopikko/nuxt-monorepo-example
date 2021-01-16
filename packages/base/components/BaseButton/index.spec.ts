import { mount } from '@vue/test-utils'
import BaseButton from '~/components/BaseButton/index.vue'

describe('BaseButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.vm).toBeTruthy()
  })
})
