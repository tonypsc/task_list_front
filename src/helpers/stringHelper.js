const stringHelper = {
  getTypingTags(text) {
    let newText = text;

    if (!text) return "";

    const hashes = text.match(/(^|\s)#\S+/g);
    if (hashes) {
      hashes.forEach((element) => {
        newText = newText.replace(
          element,
          `<span className="hash">${element}</span>`
        );
      });
    }

    const ats = text.match(/(^|\s)@\S+/g);
    if (ats) {
      ats.forEach((element) => {
        newText = newText.replace(
          element,
          `<span className="at">${element}</span>`
        );
      });
    }

    // TODO: url regex can be optimized
    const urls = text.match(
      // /(^|\s)((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)\S+/g
      /(^|\s)((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})\S+/g
    );
    if (urls) {
      urls.forEach((element) => {
        newText = newText.replace(
          element,
          `<span className="url">${element}</span>`
        );
      });
    }

    // TODO: email regex can be optimized
    const emails = text.match(/(^|\s)\w*@\w[\w-]*\.(\w*[\.-])*[\w-]\S+/g);
    if (emails) {
      emails.forEach((element) => {
        newText = newText.replace(
          element,
          `<span className="email">${element}</span>`
        );
      });
    }

    return newText;
  },
};

export default stringHelper;
