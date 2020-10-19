import { createLocalVue, mount } from "@vue/test-utils";
import Genres from "@/components/filter-bar/Genres.vue";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe("Genres filter", () => {
  let propsData = {
    navBarItems: [
      "All",
      "Documentary",
      "Talk Show",
      "News",
      "Game Show",
      "Reality",
      "Scripted",
      "Sports"
    ],
    isMobile: false
  };

  const data = () => {
    return {
      selected: null
    };
  };

  const wrapperFactory = propsData => {
    return mount(Genres, {
      localVue,
      data,
      propsData: {
        ...propsData
      }
    });
  };

  describe("renders", () => {
    describe("on larger screens", () => {
      it("as a list of genres", () => {
        const wrapper = wrapperFactory(propsData);

        const desktopList = wrapper.find("div .desktop-list");
        const selectElementList = wrapper.findAll("div .desktop-list ul li");
        const dropdownButton = wrapper.findAll("div .dropdown-button");

        expect(desktopList.exists()).toBe(true);
        expect(selectElementList.length).toEqual(8);
        expect(dropdownButton.exists()).toBe(false);
      });
    });

    describe("on smaller screens", () => {
      it("renders an icon and a dropdown menu", () => {
        const wrapper = wrapperFactory({
          navBarItems: propsData.navBarItems,
          isMobile: true
        });

        const desktopList = wrapper.find("div .desktop-list");
        const dropdownButton = wrapper.findAll("div .dropdown-button");

        expect(desktopList.exists()).toBe(false);
        expect(dropdownButton.exists()).toBe(true);
      });
    });
  });

  describe("when a genre is selected", () => {
    it("emits event", async () => {
      const wrapper = wrapperFactory(propsData);

      const selectElementList = wrapper.findAll("div .desktop-list ul li");
      selectElementList.at(3).trigger("click");

      await wrapper.vm.$nextTick();

      expect(wrapper.emitted()).toBeTruthy();
    });
  });

  describe("when the selected genre changes", () => {
    it("updates internal property", async () => {
      propsData = {
        ...propsData,
        selectedItem: "Documentary"
      };
      const wrapper = wrapperFactory(propsData);

      wrapper.setProps({ selectedItem: "News" });

      await wrapper.vm.$nextTick();

      expect(wrapper.vm.selected).toEqual("News");
    });
  });
});
