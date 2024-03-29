import React from "react";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
