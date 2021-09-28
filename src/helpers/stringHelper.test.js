import stringHelper from "./stringHelper";

describe("getTypingTags", () => {
  test("shoud return empty string for empty input", () => {
    expect(stringHelper.getTypingTags()).toBe("");
  });

  test("shoud return span tags for # tag", () => {
    expect(stringHelper.getTypingTags("some #text")).toMatch(
      'some<span class="hash"> #text</span>'
    );
  });

  test("shoud return span tags for @ tag", () => {
    expect(stringHelper.getTypingTags("some @text")).toMatch(
      'some<span class="at"> @text</span>'
    );
  });

  test("shoud return span tags for email", () => {
    expect(stringHelper.getTypingTags("just some@email.com")).toMatch(
      'just<span class="email"> some@email.com</span>'
    );
  });

  test("shoud return span tags for url", () => {
    expect(stringHelper.getTypingTags("visit www.myurl.com")).toMatch(
      'visit<span class="url"> www.myurl.com</span>'
    );
  });
});
