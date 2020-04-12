import React from "react";
import Head from "next/head";
import Header from "../components/header";
import P from "../components/p";
import ExtA from "../components/external_a";

function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About | Tommy Palmer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="container mx-auto w-screen md:w-3/6 pl-6 pr-6 md:pl-0 md:pr-0">
        <P>
          I&apos;m a Senior Software Engineer at{" "}
          <ExtA href="https://deliveroo.co.uk/">Deliveroo</ExtA> in London. I
          used to work for <ExtA href="https://gov.uk">GOV.UK</ExtA>.
        </P>
        <P>I write Ruby, Javascript, Elixir and Go.</P>
        <P>
          I spend my time <ExtA href="https://github.com/tommyp">coding</ExtA>,{" "}
          <ExtA href="https://soundcloud.com/dj-bi-furious">
            playing silly music
          </ExtA>{" "}
          and{" "}
          <ExtA href="https://twitter.com/tommypalm">
            shitposting on Twitter
          </ExtA>
          .
        </P>

        <P>
          Say hello -{" "}
          <ExtA
            href="mailto:hi@tommyp.org"
            className="border-b-4 border-solid border-gray-400"
          >
            hi@tommyp.org
          </ExtA>
        </P>
      </section>
    </React.Fragment>
  );
}

export default About;
