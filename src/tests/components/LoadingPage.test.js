import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../components/LoadingPage";

// Snapshot
test("Should render loading page correctly", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
