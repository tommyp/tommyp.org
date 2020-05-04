import PropTypes from "prop-types";

const P = (props) => {
  return (
    <p className="text-2xl md:text-4xl mt-8 text-gray-900 pt-4 pb-4">
      {props.children}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.any.isRequired,
};

export default P;
