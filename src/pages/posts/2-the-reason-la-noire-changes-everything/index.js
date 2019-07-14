import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './../../../components/header';
import styles from './styles.module.css';

export default class extends React.Component {
  render() {
    <div className={styles.container}>
      <Header styles={styles.header}></Header>
      <article className={styles.content}>
        <h1 className={styles.title}>
          The Reason
          <span>LA Noire</span>
          Changes Everything
        </h1>
        <h2 className={styles.subtitle}>I'm becoming a Rumbler.</h2>
      </article>
    </div>
  }
}
