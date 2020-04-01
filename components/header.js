import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <header className="w-screen border-b-2 border-solid border-gray-400 pt-2 pb-2">
        <nav className="container mx-auto w-5/6">
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
