import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./build-2011.module.css";

const post = `
  As I write this, I'm sat at the desk in my bedroom looking out over our garden and the backs of houses at various angles to our own. A few brown leaves hold on precariously as a tree sways in the wind. It's the Sunday two weeks after Build 2011 and just like every year, it's changed my way of thinking. More than that though, I honestly don't think I'll ever be able to forget this year's Build.

  I tried to collect my thoughts on all of the talks throughout the day, but I ended up wanting to focus on the two that really struck a cord with me.

  ## Josh Brewer

  ![Josh Brewer](/images/josh.jpg)

  All too often when seeing designers talk, their subject matter deals with recent projects that they've completed. The majority of the time, these projects are either small, content driven sites or self-created apps. It was refreshing to hear a talk by someone who's work is seen by over 400 million different people. Josh's talk was about the emotion that people who encounter our designs impart on it. He used the example of [Capture](http://itunes.apple.com/gb/app//id442879059?mt=8) as an app that doesn't get in the way and lets him record his daughter.

  The emotive connection of the products we design, both physical and virtual, is something I've became a bit fascinated with in recent months. After Josh's talk, I felt definitely felt a renewal of enthusiasum for our craft. I can only hope I'll be so lucky to make something that somebody eventually makes an emotional connection with.

  ## Wilson Miner

  ![Wilson Miner](/images/wilson.jpg)

  Two weeks have passed since Build and Wilson's talk is still one of the most amazing things I have ever seen. Touching on multiple subjects it spanned the history of the 20th century, his deeply personal tale of his relationship with his father, from Wilson's birth until his father's death and our relationship with the world around us.

  The great thing about Build is that [Andy](http://twiiter.com/goodonpaper) (either by way of an accident or through direction) allowed all of the talks to cover a similar theme and because of this, Wilson's talk also touched upon our relationship with designed products. He spoke of his Dad's love of classic cars and when, his College Professor Father was unable to provide for the family, he sold most of his collection, keeping only one. This one, was the one that Wilson had asked him to keep. Wilson drove this car on his prom night. He had, and probably still has, a deep emotional connection to that car. But it was still just a car.

  Wilson's talk was interspersed by various pieces of inspiring footage and backdrops to his narration. Scenes of the International Space Station orbiting Earth stuck out for me, but the one that really hit home, was the recording of [Steve Jobs](http://www.youtube.com/watch?v=ob_GX50Za6c) which ended with the line - "The computer is a bicycle for the mind."

  In the past 50 or so years, humanity has done so much with computers. What we do, isn't just pretty pictures on a screen. We can help change and morph society with our work and we must be sure to guide humanity in the right direction.

  Through the 20th century, as populations exploded and cities grew, they were formed around traveling in a car. A car transformed epic distances into a drive of a few hours. Wilson predicted that with cars driving the progress of cities in the 20th century, screens will be the driving force of the 21st and we, as the creators of what will appear on the screens, need to act as the arbiters and vanguards of our shifting landscape.

  I was deeply engrossed by Wilson Miner. At one point I noticed that myself and over half of the row I was in were sitting forward, completely enthralled by what we were seeing.

  When he was finished, he paused for a few seconds and thanked the audience. Suddenly, the room erupted in applause and every person in the room gave him a standing ovation. It was an incredible thing to see, and even more incredible to be part of it. At the afterparty, I overheard 2 seperate conversation on how this was our Woodstock, or our 2004 Coachella.

  I honestly don't see how designers and developers who were at Build this year couldn't say it was one of the most eye opening moments in their career.

  _"When we build, let us build forever"_
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#181819";
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          styles={styles.header}
          previous="/teaching-the-web"
          next="/the-entire-history-of-everyone"
        />

        <article className={styles.content}>
          <header>
            <h1 className={styles.title}>Build 2011</h1>
          </header>
          <section className={styles.main}>
            <ReactMarkdown source={post} />
            <cite>
              <ReactMarkdown
                source={`All photos from [Filly C](http://twitter.com/fillyc)`}
              />
            </cite>
          </section>
        </article>
      </div>
    );
  }
}
