import { shallowMount } from '@vue/test-utils'
import NumberView from '@/components/NumberView.vue'

describe('NumberView.vue', () => {
  it('renders default state', () => {
    // setup
    const wrapper = shallowMount(NumberView, {
      propsData: {
        number: 3
      }
    })

    // when~then
    const result = wrapper.find('p').text().replace(/([ \n])/g, '')
    expect(result).toBe('Prev:2Next:4')
  })
})
