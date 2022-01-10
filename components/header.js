import Link from "next/link";
import PropTypes from "prop-types";

const Header = ({ borderColor, textColor }) => {
  borderColor = borderColor || "border-black";
  textColor = textColor || "text-black";

  return (
    <header
      className={`font-mono mx-auto w-10/12 md:w-9/12 pt-4 md:px-0 mb-10`}
    >
      <nav>
        <ul className={`list-none flex justify-between md:justify-start`}>
          <li className="">
            <h1 className=" text-xl md:text-3xl">
              <Link href="/">
                <a className={`${borderColor} border-b-2 ${textColor}`}>
                  Tommy Palmer
                </a>
              </Link>
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};
