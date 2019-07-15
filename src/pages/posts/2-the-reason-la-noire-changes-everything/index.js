import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./styles.module.css";

export default class extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles.header} />
        <div className="cole" />
        <article className={styles.content}>
          <h1 className={styles.title}>
            The Reason
            <span>LA Noire</span>
            Changes Everything
          </h1>
          <section className={styles.main}>
            <ReactMarkdown
              source="
              Over the past few weeks, I've been playing through the latest title from Rockstar Games, L.A. Noire. It's an adventure game interspersed with some driving and shooting sections, but the real reason to play it is the characters.

              Set in post-war Los Angelas, L.A. Noire is a detective story. You play as Cole Phelps, a veteran of the US Pacific campaign. A level-headed and intelligent man who just happens to work with some racist, bigoted, homophobic and sexist colleagues. Playing L.A. Noire has to be one of the most amazing experiences for anyone involved in interaction design, be that making games, web apps or software. The game makes use of facial capture software to give an accurate representation of the characters emotions, it's pretty powerful stuff.

              In order to put this tale in some context, I need to describe the case - an abandoned car with blood covering a large portion of the interior is discovered and our hero, Cole Phelps, is sent to the scene. After combing it for evidence he finds a clue leading us to the residence of Mr & Mrs Black and a receipt bought for a live pig by a third party, a Mr Frank Morgan. Now here, we meet Mrs Margaret Black, a nice lady who seems genuinely concerned about the fact that her husband has been missing since the night before. After having a look around the home it becomes apparent that their marriage isn't going too well, with them sleeping in separate beds and Mr Morgan having a relationship with a woman in Chicago where he frequents on business trips.

              Putting two and two together at this point isn't difficult, Mr Morgan faked his death to get out of leaving his wife. However, every detective needs proof, so I had to question Mrs Morgan. I asked everything I could about her husband and avoided the subject of their marriage. I didn't want to upset her by revealing that her husband was having an affair. It wasn't that I didn't want a negative outcome,or I didn't want to effect some hidden karma score. I genuinely cared about this character. Her actions and mannerisms made me concerned,
              _in real life_, that I was going to upset her.

              I play a lot of games. I had never felt this way before. The closest experience to this was probably in the Mass Effect series but even still, I was nice to the characters because I liked them as a character. In the 2nd game in the series, I liked
              [Garrus](http://masseffect.wikia.com/wiki/Garrus_Vakarian) because of our time in the first game. The Mass Effect series made me like characters because of the gameplay I'd been through with them and they were believable over time.


              The difference is that I had known Mrs Black for minutes. Mass Effect 2 came out in 2007. I'd known Garrus for 4 years. In minutes, Team Bondi had me doing something that other developers have spent years trying to do. The technology that they've created could easily be compared to the jump from 2D to 3D or black and white movies to colour. It's a great leap forward that will no doubt be established as a turning point in our relationship with media."
            />
          </section>
        </article>
      </div>
    );
  }
}
