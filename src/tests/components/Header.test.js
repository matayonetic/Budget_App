import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

// Render Header
test("Should correctly render Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

/*
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

// Render Header
test("Should render header correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
*/
