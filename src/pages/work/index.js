import React from "react";
import Header from "./../../components/header";
import ReactMarkdown from "react-markdown";
import styles from "./work.module.css";
import Helmet from "react-helmet";

const content = ``;

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tommy Palmer | Work</title>
        </Helmet>
        <Header />

        <section className={styles.work}>
          <section className={styles.main}>
            <ReactMarkdown source={content} />
          </section>
        </section>
      </React.Fragment>
    );
  }
}
