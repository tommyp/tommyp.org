import React from "react";
import Header from "./../../components/header";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import styles from "./info.module.css";

const content = `# Hi, I'm Tommy

I'm a Software Engineer who works at [Deliveroo](https://deliveroo.co.uk/). I used to work for [GDS](https://gds.blog.gov.uk/).

I write Ruby, Go, Elixir and Javascript.

I spend my days [coding](https://github.com/tommyp), [playing electronic music](https://soundcloud.com/dj-bi-furious), [tweeting](http://twitter.com/tommypalm) and [exploring London](http://foursquare.com/tommypalm).

Say hello - [hi@tommyp.org](mailto:hi@tommyp.org).`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tommy Palmer | Info</title>
        </Helmet>
        <Header />

        <section className={styles.info}>
          <section className={styles.avatar}>
            <img
              alt="Me, wearing a necklace of glowsticks."
              src="/images/bangface.jpg"
            />
          </section>
          <section className={styles.main}>
            <ReactMarkdown source={content} />
            <p className={styles.credit}>
              Photo taken by <a href="http://twitter.com/abscond">James</a>.
            </p>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
