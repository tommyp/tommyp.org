import React from "react";
import Head from "next/head";
import Header from "../components/header";
import WorkCard from "../components/work_card";

export default class Work extends React.Component {
  render() {
    const workItems = [
      {
        img: "wtf",
        page: "wtf",
        title: "What the fuck should I do in?",
      },
      {
        img: "deliveroo",
        page: "deliveroo",
        title: "Deliveroo",
      },
      {
        img: "gov",
        page: "gov-uk",
        title: "GOV.UK",
      },
    ];

    const workCards = workItems.map((item, index) => {
      return <WorkCard key={index} {...item} />;
    });

    return (
      <React.Fragment>
        <Head>
          <title>About | Tommy Palmer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <section className="container mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-20">
          {workCards}
        </section>
      </React.Fragment>
    );
  }
}
