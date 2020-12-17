import Head from "next/head";
import PropTypes from "prop-types";

const AppHead = ({title}) => {
  return (
    <Head>
      <title>{title ? `${title} | Tommy Palmer` : 'Tommy Palmer | A Software Engineer living in London'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

AppHead.propTypes = {
  title: PropTypes.string,
}

export default AppHead;
