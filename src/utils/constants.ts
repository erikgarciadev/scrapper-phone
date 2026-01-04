export const URLS = Object.freeze({
  TELETICKET: "https://teleticket.com.pe/",
  JOINUSS: "https://www.joinnus.com/",
  PLAZANORTE: "https://plazanorte.pe/",
  MALLSUR: "https://malldelsur.pe/",
  LARCOMAR: "https://www.larcomar.com/",
  MEGAPLAZA: "https://www.megaplaza.com.pe/",
  MALLPLAZA: "https://mallplaza.com/pe",
  ATRAPALO: "https://www.atrapalo.pe",
  REALPLAZA: "https://www.realplaza.com",
});

export const ORIGINS = Object.freeze({
  TELETICKET: "TELETICKET",
  JOINNUS: "JOINNUS",
  VAOPE: "VAOPE",
  PLAZANORTE: "PLAZANORTE",
  PLAZASANMIGUEL: "PLAZASANMIGUEL",
  MALLSUR: "MALLSUR",
  LARCOMAR: "LARCOMAR",
  MEGAPLAZA: "MEGAPLAZA",
  MALLPLAZA: "MALLPLAZA",
  ATRAPALO: "ATRAPALO",
  REALPLAZA: "REALPLAZA",
  PASSLINE: "PASSLINE",
});

export const SUB_ORIGINS = Object.freeze({
  MALLPLAZA: {
    BELLAVISTA: "bellavista",
    COMAS: "comas",
  },
});

export const MALLS_REALPLAZA = Object.freeze({
  SALAVERRY: {
    id: 19,
    name: "Real Plaza Salaverry",
    code: "salaverry",
  },
  PURUCHUCO: {
    id: 18,
    name: "Real Plaza Puruchuco",
    code: "puruchuco",
  },
  CENTROCIVICO: {
    id: 3,
    name: "Real Plaza Centro Cívico",
    code: "centro-civico",
  },
  GUARDIACIVIL: {
    id: 9,
    name: "Real Plaza Guardia Civil",
    code: "guardia-civil",
  },
  PRIMAVERA: {
    id: 15,
    name: "Real Plaza Primavera",
    code: "primavera",
  },
  PRO: {
    id: 16,
    name: "Real Plaza Pro",
    code: "pro",
  },
  SANTACLARA: {
    id: 20,
    name: "Real Plaza Santa Clara",
    code: "santa-clara",
  },
  VILLAMARIA: {
    id: 23,
    name: "Real Plaza Villa Maria",
    code: "villa-maria",
  },
});

export const URL_SCRAPPER_TELETICKET = "https://teleticket.com.pe/todos";

export const SELECTOR_EVENT_TELETICKET =
  ".col-12.listado--eventos.listado--eventos-agrupados.w-100 article";

export const URL_SCRAPPER_JOINNUS =
  "https://www.joinnus.com/search?searchKey={%22text%22:%22%22,%22maps%22:false,%22filters%22:{%22price%22:{%22min%22:%22%22,%22max%22:%22%22},%22categories%22:[],%22dates%22:{%22dateStart%22:%222024-09-01T00:00:00%22,%22dateEnd%22:%222024-09-30T23:59:00%22,%22key%22:%22nextMonth%22},%22location%22:{%22z%22:12,%22center%22:{%22lat%22:-12.074317294768308,%22lng%22:-77.04348643769534}},%22city%22:[%22lima%22]},%22page%22:3,%22country%22:%22PE%22}";

//export const URL_SCRAPPER_JOINNUS =
("https://www.joinnus.com/search?searchKey={%22text%22:%22%22,%22maps%22:false,%22filters%22:{%22price%22:{%22min%22:0,%22max%22:0},%22categories%22:[],%22dates%22:{%22dateStart%22:%222024-09-01T00:00:00%22,%22dateEnd%22:%222024-09-30T23:59:00%22,%22key%22:%22nextMonth%22},%22location%22:{%22z%22:12,%22center%22:{%22lat%22:-12.074317294768308,%22lng%22:-77.04348643769534}},%22city%22:[%22lima%22]},%22page%22:1,%22country%22:%22PE%22}");

export const SELECTOR_EVENT_JOINNUS = ".card-event-content a.card-event";

export const URL_SCRAPPER_VAOPE = "https://vaope.com/lima/highlights";

export const SELECTOR_EVENT_VAOPE = "article";

export const FILTER_MONTH = 1;

export const URL_API_JOINNUS = "https://api.joinnus.com/v2";
export const URL_API_PLAZANORTE = `${URLS.PLAZANORTE}wp-admin/admin-ajax.php`;
export const URL_API_MALLSUR = `${URLS.MALLSUR}wp-admin/admin-ajax.php`;

export const URL_API_PLAZASANMIGUEL = `https://maniaxe.plazasanmiguel.io/api/events/`;

export const URL_API_LARCOMAR = `https://api-eventos.parauco.com/v1/event-promotions/list/preview?mallCode=LAR&type=EVENT&languageCode=es&channel=WEB`;

export const URL_API_MEGAPLAZA = `https://api-eventos.parauco.com/v1/event-promotions/list/preview?mallCode=IPS&type=EVENT&languageCode=es&channel=WEB
`;

export const URL_SCRAPPER_ATRAPALO =
  "https://www.atrapalo.pe/entradas/lima/lima/";

export const URL_API_PASSLINE =
  "https://api.passline.com/v1/event/GetBillboardByFilters/";

export const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
