import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

// Render Page
test("Should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper.find("h2").text()).toBe("Oops! It's a 404")
  expect(wrapper).toMatchSnapshot();
});
