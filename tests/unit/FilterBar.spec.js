import { createLocalVue, shallowMount } from "@vue/test-utils";
import FilterBar from "@/components/filter-bar/FilterBar.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";
import availableCountries from "@/data/countries.json";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("Filter Bar", () => {
  const mutations = {
    setDate: jest.fn(),
    setCountry: jest.fn()
  };

  const getters = {
    genres: () => [
      "All",
      "Documentary",
      "Talk Show",
      "News",
      "Game Show",
      "Reality",
      "Scripted",
      "Sports"
    ]
  };

  const state = {
    params: {
      country: "GB",
      date: "2020-10-21"
    }
  };
  const store = new Vuex.Store({
    modules: {
      shows: {
        state,
        getters,
        mutations,
        namespaced: true
      }
    }
  });
  const data = () => {
    return {
      countries: availableCountries,
      search: "",
      today: new Date(),
      visible: true
    };
  };

  function wrapperFactory() {
    return shallowMount(FilterBar, {
      store,
      localVue,
      data
    });
  }

  it("renders", () => {
    const wrapper = wrapperFactory();

    const filterBar = wrapper.find("div .filter-bar");
    expect(filterBar.exists()).toBe(true);
  });

  it("acts on genre change", async () => {
    const mockMethod = jest.spyOn(FilterBar.methods, "onGenreChange");
    const wrapper = wrapperFactory();

    wrapper.vm.$refs.genres.$emit("genre", "Documentary");
    await wrapper.vm.$nextTick();

    expect(mockMethod).toHaveBeenCalled();
  });

  it("acts on search", async () => {
    const mockMethod = jest.spyOn(FilterBar.methods, "onSearchChange");
    const wrapper = wrapperFactory();

    wrapper.vm.$refs.search.$emit("search", "all");
    await wrapper.vm.$nextTick();

    expect(mockMethod).toHaveBeenCalled();
  });
});
