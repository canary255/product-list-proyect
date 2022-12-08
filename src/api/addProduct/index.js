import { urlApi } from "../../utils/url/url";

export const addProduct = async (formData) => {
    return await fetch(`${urlApi}/createProduct`, {
    method: "POST",
    body: formData,
  });
}