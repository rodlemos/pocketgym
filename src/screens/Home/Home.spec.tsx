import renderer from "react-test-renderer";
import Home from ".";

describe("Home page", () => {
  it("should be able to do something", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
