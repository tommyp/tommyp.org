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
      <section className="container font-mono mx-auto w-screen lg:w-4/6 md:w-5/6 pl-6 pr-6 md:pl-0 md:pr-0">
        <P>
          I&apos;m a Senior Software Engineer at{" "}
          <ExtA
            borderColor="border-teal-400"
            borderHoverColor="border-teal-400"
            textHoverColor="text-teal-400"
            href="https://deliveroo.co.uk/"
          >
            Deliveroo
          </ExtA>{" "}
          in London. I used to work for{" "}
          <ExtA
            borderColor="border-blue-700"
            borderHoverColor="border-blue-700"
            textHoverColor="text-blue-700"
            href="https://gov.uk"
          >
            GOV.UK
          </ExtA>
          .
        </P>
        <P>I write Ruby, Javascript, Elixir & Go.</P>
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
          Say hello - <ExtA href="mailto:hi@tommyp.org">hi@tommyp.org</ExtA>
        </P>
      </section>
    </React.Fragment>
  );
}

export default About;
