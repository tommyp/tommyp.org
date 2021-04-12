import Head from "next/head";
import PropTypes from "prop-types";

const AppHead = ({ title, ogImage }) => {
  title = title ? `${title} | Tommy Palmer` : 'Tommy Palmer | A Software Engineer living in London'

  const ogImageUrl = process.env.NODE_ENV == 'production' ? `https://tommyp.org/images/og/${ogImage}` : `/images/og/${ogImage}`

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      {ogImage &&
        <meta property="og:image" content={ogImageUrl} />
      }
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

AppHead.propTypes = {
  title: PropTypes.string,
}

export default AppHead;
