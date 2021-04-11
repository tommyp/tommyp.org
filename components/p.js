import PropTypes from "prop-types";

const P = (props) => {
  return (
    <p className="text-2xl md:text-3xl lg:text-4xl mt-8 text-gray-900 py-4 px-4 md:px-0 md:leading-normal">
      {props.children}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.any.isRequired,
};

export default P;
