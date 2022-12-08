import { urlApi } from "../../utils/url/url";

export const getProductById = async (signal) => {
      const response = await fetch(`${urlApi}/getProduct`, { signal });
      const json = await response.json();
      return json;
    };
