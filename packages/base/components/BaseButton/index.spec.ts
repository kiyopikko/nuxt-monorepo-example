import { mount } from '@vue/test-utils'
import { baseLocalVue } from 'base/test/utils'
import BaseButton from '~/components/BaseButton/index.vue'

describe('BaseButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseButton, {
      localVue: baseLocalVue,
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
