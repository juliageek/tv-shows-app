import { createLocalVue, mount } from '@vue/test-utils'
import Search from '@/components/filter-bar/Search.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('Search', () => {
  function wrapperFactory() {
    return mount(Search, {
      data: () => {
        return {
          searchInput: ''
        }
      },
      localVue
    });
  }

  it('renders', () => {
    const wrapper = wrapperFactory();

    const search = wrapper.find('.search-input');
    expect(search.exists()).toBe(true)
  })

  it('emits event on input', async () => {
    const wrapper = wrapperFactory();
    const search = wrapper.find('.search-input').value = 'a';

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()).toBeTruthy()
  })
})