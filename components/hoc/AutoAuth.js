import React from "react";
import nookies from "nookies";
import * as commerceActions from "../../store/actions/commerce";
import * as dataActions from "../../store/actions/data";
import { wrapper } from "../../store/store";

import AuthLayout from "../../layouts/auth";
import TinkLayout from "../../layouts/tink";
import PublicLayout from "../../layouts/main";

/**
 * AutoAuth component
 * Authenticate and initialize users if there's an auth cookie set
 */
const AutoAuth = () => {
  return class AutoAuth extends React.Component {
    static getInitialProps = wrapper.getInitialAppProps(
      (store) =>
        async ({ Component, ctx }) => {

          const existingToken = store.getState().commerce.token;
          const initialized = store.getState().commerce.initialized;

          const { token } = nookies.get(ctx);

          if (!existingToken && !initialized && token) {
            // store token + fetch data
            await store.dispatch(commerceActions.init(token));
            await store.dispatch(dataActions.dataInit(token));
          }
  
          return {
            pageProps: {
              // Call page-level getInitialProps
              ...(Component.getInitialProps
                ? await Component.getInitialProps({ ...ctx, store })
                : {}),
              pathname: ctx.pathname,
            },
          };
        }
    );

    render() {
      
      const { Component, pageProps, router } = this.props;

      let layout = <Component {...pageProps} />;
      // tink webview @ app
      if (router.route == "/tink") {
        layout = (
          <TinkLayout>
            <Component {...pageProps} />
          </TinkLayout>
        );
      } else if (router.route == "/login" || router.route.indexOf("/signup") != -1) {
        layout = (
          <AuthLayout {...pageProps}>
            <Component {...pageProps} />
          </AuthLayout>
        );
      } else {
        layout = (
          <PublicLayout {...pageProps}>
            <Component {...pageProps} />
          </PublicLayout>
        );
      }
      return layout;
    }
  };
};

export default AutoAuth;
