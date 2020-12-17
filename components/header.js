import Link from "next/link";
import PropTypes from "prop-types";

const Header = ({borderColor, textColor}) => {
  borderColor = borderColor || "border-gray-700"
  textColor = textColor || "text-gray-900"

  return (
    <header
      className={`font-mono mx-auto sm:w-full md:w-5/6 pt-4 pb-2 pl-3 pr-3 ${borderColor} border-b-2 ${textColor} mb-10`}
    >
      <nav>
        <ul className="list-none flex justify-between md:justify-start">
          <li className="md:mr-20">
            <h1 className=" text-xl md:text-3xl">
              <Link href="/">
                <a>Tommy Palmer</a>
              </Link>
            </h1>
          </li>
          <li className="text-xl md:text-3xl md:mr-20">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="text-xl md:text-3xl md:mr-20">
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};
