import Head from "../components/head";
import Header from "../components/header";
import ExtA from "../components/external_a";
import Link from "next/link";

const posts = [
  {
    name: "Flying with Tailwind",
    path: "/flying-with-tailwind",
    date: "15th April 2021",
  },
  {
    name: "Let's make mad shit",
    path: "/lets-make-mad-shit",
    date: "3rd January 2021",
  },
];

const P = ({ children }) => {
  return <p className="text-l md:text-2xl pt-10">{children}</p>;
};

const Img = ({ url, src }) => {
  return (
    <section className="md:mt-10">
      {url && (
        <a href={url}>
          <img src={src} />
        </a>
      )}
      {!url && <img src={src} />}
    </section>
  );
};

const TextBlock = ({ children }) => {
  return <section className="">{children}</section>;
};

function Index() {
  return (
    <>
      <Head />
      <span id="top"></span>
      <Header />
      <section className="container mx-auto w-full md:w-5/6 lg:pl-16 font-mono lg:flex lg:flex-row-reverse min-h-screen">
        <div className="w-full lg:w-1/3 mt-10 lg:mt-20 ">
          <img
            className="w-32 h-32 md:w-64 md:h-64 rounded-full mx-auto lg:ml-0"
            src="/images/wall.jpg"
          />
        </div>
        <section className="container mx-auto w-10/12 lg:w-2/3 lg:pr-16 font-mono text-xl sm:text-2xl lg:text-4xl mt-8 lg:mt-18">
          <p className="mb-12 text-6xl">👋</p>
          <p className="mb-12 leading-normal">
            I’m Tommy, a{" "}
            <a
              href="#work"
              className="text-transparent bg-gradient-to-r bg-clip-text from-lime-400 to-cyan-400 border-b md:border-b-2 border-cyan-400 hover:text-white hover:bg-clip-border  transition "
            >
              freelance Web Developer
            </a>{" "}
            living in London. I&apos;m currently looking for freelance
            opportunities.
          </p>
          <p className="mb-12 leading-normal">
            Want to chat? -{" "}
            <ExtA href="mailto:hi@tommyp.org">hi@tommyp.org</ExtA>
          </p>
          <ul>
            {posts.map((post, idx) => {
              return (
                <li className="mb-5" key={idx}>
                  <Link href={post.path}>
                    <a className="block leading-normal">
                      <span className="block">{post.name}</span>
                      <small className="block text-sm text-gray-700">
                        {post.date}
                      </small>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
      <span id="work"></span>
      <section className="container mx-auto w-full md:w-5/6 lg:pl-16 font-mono text-xl sm:text-2xl lg:text-4xl">
        <p className="w-full px-16 lg:px-0 lg:w-2/3 mb-12 leading-normal">
          Over the years I&apos;ve worked on big projects and small projects. I
          write all flavours of{" "}
          <span className="text-amber-400">JavaScript</span>,{" "}
          <span className="text-red-600">Ruby</span> and{" "}
          <span className="text-violet-700">Elixir</span>.
        </p>
        <p className="w-full px-16 lg:px-0 lg:w-2/3 mb-12 leading-normal">
          Some of them are 👇
        </p>
      </section>
      <section className="w-screen font-serif bg-black text-white">
        <section className="container w-5/6 mx-auto pt-10 pb-10">
          <h2 className="text-4xl md:text-6xl">
            Conversations with a Shipwreck
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
            <TextBlock>
              <P>
                <ExtA
                  textColor="text-white"
                  textHoverColor="text-white"
                  borderColor="border-white"
                  href="https://en.wikipedia.org/wiki/Vasa_(ship)"
                >
                  The Vasa
                </ExtA>
                , was a Swedish warship who sank on her maiden voyage leaving
                Stockholm harbour.
              </P>
              <P>
                I was approached by photographer Adam Davies to work on building
                a digital exhibition for his collaboration with Joan Wickersham.
              </P>
              <P>
                Being a digital representation of a gallery, typography and
                spacing was extremely important. Adam and I continually worked
                with the specifics and launched it, timing it to feature with{" "}
                <ExtA
                  textColor="text-white"
                  textHoverColor="text-white"
                  borderColor="border-white"
                  href="http://www.amscan.org"
                >
                  The American Scandinavian Foundation
                </ExtA>{" "}
                and{" "}
                <ExtA
                  textColor="text-white"
                  textHoverColor="text-white"
                  borderColor="border-white"
                  href="http://www.scandinaviahouse.org"
                >
                  Scandinavia House
                </ExtA>
                .
              </P>
              <P>
                As the exhibition has finished, you can find the site avilable
                at an{" "}
                <ExtA
                  textColor="text-white"
                  textHoverColor="text-white"
                  borderColor="border-white"
                  href="https://shipwreck.tommyp.org/"
                >
                  archive
                </ExtA>
                .
              </P>
            </TextBlock>
            <Img
              src="/images/work/conversations.png"
              url="https://shipwreck.tommyp.org/"
            />
          </div>
        </section>
      </section>
      <section className="w-screen font-rubik bg-gray-100 text-gray-800">
        <section className="container w-5/6 mx-auto pt-10 pb-10">
          <h2 className="text-4xl md:text-6xl">
            <a href="https://www.govbins.uk">govbins</a>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
            <TextBlock>
              <P>
                My good friend{" "}
                <ExtA
                  href="https://twitter.com/HarryTrimble"
                  borderColor="border-pink-600"
                  borderHoverColor="hover:border-pink-600"
                  textHoverColor="hover:text-pink-600"
                >
                  Harry
                </ExtA>{" "}
                has spent a few years travelling the country, taking photos of
                local council bins and documenting them on{" "}
                <ExtA
                  href="https://govbins.uk"
                  borderColor="border-pink-600"
                  borderHoverColor="hover:border-pink-600"
                  textHoverColor="hover:text-pink-600"
                >
                  govbins.uk
                </ExtA>
                .
              </P>
              <P>
                Mid-March, we were hanging out and he asked me would I help him
                add new features to the site and I happily agreed. As we went
                into Lockdown, Harry started accepting submissions via Instagram
                as travelling for bins didn&apos;t seem so essential.
              </P>
              <P>
                It was originally a static site hosted on Github Pages made
                using Bootstrap with lots of overriding inline styles. It had a
                lot of repetition of markup and with so many high res images,
                the time to load the page was upwards of 15 seconds.
              </P>
              <P>
                I ported the site to Next.js and Tailwind CSS, and used lazy
                loading to decrease the latency of the page. I also added
                sorting and submissions using Netlify forms. After a few weeks,
                the bandwidth used for the images was making the Netlify bill
                pretty huge, so now, on every deploy to master, it runs the
                images through ImageOptim and syncs them to S3, loading them
                from there for visitors. This reduced the bandwidth per month
                from hundreds of GBs during peak periods to hundreds of MBs.
              </P>
            </TextBlock>
            <Img url="https://www.govbins.uk" src="/images/work/govbins.png" />
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
                I like seeing how I can use two APIs to make something fun and I
                wanted to build a side project, but I couldn&apos;t think of any
                ideas. I ended up building a side project idea generator so that
                I don&apos;t have this problem in future.
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
            WHAT THE FUCK SHOULD I DO IN?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
            <TextBlock>
              <P>
                I&apos;d played with{" "}
                <a href="https://elixir-lang.com">Elixir</a> a little bit, but
                decided during an on-call shift to build something over the week
                with it. Being inspired by{" "}
                <a href="https://whatthefuckshouldimakefordinner.com/">
                  another site
                </a>{" "}
                I wanted to build a sweary travel guide.
              </P>
              <P>
                I like building projects that mash APIs together in fun ways and
                I also like eating and drinking my way through cities, so it was
                a really fun side project.
              </P>
            </TextBlock>
            <Img src="/images/work/wtf.png" />
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
                Restaurants to deliver food themselves and decomping the listing
                page to a new Go Application. I even worked on a change that the
                Mayor of London, Sadiq Khan,{" "}
                <ExtA
                  borderColor="border-purple-900"
                  borderHoverColor="hover:border-white"
                  textColor="text-purple-900"
                  textHoverColor="hover:text-white"
                  href="https://twitter.com/sadiqkhan/status/969239476760383488?lang=en"
                >
                  commented on
                </ExtA>
                .
              </P>
            </TextBlock>
            <Img
              url="https://deliveroo.co.uk"
              src="/images/work/deliveroo.png"
            />
          </div>
        </section>
        <section className="w-screen bg-blue-800 text-gray-100">
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
                  Initially, as a part of the Transition project, my team and I
                  were responsible for building Applications to support
                  Government Departments from moving their content from their
                  own, disparate sites, to the unified GOV.UK site. This
                  involved building a publishing application and the public
                  facing application for organisations like the{" "}
                  <ExtA
                    borderColor="border-white"
                    borderHoverColor="hover:border-black"
                    textColor="text-white"
                    textHoverColor="hover:text-black"
                    href="https://www.gov.uk/cma-cases"
                  >
                    Competition and Market Authority
                  </ExtA>
                  .
                </P>

                <P>
                  After that was finished, my team was disbanded into a number
                  of different teams. I ended up joining the team which was
                  working on preparing the site for the upcoming{" "}
                  <ExtA
                    borderColor="border-white"
                    borderHoverColor="hover:border-black"
                    textColor="text-white"
                    textHoverColor="hover:text-black"
                    href="https://en.wikipedia.org/wiki/2015_United_Kingdom_general_election"
                  >
                    General Election
                  </ExtA>
                  . This involved tagging content with the Government it was
                  published under, adding the ability to end a Government and
                  publishing political content under the same{" "}
                  <ExtA
                    borderColor="border-white"
                    borderHoverColor="hover:border-black"
                    textColor="text-white"
                    textHoverColor="hover:text-black"
                    href="https://www.gov.uk/search/news-and-communications"
                  >
                    Application as Government Departments
                  </ExtA>
                  .
                </P>
              </TextBlock>
              <Img url="https://gov.uk" src="/images/work/gov.png" />
            </div>
          </section>
        </section>
      </section>
      <footer className="">
        <div className="w-10/12 mx-auto py-12">
          <a href="#top" className="text-slate-400 text-4xl">
            👆
          </a>
        </div>
      </footer>
    </>
  );
}

export default Index;
