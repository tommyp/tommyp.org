import React from "react";
import Head from "next/head";
import Header from "../components/header";

function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About | Tommy Palmer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="container mx-auto w-5/6">
        <p className="text-6xl mt-32 text-gray-900">
          I&apos;m a Software Engineer living in London who works at{" "}
          <a
            href="https://deliveroo.co.uk/"
            className="border-b-4 border-solid border-gray-400"
          >
            Deliveroo
          </a>
          . I used to work for{" "}
          <a
            href="https://gov.uk"
            className="border-b-4 border-solid border-gray-400"
          >
            GOV.UK
          </a>
          .
        </p>
        <p className="text-6xl mt-8 text-gray-900">
          I write Ruby, Javascript, Elixir and Go.
        </p>
        <p className="text-6xl mt-8 text-gray-900">
          I spend my time{" "}
          <a
            href="https://github.com/tommyp"
            className="border-b-4 border-solid border-gray-400"
          >
            coding
          </a>
          ,{" "}
          <a
            href="https://soundcloud.com/dj-bi-furious"
            className="border-b-4 border-solid border-gray-400"
          >
            playing silly music
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/tommypalm"
            className="border-b-4 border-solid border-gray-400"
          >
            shitposting on Twitter
          </a>
          .
        </p>

        <p className="text-6xl mt-8 text-gray-900">
          Say hello -{" "}
          <a
            href="mailto:hi@tommyp.org"
            className="border-b-4 border-solid border-gray-400"
          >
            hi@tommyp.org
          </a>
        </p>
      </section>
    </React.Fragment>
  );
}

export default About;
