import React from "react";
import Head from "next/head";
import Header from "../components/header";

function FourLessonsFromFourYears() {
  return (
    <React.Fragment>
      <Head>
        <title>Tommy Palmer | A Software Engineer living in London</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </React.Fragment>
  );
}

export default FourLessonsFromFourYears;
