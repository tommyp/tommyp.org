import React from "react";
import PropTypes from 'prop-types';
import Head from "next/head";
import Header from "../components/header";

const P = ({ children }) => {
  return (
    <p className="text-xl pt-10">
      {children}
    </p>
  )
}

P.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Img = ({ url, src }) => {
  return (
    <section className="mt-10">
      <a href={url}>
        <img src={src} />
      </a>
    </section>
  )
}

Img.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

const TextBlock = ({ children }) => {
  return (
    <section className="">
      {children}
    </section>
  )
}

TextBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default class Work extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>About | Tommy Palmer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <section className="w-screen text-green-terminal font-mono bg-black">
          <section className="container w-5/6 mx-auto pt-10 pb-10">
            <h2 className="text-6xl">
              <a href="https://www.apima.sh/up">
                apima.sh/up
              </a>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <TextBlock>
                <P>
                  I like seeing how I can use two APIs to make something fun and I wanted to build a side project, but I couldn&apos;t think of any ideas. I ended up building a side project idea generator so that I don&apos;t have this problem in future.
                </P>
                <P>
                  It was a fun little project that I built over a few days and I took the opportunity to get a domain hack just for it.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <TextBlock>
                <P>
                  I&apos;d played with <a href="https://elixir-lang.com">Elixir</a> a little bit, but decided during an on-call
                shift to build something over the week with it. Being inspired by <a href="https://whatthefuckshouldimakefordinner.com/">another site</a> I wanted to build a sweary travel guide.
              </P>
                <P>
                  I like building projects that mash APIs together in fun ways and I also like eating and drinking my way through cities, so it was a really fun side project.
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
              <a href="https://deliveroo.co.uk">
                Deliveroo
                </a>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <TextBlock>
                <P>
                  When I started at Deliveroo, Engineering was 40 people and the whole codebase was in one Application. Now, Engineering is nearly 10 times as big and although we still have a Rails monolith, there&apos;s a lot of microservices in various languages in different parts of the stack.
                </P>
                <P>
                  I&apos;ve worked on a lot of different projects there, like porting the Menu page from Angular to React, allowing Restaurants to deliver food themselves and decomping the listing page to a new Go Application. I even worked on a change that the Mayor of London, Sadiq Khan, <a className="border-b-2 border-purple-900" href="https://twitter.com/sadiqkhan/status/969239476760383488?lang=en">commented on</a>.
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
                <a href="https://gov.uk">
                  GOV.UK
                </a>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <TextBlock>
                  <P>
                    Shortly after I moved to London I joined the team at the Government Digital Service working on GOV.UK. It was one of the best experiences of my life. I learnt how to work as a Software Engineer and not just write code.
                </P>

                  <P>
                    Initially, as a part of the Transition project, my team and I were responsible for building Applications to support Government Departments from moving their content from their own, disparate sites, to the unified GOV.UK site. This involved building a publishing application and the public facing application for organisations like the <a className="border-b-2 border-white" href="https://www.gov.uk/cma-cases">Competition and Market Authority</a>
                  </P>

                  <P>
                    After that was finished, my team was disbanded into a number of different teams. I ended up joining the team which was working on preparing the site for the upcoming <a className="border-b-2 border-white" href="https://en.wikipedia.org/wiki/2015_United_Kingdom_general_election">General Election</a>. This involved tagging content with the Government it was published under, adding the ability to end a Government and publishing political content under the same <a className="border-b-2 border-white" href="https://www.gov.uk/search/news-and-communications">Application as Government Departments</a>
                  </P>
                </TextBlock>
                <Img
                  url="https://gov.uk"
                  src="/images/work/gov.png"
                />
              </div>
            </section>
          </section>
        </section>
      </React.Fragment >
    );
  }
}
