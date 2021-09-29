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

  test("shoud return a tags for # tag", () => {
    expect(stringHelper.getSavedTags("some #text")).toMatch(
      'some<a href="#" class="tags saved-hash"> #text</a>'
    );
  });

  test("shoud return a tags for @ tag", () => {
    expect(stringHelper.getSavedTags("some @text")).toMatch(
      'some<a href="#" class="tags saved-at"> @text</a>'
    );
  });

  test("shoud return a tags for email", () => {
    expect(stringHelper.getSavedTags("just some@email.com")).toMatch(
      'just<a href="mailto: some@email.com" class="tags saved-email">'
    );
  });

  test("shoud return a tags for url", () => {
    expect(stringHelper.getSavedTags("visit www.myurl.com")).toMatch(
      'visit<a href=" www.myurl.com" class="tags saved-url">Link</a>'
    );
  });
});
