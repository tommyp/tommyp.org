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
      {url && (
        <a href={url}>
          <img src={src} />
        </a>
      )}
      {!url && <img src={src} />}
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
            I&apos;m a Full Stack Engineer who likes working in
            multi-disciplinary teams to solve real world problems for users.
          </P>
          <P>
            Wanna chat? -{" "}
            <ExtA href="https://twitter.com/tommypalm">@tommypalm</ExtA> /{" "}
            <ExtA href="mailto:hi@tommyp.org">hi@tommyp.org</ExtA>
          </P>
        </section>
      </React.Fragment>
    );
  }
}
