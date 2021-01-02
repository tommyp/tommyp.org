import Head from "next/head";
import PropTypes from "prop-types";

const AppHead = ({ title }) => {
  title = title ? `${title} | Tommy Palmer` : 'Tommy Palmer | A Software Engineer living in London'

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

AppHead.propTypes = {
  title: PropTypes.string,
}

export default AppHead;
