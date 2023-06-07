import { pair } from "../src/pair";
describe("test pair function", () => {
  it("should return array of a and b ", () => {
    expect(pair("ab")).toBe(["ab"]);
  });
});
