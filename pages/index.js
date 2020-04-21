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
      <section className="container mx-auto w-5/6 lg:pl-16 font-mono">
        <div className="w-full lg:float-right lg:w-1/3 mt-10 lg:mt-20 ">
          <img
            className="w-32 h-32 md:w-64 md:h-64 rounded-full mx-auto lg:ml-0"
            src="/images/bangface.jpg"
          />
        </div>
        <p className="sm:text-3xl lg:text-4xl mt-8 lg:mt-32 text-black rounded-lg w-full lg:w-2/3 lg:float-left pr-16 float-left text-center lg:text-left">
          I’m Tommy Palmer, a Software Engineer living in London and working at{" "}
          <a
            href="https://deliveroo.co.uk/"
            className="border-b-4 border-solid border-teal-400 text-gray-900 hover:text-teal-400"
          >
            Deliveroo
          </a>
          .
        </p>
        <div className="clearfix" />
      </section>
    </React.Fragment>
  );
}

export default Index;
