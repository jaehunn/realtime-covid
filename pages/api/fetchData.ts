// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js
import convert from "xml-js";

import { dataSourceUrl } from "../../auth/key";

export const fetchData = async () => {
  const response = await fetch(dataSourceUrl);

  const xml = await response.text();

  const data = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }));

  return data;
};
