import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.scss";
import { Helmet } from "react-helmet";
import parameterize from "parameterize-string";

export default class extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    const posts = [
      "Teaching the Web",
      "The reason LA Noire changes everything",
      "So you might've heard..."
    ];

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
                  {posts.map(post => (
                    <li>
                      <article className={styles.post}>
                        <h1>
                          <Link to={parameterize(post)}>{post}</Link>
                        </h1>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
