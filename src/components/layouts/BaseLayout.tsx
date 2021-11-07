import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";

const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Head>
        <title>Coronavirus Covid-19 Virus Data — Global Data Dashboard</title>
        <meta
          name="description"
          content="Data visualisation of the Covid-19 Pandemic"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Analytics */}
        {/* Favicon */}

        {/* social description */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RealTime Covid-19" />
        <meta
          property="og:description"
          content="Visualisating the Covid-19 Information"
        />
        <meta property="og:image" content="" />
      </Head>

      <main className="container mx-auto px-5 py-12 bg-gray-50 dark:bg-gray-800">
        {children}
      </main>
    </Layout>
  );
};

const Layout = styled.div``;

export default BaseLayout;
