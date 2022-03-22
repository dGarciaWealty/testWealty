// ------------------------------------ //
//  Base
// ------------------------------------ //

import React from "react";
import { appWithTranslation } from 'next-i18next';

// ------------------------------------ //
//  Style
// ------------------------------------ //

import "../styles/globals.scss";
import "aos/dist/aos.css";

// ------------------------------------ //
//  Components
// ------------------------------------ //

import { wrapper } from "../store/store";

import autoAuth from "../components/hoc/AutoAuth";

/**
 * Main APP component
 * @returns
 */
function Wealty({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(appWithTranslation(autoAuth(Wealty)));
