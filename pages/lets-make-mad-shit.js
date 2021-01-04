import Header from '../components/header'
import Head from "../components/head";
import ExtA from '../components/external_a';

const P = ({ children }) => {
  return (
    <p className="mb-10 ">
      {children}
    </p>
  )
}

const Li = ({ children }) => {
  return (
    <li className="mb-4" style={{ textIndent: '-31px' }}>
      {children}
    </li>
  )
}


const Quote = ({ children }) => {
  return (
    <div className="flex mb-10 gap-3">
      <blockquote className="italic bg-clip-text bg-gradient-to-br from-blue-600 to-red-600 text-transparent">
        {children}
      </blockquote>
    </div>
  )
}

const getCreative = () => {
  return (
    <>
      <Head title="Let's make mad shit" />
      <Header />
      <main className="mt-20">
        <h1 className="mx-auto w-2/3 text-7xl lg:text-10xl font-rubik text-center uppercase font-bold italic transform -rotate-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-red-600 leading-none">
          Let&apos;s make<br />
          mad shit
        </h1>
        <article className="mx-auto w-10/12 lg:w-1/2 xl:w-1/3 mt-20 font-rubik text-2xl">
          <P>
            2020 has shown us that The Internet can be utter shit. It&apos;s awful. It&apos;s full of depressing news, racism and people without medical degrees thinking their opinion is as valid as a Doctor.
          </P>

          <P>
            But 2020 has also shown us that the Internet can be amazing. It kept us together and in touch when we couldn&apos;t do it in real life. It allowed for so much creativity, interaction and communication in this fucking terrible year. So many people out there are making cool things but we don&apos;t see it because we get bogged down hating all of the terrible shit.
          </P>

          <P>
            Remember when people had blogs? And they wrote things? Everyone had their little corner of The Internet. Now we write them in 35 part Twitter threads. Or even worse, Medium articles. You want me to make an account on Medium just so I can read more than 3 articles a month? Oh and if you&apos;re trying to browse them on mobile, I hope you have an iPhone 12 Pro Max because otherwise you&apos;ll not be seeing the article when the page loads.
          </P>

          <P>
            Both of those are terrible ways for us to create and share things.
          </P>

          <P>
            Even with all of that stuff making the Internet worse, people are still making fun and cool things on The Internet.
          </P>

          <P>
            Here are a few things I enjoyed in 2020:
          </P>

          <ul className="mb-10">
            <Li>🍹 <ExtA href="https://poolside.fm/" borderColor="border-red-400" textHoverColor="hover:text-red-400">Poolside</ExtA> - <span className="italic text-transparent bg-gradient-to-r bg-clip-text from-yellow-600 to-red-600">ultra vibey</span> website and app that brings a pool party to your internet communication device.</Li>

            <Li>💻 <ExtA href="https://javascript30.com/">JavaScript30</ExtA> from <ExtA href="https://twitter.com/wesbos">WesBos</ExtA> - I&apos;m pretty good with JavaScript but in an effort to understand it more deeply, I did this free course at the start of Summer. It took me a bit more than 30 days, I found it really enjoyable beginning my day with some coding and Wes&apos; cheesy jokes.</Li>

            <Li>🌊 <ExtA href="https://twitter.com/jongold">Jon&apos;s</ExtA> <ExtA href="https://twitter.com/jongold/status/1294137379020627968?lang=en">experiments</ExtA> with three.js shaders.</Li>

            <Li>🎥 <ExtA href="https://twitter.com/jonty">Jonty&apos;s</ExtA> <ExtA href="http://jonty.co.uk/camjam">camjam</ExtA> - watch a feed from a selection of random TFL CCTV cameras.</Li>

            <Li>🗑 <ExtA href="https://govbins.uk/">govbins</ExtA> - I helped <ExtA href="https://twitter.com/HarryTrimble">Harry</ExtA> rebuild govbins this year, but even with my obvious bias I&apos;ve enjoyed the abusurdity of people taking photos of wheelie bins.</Li>

            <Li>👁 <ExtA href="https://twitter.com/itiseyemoutheye">it is what it is</ExtA> - an injoke taken to an extreme but then used to <ExtA href="https://knowyourmeme.com/memes/eye-mouth-eye-emoji-%F0%9F%91%81%F0%9F%91%84%F0%9F%91%81">raise awareness about systemic racism</ExtA>.</Li>

            <Li>💎 <ExtA href="https://www.sketch.com/blog/2020/10/26/part-of-your-world-why-we-re-proud-to-build-a-truly-native-mac-app">Sketch&apos;s article about native being better</ExtA> - regardless of weather or not you agree with their point, you have to agree that it looks absolutely gorgeous.</Li>

            <Li>🎙 <ExtA href="https://www.joinclubhouse.com/">Clubhouse</ExtA> - drop in audio chat that replaced office shit chatting for me and kept me slightly more sane whilst working from home.</Li>

            <Li>🚗 <ExtA href="https://www.youtube.com/watch?v=9FEO-XKo4cw">Ogmios&apos; School of Zen Motoring</ExtA> - drives through North East London with a soothing narration.</Li>

            <Li>📝 <ExtA href="https://www.ithoughtaboutthatalot.com/">I Thought About A Lot</ExtA> - a series of essays which includes a really touching story <ExtA href="https://www.ithoughtaboutthatalot.com/how-to-dispose-of-a-body">about disposing of a body</ExtA> and <ExtA href="https://www.ithoughtaboutthatalot.com/why-caroline-quentin-isnt-more-famous">thoughts on Caroline Quentin&apos;s career</ExtA>.</Li>

            <Li>🎧 Many Twitch DJ streams from my friends, with a simultanious Zoom call to chat and see familiar faces.</Li>
          </ul>


          <P>A while ago I&apos;d decided to start blogging again in 2021, but I didn&apos;t really know what to write about first. Before my thoughts started to coalesce, I read this <ExtA href="https://colly.com/articles/this-used-to-be-our-playground">great blog post</ExtA> from <ExtA href="https://twitter.com/colly">Simon Collinson</ExtA> and suddenly it all made sense to me.</P>

          <P>He talks about two things I want to call out here:</P>


          <Quote>Admittedly, most company or client work tackles real issues for real people; it’s rarely a sandbox for us to climb into and make mad shit.</Quote>

          <P>
            He&apos;s absolutely right on this point. Even as someone doing more development than design, I have ideas of fun things to build or fun ways to build them that I just don&apos;t get to do. Why don&apos;t I do that? I should do that!
          </P>

          <P>
            And this:
          </P>

          <Quote>
            ...just because <ExtA href="https://gov.uk">GOV.UK</ExtA> does an excellent job of helping you pay your car tax doesn’t mean your own playground should look like it’s been built with a government design system.
          </Quote>

          <P>
            Although we should make sure our own spaces work for everyone we think will use them, if you want to do something weird with your own site, go ahead! Why not? Nobody is going to tell you it impacted conversion or a client didn&apos;t like it.
          </P>

          <P>Like most people in 2020 I also watched The Social Dilemma, though I watched it later than most on 1st January 2021. Something stuck out to me near the end, when <ExtA href="https://twitter.com/baileyelaine">Bailey Richardson</ExtA> described The Internet now as being like a mall and that she remembered when The Internet was full of creativity.</P>

          <P>I want more art galleries and less malls.</P>

          <P>
            We used to have fun on the Internet.<br />
            We used to make <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-red-600">mad shit</span>.<br />
            I&apos;m going to do that again in 2021.
          </P>

          <small className="text-gray-700 text-sm">Published 3rd January 2021</small>
        </article>
      </main>
    </>
  )
}

export default getCreative;


