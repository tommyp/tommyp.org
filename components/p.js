import PropTypes from "prop-types";

const P = (props) => {
  return (
    <p className="text-2xl lg:text-4xl mt-8 text-black pt-4 pb-4">
      {props.children}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.any.isRequired,
};

export default P;
