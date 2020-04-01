import Link from "next/link";

function ExtA(props) {
  return (
    <a href={props.href} className="border-b-2 border-solid border-gray-900">
      {props.children}
    </a>
  );
}

export default ExtA;
