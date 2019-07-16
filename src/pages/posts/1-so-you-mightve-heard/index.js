import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./so-you-mightve-heard.module.css";

const post = `
Recently, it become public knowledge that I have donned a lab coat and joined the team at [Rumble Labs]('http://rumblelabs.com') as a Web Developer.

A few weeks ago they announced their switch to Rails with [David Rice]('http://davidjrice.co.uk')
joining the company. After playing with Rails on and off over the final 2 years of University, Dave offered me some part time work just after
[Build 2010]('http://buildconf.com') to help increase my Rails knowledge. It was a fantastic opportunity and helped me get to a more comfortable level with web development in Ruby in order to tackle my final project.


My project was called [Today The World Is]('http://todaytheworldis.com') and was concieved as a different way to look at the news. I knew from the start that I was doing it all in Rails simply because that's what I knew. As I worked on it, it started to become a live infographic fulfilling the same purpose. It got a few thousand hits and I was pretty proud of it. It taught me a lot about Ruby, Rails and Web Development in general. My project got me a 2:1 in my degree and over the the last four years I've learnt a massive amount.


I'm glad to be finished Uni (even if I will miss the Friday lectures with
[Nik and Chris]('http://webstandardistas') of the Standardistas), but I'm
even more glad to be joining a team like Rumble. It's the end of my education and the start of my professional career and I couldn't be happier about where I am.

Until next time.
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#000";
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          styles={styles.header}
          next="/the-reason-la-noire-changes-everything"
        />

        <article className={styles.content}>
          <h1 className={styles.title}>So you might have heard...</h1>
          <h2 className={styles.subtitle}>I'm becoming a Rumbler.</h2>
          <section className={styles.main}>
            <ReactMarkdown source={post} />
          </section>
        </article>
      </div>
    );
  }
}
