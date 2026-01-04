
import { telegramService } from "./services/telegram";

import dotenv from "dotenv";
import { getArticlePrice } from "./services/scrapper";
dotenv.config();


const scrapers = [
  {
    name: "Falabella",
    url: "https://www.falabella.com.pe/falabella-pe/product/prod18290295/Celular-Redmi-Note-14-Pro-8GB-256GB/20821986",
    selector: "li[data-internet-price]"
  },
  {
    name: "Ripley",
    url: "https://simple.ripley.com.pe/celular-xiaomi-midnight-black-redmi-note-14-pro-256gb-8gb-ram-50mp-667-2065353064831p?color_80=negro&s=mdco",
    selector: "div.product-price-container.product-internet-price dt.product-price"
  },
  {
    name: "La Curacao",
    url: "https://www.lacuracao.pe/note-14pro-8gb-256gb-black-14problack.html?utm_term=&utm_campaign=CURACAO_google_shopping_marca_tactica_2024_conversiones_top-index&utm_source=adwords&utm_medium=ppc&hsa_acc=5637805738&hsa_cam=21363983236&hsa_grp=164849716444&hsa_ad=701632155350&hsa_src=g&hsa_tgt=pla-1981131767416&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21363983236&gbraid=0AAAAADdtZZp1DT1tEXxXmsf5GV9mV1pFq&gclid=EAIaIQobChMIhM7X0pHykQMVe19IAB051AyfEAQYCCABEgJ7kPD_BwE",
    selector: "span[data-price-type='finalPrice'] span.price"
  }
];

const ScrapWebsite = async () => {


  const promises = scrapers.map(async (scraper) => {
    const price = await getArticlePrice(scraper.url, scraper.selector, scraper.name);
    if (price) {
      telegramService.sendMessage(`Precio para ${scraper.name}: ${price}`);
    }
  });

  await Promise.all(promises);


};

ScrapWebsite();
