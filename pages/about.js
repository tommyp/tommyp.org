import Header from "../components/header";
import P from "../components/p";
import ExtA from "../components/external_a";
import Head from "../components/head";

function About() {
  return (
    <>
      <Head title="About" />
      <Header />
      <section className="container font-mono mx-auto w-screen lg:w-4/6 md:w-5/6 py-6 md:py-0">
        <P>
          I&apos;m a Senior Software Engineer at{" "}
          <ExtA
            borderColor="border-green-500"
            borderHoverColor="hover:border-green-500"
            textHoverColor="hover:text-green-500"
            href="https://goodclub.co.uk/"
          >
            Good Club
          </ExtA>{" "}
          in London. I used to work for{" "}
          <ExtA
            borderColor="border-teal-400"
            borderHoverColor="hover:border-teal-400"
            textHoverColor="hover:text-teal-400"
            href="https://deliveroo.co.uk/"
          >
            Deliveroo
          </ExtA>
          {" "}
            and
          {" "}
          <ExtA
            borderColor="border-blue-700"
            borderHoverColor="hover:border-blue-700"
            textHoverColor="hover:text-blue-700"
            href="https://gov.uk"
          >
            GOV.UK
          </ExtA>
          .
        </P>
        <P>I write Ruby, Javascript, Elixir & Go.</P>
        <P>
          Say hello - <ExtA href="https://twitter.com/tommypalm">@tommypalm</ExtA> / <ExtA href="mailto:hi@tommyp.org">hi@tommyp.org</ExtA>
        </P>
      </section>
    </>
  );
}

export default About;
