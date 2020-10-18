import { mount } from '@vue/test-utils'
import ShowCard from '@/components/shows/ShowCard.vue'
import shows from '@/data/test-data/shows.json'

describe('Show card', () => {
  it('renders a summary of show information', () => {
    const wrapper = mount(ShowCard, {
      propsData: {
        show: shows[0]
      }
    })
    expect(wrapper.find('div')).toBeTruthy()
  })
})
