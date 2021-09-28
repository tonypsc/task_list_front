const stringHelper = {
  getTypingTags(text) {
    let newText = text;

    if (!text) return "";

    const hashes = text.match(/(^|\s)#\S+/g);
    if (hashes) {
      hashes.forEach((element) => {
        newText = newText.replace(
          element,
          `<span class="hash">${element}</span>`
        );
      });
    }

    const ats = text.match(/(^|\s)@\S+/g);
    if (ats) {
      ats.forEach((element) => {
        newText = newText.replace(
          element,
          `<span class="at">${element}</span>`
        );
      });
    }

    // TODO: url regex can be optimized
    const urls = text.match(
      /(^|\s)((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})\S+/g
    );
    if (urls) {
      urls.forEach((element) => {
        newText = newText.replace(
          element,
          `<span class="url">${element}</span>`
        );
      });
    }

    // TODO: email regex can be optimized
    const emails = text.match(/(^|\s)\w*@\w[\w-]*\.(\w*[\.-])*[\w-]\S+/g);
    if (emails) {
      emails.forEach((element) => {
        newText = newText.replace(
          element,
          `<span class="email">${element}</span>`
        );
      });
    }

    return newText;
  },

  getSavedTags(text) {
    let newText = text;

    if (!text) return "";

    const hashes = text.match(/(^|\s)#\S+/g);
    if (hashes) {
      hashes.forEach((element) => {
        newText = newText.replace(
          element,
          `<a href="#" class="saved-hash">${element}</a>`
        );
      });
    }

    const ats = text.match(/(^|\s)@\S+/g);
    if (ats) {
      ats.forEach((element) => {
        newText = newText.replace(
          element,
          `<a href="#" class="saved-at">${element}</a>`
        );
      });
    }

    // TODO: url regex can be optimized
    const urls = text.match(
      /(^|\s)((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})\S+/g
    );
    if (urls) {
      urls.forEach((element) => {
        newText = newText.replace(
          element,
          `<a href="#" class="saved-url">${element}</a>`
        );
      });
    }

    // TODO: email regex can be optimized
    const emails = text.match(/(^|\s)\w*@\w[\w-]*\.(\w*[\.-])*[\w-]\S+/g);
    if (emails) {
      emails.forEach((element) => {
        newText = newText.replace(
          element,
          `<a href="#" class="saved-email">${element}</a>`
        );
      });
    }

    return newText;
  },
};

export default stringHelper;
