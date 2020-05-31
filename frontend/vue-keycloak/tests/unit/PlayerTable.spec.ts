import { shallowMount } from '@vue/test-utils'
import PlayerTable from '@/components/PlayerTable.vue'

describe('PlayerTable.vue', () => {
  it('renders default state', () => {
    // setup
    const wrapper = shallowMount(PlayerTable)

    // when~then
    expect(wrapper.vm.$data.filterWord).toBe('')
    expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.find('p').exists()).toBe(true)
  })

  it('filters players', () => {
    // setup
    const wrapper = shallowMount(PlayerTable)
    wrapper.setData({
      players: [
        {
          name: 'Fue',
          age: '20',
          salary: '20000000'
        },
        {
          name: 'Hoe',
          age: '31',
          salary: '1000000000'
        },
        {
          name: 'Boo',
          age: '40',
          salary: '50000000000'
        }
      ]
    })

    // when~then
    wrapper.find('input[type="text"]').setValue('Fu')
    expect(wrapper.vm.$data.filterWord).toBe('Fu')
    expect(wrapper.vm.$data.filterPlayers).toStrictEqual([{ age: '20', name: 'Fue', salary: '20000000' }])

    wrapper.find('input[type="text"]').setValue('Hoe')
    expect(wrapper.vm.$data.filterWord).toBe('Hoe')
    expect(wrapper.vm.$data.filterPlayers).toStrictEqual([{ age: '31', name: 'Hoe', salary: '1000000000' }])
  })
})
