import Enzyme from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import DotEnv from "dotenv";

Enzyme.configure({ adapter: new Adapter() });
DotEnv.config({
  path: ".env.test",
});
