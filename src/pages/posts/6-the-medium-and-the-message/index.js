import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./the-medium-and-the-message.module.css";

const post = `
30 years ago, we were all consumers. We sat on the sofa, watching what we were spoon fed by broadcasters.

Then the VCR happened.

The MPAA cried out in horror. [Jack Valenti](http://en.wikipedia.org/wiki/Jack_Valenti), former head of the MPAA, focused on the "savagery and the ravages of this machine."

The VCR may be outdated now, but the function that it fulfils, to save a video recording for viewing in another location or at another time, is obviously being fulfilled via the Internet.

Similarly, the music industry ran the [Home Taping is Killing Music](http://en.wikipedia.org/wiki/Home_taping_is_killing_music) campaign. It's legality aside, the campaign is so well known that The Pirate Bay's flag flies the Cassette and Crossbones.

The TV industry is nearly in the same camp as the MPAA except that with the advent of the internet many channels have opened up online streaming portals whilst decrying that third parties who engage in similar efforts are illegal.

There's a problem with all this though. It's something that has been a problem with mass consumption of media since it's inception in the 20th century, and very few seemed to have notice it.

## There's no business like show business

Let's focus on the Movie industry first. Making a Hollywood blockbuster costs a lot of money. Avatar cost $237 million. That's more than the annual GDP of some countries.

Movie studios mainly make this back through two methods. Number 1 is getting people to the cinema and number 2 is sales afterwards; DVD, Blu-ray, etc.

This is where our problem comes in.

When cinema was starting out, it was the only way to see moving pictures. It was a primary source of entertainment. You didn't have a screen in your home. Putting your film into a cinema was the only way for it to get seen.

Now we have screens and constant connections to a telecommunications network fast enough to stream a movie and we're still going down to the cinema to buy overpriced shitty popcorn and watered down Coke. I can't be the only one who doesn't see the logic in this.

The idea of 'the cinema experience' aside, putting a film on in a cinema was an answer to a distribution problem. In 1943, to get people to come and see a film, it had to be on a big screen.

## Chewing gum for the mind

Now, we can turn our attention towards Television. Similar to a movie, a TV show can cost quite a lot of money to produce, but most people will admit, that the quality of the content being shown is horrible.

TV has a similar problem with it's distribution model as movies. The infrastructure was never there to handle mass distribution of video content, so instead a few constant streams were broadcast. TV scheduling is a careful science as prime time screenspace can be worth millions.

Now comes TV's dirty little secret - the shows don't have to be good. They only have to be slightly better than what is being shown at the same time.

The concept of showing shows at a certain time is known as [Dayparting](http://en.wikipedia.org/wiki/Dayparting)

When you're watching Snog, Marry, Avoid, it's only because what is on the other channels is even worse.

What does this mean for us? The viewer? It means that we're paying for sub-par content, 95% of the time.

## The Lightbulb

In his book, Understanding Media: The Extensions of Man, Marshall McLuhan discussed the topic that the Message wasn't what was being broadcast, but it was the social effects and the ramifications of _what_ and _how_ was being broadcast.

The _how_ is changing. TV shows and Movies are not always a social occurrence anymore. The distribution method for this content is changing and it will continue to do so.

The written word has already seen this with the Kindle and the iPad, but they are still overshadowed by the physical form. Video is different because the storage medium is not tied directly to the experience of the content. We don't fondly remember the days of VHS, of having to rewind tapes, or of the shitty picture quality.

Maybe one day Film and TV will be released on-demand from day one. Maybe that day [is closer](http://latimesblogs.latimes.com/entertainmentnewsbuzz/2011/11/netflix-to-bring-back-arrested-development.html) than we think.

Freed by the shackles of a schedule, great content can shine by itself instead of being shown at ungodly hours and being cancelled. Small, independent movies will gain traction and show the world that talent doesn't always need six zeroes on a paycheque to get things done.

Maybe it won't save these industries as they exist now, but change them into something that we, as consumers, can support.
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          styles={styles.header}
          previous="/the-entire-history-of-everyone"
          next="/moving-on"
        />

        <article className={styles.content}>
          <header className={styles.title}>
            <h1>The Medium And The Message</h1>
          </header>
          <section className={styles.main}>
            <ReactMarkdown source={post} />
          </section>
        </article>
      </div>
    );
  }
}