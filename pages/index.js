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
      <section className="container mx-auto w-full md:w-5/6 lg:pl-16 font-mono lg:flex lg:flex-row-reverse">
        <div className="w-full lg:w-1/3 mt-10 lg:mt-20 ">
          <img
            className="w-32 h-32 md:w-64 md:h-64 rounded-full mx-auto lg:ml-0"
            src="/images/wall.jpg"
          />
        </div>
        <section className="container mx-auto w-10/12 lg:w-2/3 lg:pr-16 font-mono text-xl sm:text-2xl lg:text-4xl mt-8 lg:mt-24">
          <p className="mb-12">
            I’m Tommy Palmer, a Software Engineer living in London and working at{" "}
            <ExtA
              borderColor="border-green-500"
              borderHoverColor="hover:border-green-500"
              textHoverColor="hover:text-green-500"
              href="https://goodclub.co.uk/"
            >
              Good Club
            </ExtA>.
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
