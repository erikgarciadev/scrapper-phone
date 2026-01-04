import { JSDOM } from "jsdom";

const getDocument = (html: string, urlBase = "") => {
  const dom = new JSDOM(html, {
    url: urlBase,
  });

  return dom.window.document;
};

export const dom = {
  getDocument,
};
