import React from "react";
import Head from "next/head";
import Header from "../components/header";

function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Tommy Palmer | A Software Engineer living in London</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="container mx-auto w-5/6">
        <p className="text-6xl mt-32 bg-blue-500 text-gray-200 p-4 rounded-lg">
          I&lsquo;m Tommy Palmer, a Software Engineer living in London and
          working at{" "}
          <a
            href="https://deliveroo.co.uk/"
            className="border-b-4 border-solid border-gray-200"
          >
            Deliveroo
          </a>
          .
        </p>
      </section>
    </React.Fragment>
  );
}

export default Index;
