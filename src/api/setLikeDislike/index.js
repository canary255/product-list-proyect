import { urlApi } from "../../utils/url/url";

export const setLikeDislike = async (id) => {
    await fetch(`${urlApi}/likeDislikeProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
    });
};
