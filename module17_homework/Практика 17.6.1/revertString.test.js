import {revertString} from "./revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abcd")).toBe("dcba"));
});