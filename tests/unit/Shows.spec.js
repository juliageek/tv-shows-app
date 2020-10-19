import { createLocalVue, shallowMount } from "@vue/test-utils";
import Shows from "@/components/shows/Shows.vue";
import shows from "@/data/test-data/shows.json";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(Vuex);

describe("Shows", () => {
  const actions = {
    fetchShows: jest.fn()
  };
  const state = {
    shows: shows,
    params: {
      country: "GB",
      date: "2020-10-21"
    }
  };
  const store = new Vuex.Store({
    modules: {
      shows: {
        state,
        actions,
        namespaced: true
      }
    }
  });
  const data = () => {
    return {
      selectedShow: shows[0]
    };
  };

  function wrapperFactory() {
    return shallowMount(Shows, {
      store,
      localVue,
      data
    });
  }

  describe("on first mount", () => {
    describe("if there are shows", () => {
      it("displays a list of show cards", () => {
        const wrapper = wrapperFactory();
        expect(wrapper.findAll("show-card")).not.toEqual([]);
      });
    });

    describe("if there are no shows", () => {
      it("displays a message", () => {
        state.shows = [];
        const wrapper = wrapperFactory();
        expect(wrapper.find(".empty-container")).toBeTruthy();
      });
    });
  });

  describe("on genre filter change", () => {
    it("filters shows", async () => {
      state.shows = shows;
      const mockMethod = jest.spyOn(Shows.methods, "filterShows");
      const wrapper = wrapperFactory();
      wrapper.vm.$refs.filterBar.$emit("genre", "Documentary");

      await wrapper.vm.$nextTick();

      const components = wrapper.findAllComponents({ name: "ShowCard" });

      expect(mockMethod).toHaveBeenCalledWith("Documentary");
      expect(components.length).toEqual(7);
    });
  });

  describe("on search input", () => {
    it("searches shows", async () => {
      const mockMethod = jest.spyOn(Shows.methods, "searchShows");
      const wrapper = wrapperFactory();
      wrapper.vm.$refs.filterBar.$emit("search", "all");

      await wrapper.vm.$nextTick();

      const components = wrapper.findAllComponents({ name: "ShowCard" });

      expect(mockMethod).toHaveBeenCalledWith("all");
      expect(components.length).toEqual(1);
    });
  });

  describe("on params change", () => {
    it("fetches shows", () => {
      state.params.country = "FR";

      expect(actions.fetchShows).toHaveBeenCalled();
    });
  });
});
