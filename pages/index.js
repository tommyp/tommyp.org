import Head from "../components/head";
import Header from "../components/header";
import ExtA from "../components/external_a";
import Link from "next/link";

const posts = [
  {
    name: "Let's make mad shit",
    path: "/lets-make-mad-shit",
    date: "3rd January 2021"
  }
]

function Index() {
  return (
    <>
      <Head />
      <Header />
      <section className="container mx-auto w-5/6 lg:pl-16 font-mono lg:flex lg:flex-row-reverse">
        <div className="w-full lg:w-1/3 mt-10 lg:mt-20 ">
          <img
            className="w-32 h-32 md:w-64 md:h-64 rounded-full mx-auto lg:ml-0"
            src="/images/wall.jpg"
          />
        </div>
        <section className="container mx-auto w-2/3 pr-16 font-mono md:text-4xl mt-8 lg:mt-32">
          <p className="mb-12 hidden lg:block">
            I’m Tommy Palmer, a Software Engineer living in London and working at{" "}
            <ExtA
              href="https://deliveroo.co.uk/"
              borderColor="border-teal-400"
              borderHoverColor="hover:border-teal-400"
              textHoverColor="hover:text-teal-400"
            >
              Deliveroo
          </ExtA>
          .
          </p>
          <ul>
            {posts.map((post, idx) => {
              return (
                <li key={idx}>
                  <Link href={post.path}>
                    <a className="block">
                      <span className="block">{post.name}</span>
                      <small className="block -mt-1 text-sm text-gray-700">{post.date}</small></a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    </>
  );
}

export default Index;
