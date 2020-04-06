import React from "react";
import Head from "next/head";
import Header from "../../components/header";

const govUk = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About | Tommy Palmer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </React.Fragment>
  );
};

export default govUk;
