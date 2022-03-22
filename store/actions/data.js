import { API_URL } from "../../constants/info";

export const DATA_INIT = "DATA_INIT";

/* ------------------------------------ //
//  GET - Initialize web information
// ------------------------------------ */

export const dataInit = (token) => {
  return async (dispatch, getState) => {

    const url = API_URL + "commerces/web/info";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
        };
      } else {
        await dispatch({
          type: DATA_INIT,
          config: data.data,
        });
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
      };
    }
  };
};
