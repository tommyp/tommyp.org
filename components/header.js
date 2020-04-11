import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <header className="font-header mx-auto sm:w-full md:w-5/6 pt-4 pb-2 border-black border-b-2 border-solid">
        <nav className="">
          <h1 className="inline sm:text-xl md:text-3xl mr-20">
            <Link href="/">
              <a>Tommy Palmer</a>
            </Link>
          </h1>
          <li className="sm:text-xl md:text-3xl inline mr-20">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="sm:text-xl md:text-3xl inline mr-20">
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
        </nav>
      </header>
    );
  }
}
