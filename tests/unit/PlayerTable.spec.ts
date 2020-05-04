import { shallowMount } from '@vue/test-utils'
import PlayerTable from '@/components/PlayerTable.vue'

describe('PlayerTable.vue', () => {
  it('renders props.msg when passed', () => {
    // setup
    const wrapper = shallowMount(PlayerTable)

    // expect default
    expect(wrapper.vm.$data.filterWord).toMatch('')
    expect(wrapper.find('table').exists()).toBe(true)

    // type text
    wrapper.find('input[type="text"]').setValue('Fue')
    expect(wrapper.vm.$data.filterWord).toMatch('Fue')
  })
})
