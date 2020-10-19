import { createLocalVue, mount } from "@vue/test-utils";
import Search from "@/components/filter-bar/Search.vue";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe("Search", () => {
  let propsData = {
    search: ""
  };

  const data = () => {
    return {
      searchInput: "tr"
    };
  };

  const wrapperFactory = propsData => {
    return mount(Search, {
      propsData: {
        ...propsData
      },
      data,
      localVue
    });
  };

  it("renders", () => {
    const wrapper = wrapperFactory(propsData);

    const search = wrapper.find(".search-input");
    expect(search.exists()).toBe(true);
  });

  it("emits event on input", async () => {
    const wrapper = wrapperFactory(propsData);
    wrapper.find(".search-input").trigger("input");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toBeTruthy();
  });

  describe("when the search value changes", () => {
    it("updates internal property", async () => {
      const wrapper = wrapperFactory(propsData);

      wrapper.setProps({ search: "la" });

      await wrapper.vm.$nextTick();

      expect(wrapper.vm.searchInput).toEqual("la");
    });
  });
});
