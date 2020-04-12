import PropTypes from "prop-types";

const ExtA = ({ href, children }) => {
  return (
    <a
      href={href}
      className="border-b-2 lg:border-b-4 border-solid border-gray-600 hover:text-gray-600"
    >
      {children}
    </a>
  );
};

ExtA.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ExtA;
