import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  constructor(props) {
    super();

    this.state = {
      borderColor: props.borderColor || "border-gray-700",
      textColor: props.textColor || "text-gray-900",
    };
  }
  render() {
    return (
      <header
        className={`font-mono mx-auto sm:w-full md:w-5/6 pt-4 pb-2 pl-3 pr-3 ${this.state.borderColor} border-b-2 ${this.state.textColor} mb-10`}
      >
        <nav>
          <ul className="list-none inline">
            <li className="inline">
              <h1 className="inline text-xl md:text-3xl mr-20">
                <Link href="/">
                  <a>Tommy Palmer</a>
                </Link>
              </h1>
            </li>
            <li className="text-xl md:text-3xl inline mr-20">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-xl md:text-3xl inline">
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

Header.propTypes = {
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};
