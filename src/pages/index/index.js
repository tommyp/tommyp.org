import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.scss";
import { Helmet } from "react-helmet";

export default class extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <style>@import url("https://use.typekit.net/atp3yvw.css");</style>
        </Helmet>
        <div className={styles.container}>
          <Header />
          <section className={styles.content}>
            <article>
              <section className={styles.index}>
                <ReactMarkdown
                  source={
                    "I'm Tommy Palmer, a Software Engineer living in London and working at [Deliveroo](https://deliveroo.co.uk/)."
                  }
                />

                <ul>
                  <li>
                    <article className={styles.post}>
                      <h1>
                        <Link to="/the-reason-la-noire-changes-everything">
                          The reason LA Noire changes everything
                        </Link>
                      </h1>
                    </article>
                  </li>
                  <li>
                    <article className={styles.post}>
                      <h1>
                        <Link to="/so-you-mightve-heard">
                          So you might've heard...
                        </Link>
                      </h1>
                    </article>
                  </li>
                </ul>
              </section>
            </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
