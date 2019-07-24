import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./the-entire-history-of-everyone.module.css";

const post = `
  This week, Facebook announced that it plans to IPO at $5 billion. If you log into Facebook every month, this means you (and your data) is worth about $5.

  In December, Channel 4 showed the Charlie Brooker creation Black Mirror. If you haven't seen it then go and watch it and come back to this. It's some of the best television that the UK has made in a long time, but what I really want to talk about, is the third and final episode.

  Similarly titled to this post, The Entire History of You is set in the near future, when almost everyone is fitted with a memory recording device known as a Grain. Surrounding the citizens of this imagined world are screens situated everywhere which imbue the ability to show your memories to anyone (as well as using your memories for a background check when say, getting a flight).

  The reaction on Twitter during the broadcast, whilst being almost 100% positive to the show, was mostly people recoiling in horror at what impact the new Facebook timeline may have on their future lives.

  For what it's worth, I think that the new Facebook timeline is a great piece of design. Documenting the entire life of a good portion of the population is a noble endevour, but the question raised in The Entire History of You still remains, do we really want to never be able to forget?

  Everyone has moments in their life they never want to see again, breakups, arguments, regrets, betrayls, the photos of an old girlfriend kissing someone else, the night out that ended in a friend confessing their fragile state of mind, or seeing that house party which ended in disaster.

  Facebook is actively recording this info, no matter if we don't want it to. If Facebook sticks around for a while, we'll be able to go back and look at photos of nights out, comments about parties and see past relationships that didn't work out.

  Facebook wants all of us to share everything about our lives. But I'm sure that most of you reading this fall into one of two groups - those who update this info but on multiple services (Foursqure, Instagram, Twitter, etc) and those who don't bother to update similar content on other services.

  Don't think that I'm under any illusion though - in my opinion, Facebook is a great tool for keeping in touch with multiple groups of friends on different sides of the planet. They have some very smart and creative people working there, they seem like a great company, they do great design work and they're grabbing some of the best talent in the industry right now (I do wonder how much impact one person can have working there though).

  Facebook wants us to hand over every detail about our lives to make Facebook better. Privacy concerns are one thing, but do we really want to hand over every detail? Do we want to look back over our lives and be reminded of the things we'd rather forget?

  Certainly, creating a service and using Facebook for authentication gives us a good jumping point with the social graph that Facebook has on each of us, but as we seen with the change in Spotify, many do not want better social interaction with software without having a choice in the matter which doesn't boil down to "if you don't like it, don't use it".

  No company should own this info, but with the advent of the web meaning that many of course do.

  Everyone should love Facebook. After all, you want to stay in touch with friends. Many however, don't. It's a strange problem. For me, it comes from the fact that so much of the content involved is noise, something that [Daniel Howells](http://howells.ws/posts/view/51/intrinsic-vs-extrinsic-delineation-of-content-or-my-problem-with-facebook) goes into.

  Does Path solve these problems? Maybe so. But I still think that the ability to say when you're asleep and when you're awake is useless and falls into the same _noise_ area as much of the content on Facebook.

  If Path had a web interface, I might use it more. But I don't think it or Facebook is the final good and useful product that will emerge in this space.

  Do I know what that will look like? Hell no.
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
          previous="/build-2011"
          next="/the-medium-and-the-message"
        />

        <article className={styles.content}>
          <header>
            <div className={styles.earth} />
            <h1 className={styles.title}>The Entire History Of Everyone</h1>
          </header>
          <section className={styles.sagan}>
            <blockquote>
              "All of the books in the world contain no more information than is
              broadcast as video in a single large American city in a single
              year. Not all bits have equal value." – Carl Sagan
            </blockquote>
          </section>
          <section className={styles.main}>
            <ReactMarkdown source={post} />
          </section>
        </article>
      </div>
    );
  }
}
