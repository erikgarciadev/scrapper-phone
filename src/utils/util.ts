import { SUB_ORIGINS } from "./constants";

const validateCitiesAvailable = (text: string) => {
  const cities = ["LIMA", "PUENTE PIEDRA"];

  let isAvailable = false;

  for (const city of cities) {
    if (text.toUpperCase().includes(city)) {
      isAvailable = true;
      break;
    }
  }

  return isAvailable;
};

const getDataMallPlaza = (subOrigin: string) => {
  let baseHref = "";
  let file = "";
  let location = "";
  let json = "";
  switch (subOrigin) {
    case SUB_ORIGINS.MALLPLAZA.BELLAVISTA:
      json = `https://mallplaza.com/page-data/pe/bellavista/eventos/page-data.json`;
      location = "Mall Plaza Bellavista";
      file = "event_mall_plaza_bellavista.json";
      baseHref = "https://mallplaza.com/pe/bellavista/";
      break;
    case SUB_ORIGINS.MALLPLAZA.COMAS:
      json = `https://mallplaza.com/page-data/pe/comas/eventos/page-data.json`;
      location = "Mall Plaza Comas";
      file = "event_mall_plaza_comas.json";
      baseHref = "https://mallplaza.com/pe/comas/";
      break;
    default:
      break;
  }

  return {
    json,
    file,
    location,
    baseHref,
  };
};

const getEndpointRealPlaza = (mall_id: number) => {
  return `https://apigw.prd.realplaza.io/business-digital-cms/event-omnicanal/app?channel=Web&page=1&size=1000&mall_id=${mall_id}`;
};

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const util = {
  validateCitiesAvailable,
  getDataMallPlaza,
  getEndpointRealPlaza,
  delay,
};
