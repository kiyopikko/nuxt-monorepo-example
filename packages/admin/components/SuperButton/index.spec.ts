import { mount } from '@vue/test-utils'
import { baseLocalVue } from 'base/test/utils'
import SuperButton from '~/components/SuperButton/index.vue'

describe('SuperButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SuperButton, {
      localVue: baseLocalVue,
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
