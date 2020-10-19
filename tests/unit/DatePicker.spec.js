import { createLocalVue, mount } from "@vue/test-utils";
import DatePicker from "@/components/filter-bar/DatePicker.vue";
import { formatDate } from "@/utils/utils.js";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe("Date picker", () => {
  function wrapperFactory() {
    return mount(DatePicker, {
      localVue,
      propsData: {
        minDate: new Date(),
        isMobile: false,
        selectedDate: formatDate(new Date())
      }
    });
  }

  it("renders", () => {
    const wrapper = wrapperFactory();

    const datePicker = wrapper.find("div .date-picker");
    expect(datePicker.exists()).toBe(true);
  });
});
