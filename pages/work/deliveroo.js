// import React from "react";
import Head from "next/head";
import Header from "../../components/header";

const deliveroo = () => {
  return (
    <div className="bg-teal-400">
      <Head>
        <title>About | Tommy Palmer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header borderColor="border-white" textColor="text-white" />
      <div className="mt-3 container mx-auto">
        <h2 className="text-purple-900 text-7xl font-bold text-center">
          Deliveroo
        </h2>
      </div>
    </div>
  );
};

export default deliveroo;
