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

describe("getSavedTags", () => {
  test("shoud return empty string for empty input", () => {
    expect(stringHelper.getSavedTags()).toBe("");
  });

  test("shoud return span tags for # tag", () => {
    expect(stringHelper.getSavedTags("some #text")).toMatch(
      'some<a href="#" class="saved-hash"> #text</a>'
    );
  });

  test("shoud return span tags for @ tag", () => {
    expect(stringHelper.getSavedTags("some @text")).toMatch(
      'some<a href="#" class="saved-at"> @text</a>'
    );
  });

  test("shoud return span tags for email", () => {
    expect(stringHelper.getSavedTags("just some@email.com")).toMatch(
      'just<a href="#" class="saved-email"> some@email.com</a>'
    );
  });

  test("shoud return span tags for url", () => {
    expect(stringHelper.getSavedTags("visit www.myurl.com")).toMatch(
      'visit<a href="#" class="saved-url"> www.myurl.com</a>'
    );
  });
});
