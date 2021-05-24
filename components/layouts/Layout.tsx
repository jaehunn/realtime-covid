import React from "react";
import Head from "next/head";
import { LayoutProps } from "../../types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Coronavirus Covid-19 Virus Data — Global Data Dashboard</title>
        <meta name="description" content="Data visualisation of the Covid-19 Pandemic" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Analytics */}
        {/* Favicon */}

        {/* social description */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RealTime Covid-19" />
        <meta property="og:description" content="Visualisating the Covid-19 Information" />
        <meta property="og:image" content="" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default React.memo(Layout);
