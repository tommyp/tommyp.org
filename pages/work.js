import React from "react";
import PropTypes from "prop-types";
import Head from "../components/head";
import Header from "../components/header";
import ExtA from "../components/external_a";

const P = ({ children }) => {
  return <p className="text-l md:text-2xl pt-10">{children}</p>;
};

P.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Img = ({ url, src }) => {
  return (
    <section className="md:mt-10">
      <a href={url}>
        <img src={src} />
      </a>
    </section>
  );
};

Img.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const TextBlock = ({ children }) => {
  return <section className="">{children}</section>;
};

TextBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default class Work extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head title="Work" />
        <Header />
        <section className="mx-auto w-5/6 xl:w-1/2 md:pl-5 md:pr-5 font-mono mb-10">
          <P>
            I&apos;m a Full Stack Engineer who likes working in multi-disciplinary teams to solve real world problems for users.
          </P>
          <P>
            Wanna chat? -{" "}
            <ExtA href="https://twitter.com/tommypalm">@tommypalm</ExtA> / <ExtA href="mailto:hi@tommyp.org">hi@tommyp.org</ExtA>
          </P>
        </section>
        <section className="w-screen font-rubik bg-gray-100 text-gray-800">
          <section className="container w-5/6 mx-auto pt-10 pb-10">
            <h2 className="text-4xl md:text-6xl">
              <a href="https://www.govbins.uk">govbins</a>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
              <TextBlock>
                <P>
                  My good friend <ExtA href="https://twitter.com/HarryTrimble" borderColor="border-pink-600" borderHoverColor="hover:border-pink-600" textHoverColor="hover:text-pink-600">Harry</ExtA> has spent a few years travelling the country, taking photos of local council bins and documenting them on <ExtA href="https://govbins.uk" borderColor="border-pink-600" borderHoverColor="hover:border-pink-600" textHoverColor="hover:text-pink-600">govbins.uk</ExtA>.
                </P>
                <P>
                  Mid-March, we were hanging out and he asked me would I help him add new features to the site and I happily agreed. As we went into Lockdown, Harry started accepting submissions via Instagram as travelling for bins didn&apos;t seem so essential.
                </P>
                <P>
                  It was originally a static site hosted on Github Pages made using Bootstrap with lots of overriding inline styles. It had a lot of repetition of markup and with so many high res images, the time to load the page was upwards of 15 seconds.
                </P>
                <P>
                  I ported the site to Next.js and Tailwind CSS, and used lazy loading to decrease the latency of the page. I also added sorting and submissions using Netlify forms. After a few weeks, the bandwidth used for the images was making the Netlify bill pretty huge, so now, on every deploy to master, it runs the images through ImageOptim and syncs them to S3, loading them from there for visitors. This reduced the bandwidth per month from hundreds of GBs during peak periods to hundreds of MBs.
                </P>
              </TextBlock>
              <Img
                url="https://www.govbins.uk"
                src="/images/work/govbins.png"
              />
            </div>
          </section>
        </section>
        <section className="w-screen text-green-terminal font-mono bg-black">
          <section className="container w-5/6 mx-auto pt-10 pb-10">
            <h2 className="text-4xl md:text-6xl">
              <a href="https://www.apima.sh/up">apima.sh/up</a>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
              <TextBlock>
                <P>
                  I like seeing how I can use two APIs to make something fun and
                  I wanted to build a side project, but I couldn&apos;t think of
                  any ideas. I ended up building a side project idea generator
                  so that I don&apos;t have this problem in future.
                </P>
                <P>
                  It was a fun little project that I built over a few days and I
                  took the opportunity to get a domain hack just for it.
                </P>
              </TextBlock>
              <Img
                url="https://www.apima.sh/up"
                src="/images/work/apimashup.png"
              />
            </div>
          </section>
        </section>

        <section className="w-screen text-black">
          <section className="container w-5/6 mx-auto pt-10 pb-10">
            <h2 className="text-6xl font-sans font-bold">
              <a href="https://www.whatthefuckshouldido.in">
                WHAT THE FUCK SHOULD I DO IN?
              </a>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
              <TextBlock>
                <P>
                  I&apos;d played with{" "}
                  <a href="https://elixir-lang.com">Elixir</a> a little bit, but
                  decided during an on-call shift to build something over the
                  week with it. Being inspired by{" "}
                  <a href="https://whatthefuckshouldimakefordinner.com/">
                    another site
                  </a>{" "}
                  I wanted to build a sweary travel guide.
                </P>
                <P>
                  I like building projects that mash APIs together in fun ways
                  and I also like eating and drinking my way through cities, so
                  it was a really fun side project.
                </P>
              </TextBlock>
              <Img
                url="https://www.whatthefuckshouldido.in"
                src="/images/work/wtf.png"
              />
            </div>
          </section>
        </section>
        <section className="w-screen bg-teal-400 text-purple-900">
          <section className="container w-5/6 mx-auto pt-10 pb-10">
            <h2 className="text-6xl font-sans font-bold">
              <a href="https://deliveroo.co.uk">Deliveroo</a>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
              <TextBlock>
                <P>
                  When I started at Deliveroo, Engineering was 40 people and the
                  whole codebase was in one Application. Now, Engineering is
                  nearly 10 times as big and although we still have a Rails
                  monolith, there&apos;s a lot of microservices in various
                  languages in different parts of the stack.
                </P>
                <P>
                  I&apos;ve worked on a lot of different projects there, like
                  porting the Menu page from Angular to React, allowing
                  Restaurants to deliver food themselves and decomping the
                  listing page to a new Go Application. I even worked on a
                  change that the Mayor of London, Sadiq Khan,{" "}
                  <a
                    className="border-b-2 border-purple-900"
                    href="https://twitter.com/sadiqkhan/status/969239476760383488?lang=en"
                  >
                    commented on
                  </a>
                  .
                </P>
              </TextBlock>
              <Img
                url="https://deliveroo.co.uk"
                src="/images/work/deliveroo.png"
              />
            </div>
          </section>
          <section className="w-screen bg-blue-700 text-white">
            <section className="container w-5/6 mx-auto pt-10 pb-10">
              <h2 className="text-6xl font-sans font-bold">
                <a href="https://gov.uk">GOV.UK</a>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
                <TextBlock>
                  <P>
                    Shortly after I moved to London I joined the team at the
                    Government Digital Service working on GOV.UK. It was one of
                    the best experiences of my life. I learnt how to work as a
                    Software Engineer and not just write code.
                  </P>

                  <P>
                    Initially, as a part of the Transition project, my team and
                    I were responsible for building Applications to support
                    Government Departments from moving their content from their
                    own, disparate sites, to the unified GOV.UK site. This
                    involved building a publishing application and the public
                    facing application for organisations like the{" "}
                    <a
                      className="border-b-2 border-white"
                      href="https://www.gov.uk/cma-cases"
                    >
                      Competition and Market Authority
                    </a>
                    .
                  </P>

                  <P>
                    After that was finished, my team was disbanded into a number
                    of different teams. I ended up joining the team which was
                    working on preparing the site for the upcoming{" "}
                    <a
                      className="border-b-2 border-white"
                      href="https://en.wikipedia.org/wiki/2015_United_Kingdom_general_election"
                    >
                      General Election
                    </a>
                    . This involved tagging content with the Government it was
                    published under, adding the ability to end a Government and
                    publishing political content under the same{" "}
                    <a
                      className="border-b-2 border-white"
                      href="https://www.gov.uk/search/news-and-communications"
                    >
                      Application as Government Departments
                    </a>
                    .
                  </P>
                </TextBlock>
                <Img url="https://gov.uk" src="/images/work/gov.png" />
              </div>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
