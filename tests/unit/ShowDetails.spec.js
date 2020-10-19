import { mount } from "@vue/test-utils";
import ShowDetails from "@/components/shows/ShowDetails.vue";
import shows from "@/data/test-data/shows.json";

describe("Show card", () => {
  it("renders show details", () => {
    const wrapper = mount(ShowDetails, {
      propsData: {
        selectedShow: shows[0]
      }
    });
    expect(wrapper.find(".show-details")).toBeTruthy();
  });
});
