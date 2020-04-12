import PropTypes from "prop-types";

const ExtA = ({
  href,
  children,
  textColor,
  textHoverColor,
  borderColor,
  borderHoverColor,
}) => {
  return (
    <a
      href={href}
      className={`
        border-b-2
        lg:border-b-4
        border-solid
        ${textColor || "text-gray-900"}
        hover:${textHoverColor || "text-gray-600"}
        ${borderColor || "border-gray-900"}
        hover:${borderHoverColor || "border-gray-600"}
      `}
    >
      {children}
    </a>
  );
};

ExtA.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
  textColor: PropTypes.string,
  textHoverColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderHoverColor: PropTypes.string,
};

export default ExtA;
