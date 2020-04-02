import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <header className="font-header mx-auto w-5/6 sm:w-full border-b-2 border-solid border-black uppercase pt-4 pb-2 pl-3 pr-3">
        <nav className="container mx-auto">
          <ul>
            <li className="text-xl inline mr-12">
              <h1 className="inline">
                <Link href="/">
                  <a>Tommy Palmer</a>
                </Link>
              </h1>
            </li>
            <li className="text-xl inline mr-12">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-xl inline mr-12">
              <Link href="/work">
                <a>Work</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
