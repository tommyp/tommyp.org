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
      <section className="container mx-auto w-5/6 font-sans">
        <p className="sm:text-3xl lg:text-4xl mt-32 text-gray-800 rounded-lg w-2/3 float-left pl-16 float-left">
          I’m Tommy Palmer, a Software Engineer living in London and working at{" "}
          <a
            href="https://deliveroo.co.uk/"
            className="border-b-4 border-solid border-teal-400 text-gray-800 hover:text-teal-400"
          >
            Deliveroo
          </a>
          .
        </p>
        <img
          className="float-right w-64 h-64 mr-32 mt-20 rounded-full "
          src="/images/bangface.jpg"
        />
      </section>
    </React.Fragment>
  );
}

export default Index;
