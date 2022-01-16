import PropTypes from "prop-types";

const ExtA = ({
  href,
  children,
  textColor,
  textHoverColor,
  borderColor,
  borderHoverColor,
  className,
}) => {
  return (
    <a
      href={href}
      className={`
      border-b
        md:border-b-2
        transition
        duration-200
        ease-in-out
        ${textHoverColor || "hover:text-black"}
        ${borderHoverColor || borderColor || "hover:border-black"}
        ${textColor || "text-black"}
        ${borderColor || "border-black"}
        ${className || ""}
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
  className: PropTypes.string,
};

export default ExtA;
