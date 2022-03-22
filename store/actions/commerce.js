import nookies from "nookies";
import { API_PUBLIC_URL, API_URL } from "../../constants/info";

export const INIT = "INIT";
export const AUTH = "AUTH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_COMMERCE = "UPDATE_COMMERCE";
export const LOGOUT = "LOGOUT";

/* ------------------------------------ //
//  GET - Initialize commerce
//  @param token: uuid from cookie
// ------------------------------------ */

export const init = (token) => {
  return async (dispatch) => {

    const url = API_URL + "commerces/showme";

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
        if (data.errors.code === "0003") {
          nookies.destroy({}, "token", {
            path: "/",
          });
          dispatch({ type: LOGOUT });
        }
        return {
          error: data.errors,
        };
      } else {
        await dispatch({
          type: INIT,
          token: token,
          user: data.data,
        });
      }
    } catch (error) {
      nookies.destroy({}, "token", {
        path: "/",
      });
      dispatch({ type: LOGOUT });
      return {
        error: JSON.stringify(error),
      };
    }
  };
};

/* ------------------------------------ //
//  POST - Commerce login
//  @param email: user email
//  @param password: user password
// ------------------------------------ */

export const login = (email, password, language) => {
  return async (dispatch) => {
    const url = API_PUBLIC_URL + "commerces/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password: password,
          language: language,
        }),
      });

      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          user: null,
        };
      } else {
        nookies.set({}, "token", data.data.access_token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        await dispatch({
          type: AUTH,
          token: data.data.access_token,
          user: data.data,
        });
        return {
          error: null,
          user: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        user: null,
      };
    }
  };
};

/* ------------------------------------ //
//  POST - Commerce signup
//  @param name: company name
//  @param email: user email
//  @param password: user password
// ------------------------------------ */

export const signup = (commerce_name, email, password, language) => {
  return async (dispatch) => {
    try {
      const url = API_PUBLIC_URL + "commerces";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commerce_name: commerce_name,
          email: email.toLowerCase(),
          password: password,
          language: language,
        }),
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          user: null,
        };
      } else {
        nookies.set({}, "token", data.data.access_token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        await dispatch({
          type: AUTH,
          token: data.data.access_token,
          user: data.data,
        });
        return {
          error: null,
          user: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        user: null,
      };
    }
  };
};

/* ------------------------------------ //
//  POST - Commerce signup - validate email
//  @param code: code sent to email
// ------------------------------------ */

export const validateEmail = (code) => {
  return async (dispatch, getState) => {
    const token = getState().commerce.token;
    try {
      const url = API_URL + "commerces/verify/email/code";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          verification_code: code
        }),
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          user: null,
        };
      } else {
        await dispatch({
          type: UPDATE_USER,
          user: data.data,
        });
        return {
          error: null,
          user: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        user: null,
      };
    }
  };
};

/* ------------------------------------ //
//  PUT - Commerce signup - store information (legal)
//  @param info: data obj
// ------------------------------------ */
export const storeCommerceInfo = (info) => {
  return async (dispatch, getState) => {
    const token = getState().commerce.token;
    try {
      const url = API_URL + "commerces/data";
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(info),
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          user: null,
        };
      } else {
        await dispatch({
          type: UPDATE_USER,
          user: data.data,
        });
        return {
          error: null,
          user: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        user: null,
      };
    }
  }
}

/* ------------------------------------ //
//  PUT - Commerce signup - store information (contact)
//  @param info: data obj
// ------------------------------------ */
export const storeUserInfo = (info) => {
  return async (dispatch, getState) => {
    const token = getState().commerce.token;
    try {
      const url = API_URL + "commerces/data/user";
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(info),
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          user: null,
        };
      } else {
        await dispatch({
          type: UPDATE_USER,
          user: data.data,
        });
        return {
          error: null,
          user: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        user: null,
      };
    }
  }
}

/* ------------------------------------ //
//  PUT - Commerce signup - validate tpv name
//  @param card_reader_name: tpv name already configured
// ------------------------------------ */
export const validateTPV = (card_reader_name) => {
  return async (dispatch, getState) => {
    const token = getState().commerce.token;
    try {
      const url = API_URL + "commerces/card/reader/check";
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          card_reader_name: card_reader_name
        }),
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          user: null,
        };
      } else {
        await dispatch({
          type: UPDATE_USER,
          user: data.data,
        });
        return {
          error: null,
          user: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        user: null,
      };
    }
  }
}

/* ------------------------------------ //
//  PUT - Update commerce visible data
//  @param params: array of items to update 
// ------------------------------------ */
export const updateCommerce = (params) => {
  return async (dispatch, getState) => {

    const token = getState().commerce.token;
    const url = API_URL + "commerces";
    let requestBody = {};
  
    // add elements to url
    params.forEach((element) => {
      requestBody[element.type] = element.value;
    });
  
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (data.errors) {
        return {
          error: data.errors,
          commerce: null,
        };
      } else {
        dispatch({
          type: UPDATE_COMMERCE,
          commerce: data.data
        });
        return {
          error: null,
          commerce: data.data,
        };
      }
    } catch (error) {
      return {
        error: JSON.stringify(error),
        commerce: null,
      };
    }
  }
}

/* ------------------------------------ //
//  Logout user
// ------------------------------------ */

export const logout = () => {
  return async (dispatch) => {
    nookies.destroy({}, "token", {
      path: "/",
    });
    dispatch({
      type: LOGOUT,
    });
  }
};
