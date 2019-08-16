import React from "react";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";
import Header from "./../../../components/header";
import styles from "./moving-on.module.css";

const post = `
  At the end of April, I'll be making the biggest change to my life so far and moving from my hometown of Belfast, to London. At the same time, I'll be leaving [Rumble Labs](http://rumblelabs.com).

  I've spent the last two years working in Rumble, learning new things every day and tackling new challenges. It's been the best job I've ever had and I'm sad to be leaving, but at the same time, I'm looking forward to a change of scenery and the new experiences and challenges that come with a new job.

  In equal measures, I'm both excited and nervous, but moving away from Belfast is something I've been thinking of doing for a while. When I look back at my life, this could be the best decision or the biggest fuck up I've ever made. But I won't know unless I do it.

  Who knows, maybe I'll be back.
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tommy Palmer | Moving On</title>
        </Helmet>
        <div className={styles.container}>
          <Header
            styles={styles.header}
            previous="/the-medium-and-the-message"
            next="/junior-developer"
          />

          <article className={styles.content}>
            <header className={styles.title}>
              <div className={styles.circle}>
                <div className={styles.inner} />
              </div>
              <h1>Moving On</h1>
            </header>
            <section className={styles.main}>
              <ReactMarkdown source={post} />
            </section>
          </article>
        </div>
      </React.Fragment>
    );
  }
}
