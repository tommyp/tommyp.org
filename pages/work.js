import React from "react";
import Head from "next/head";
import Header from "../components/header";

export default class Work extends React.Component {
  onLinkHover(_domain) {}

  render() {
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
        <section className="container mx-auto w-5/6">
          <article className="text-6xl mt-32">
            <a
              onMouseEnter={this.onLinkHover("wtf.png")}
              href="https://www.whatthefuckshouldido.in/"
            >
              What the fuck should I do in
            </a>
            <p>
              I'd played with Elixir a little bit, but decided during an on-call
              shift to build something over the week with it. Being inspired by
              another site I wanted to build a sweary travel guide.
            </p>

            <p>
              I like building projects that mash APIs together in fun ways and I
              also like eating and drinking my way through cities, so it was a
              really fun side project.
            </p>
          </article>
        </section>
      </React.Fragment>
    );
  }
}
