import { createLocalVue, mount } from "@vue/test-utils";
import CountryFilter from "@/components/filter-bar/CountryFilter.vue";
import availableCountries from "@/data/countries.json";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe("Country filter", () => {
  function wrapperFactory() {
    return mount(CountryFilter, {
      localVue,
      propsData: {
        selectedCountry: "FR",
        countries: availableCountries
      }
    });
  }

  it("renders", () => {
    const wrapper = wrapperFactory();
    expect(wrapper.find("countries-select")).toBeTruthy();
  });

  it("emits event on click on another country", async () => {
    const wrapper = wrapperFactory();
    wrapper.findAll("select > option").at(1).element.selected = true;

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toBeTruthy();
  });
});
