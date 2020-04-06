import PropTypes from "prop-types";
import Link from "next/link";

const WorkCard = (props) => {
  return (
    <article className="">
      <Link href={`/work/${props.page}`}>
        <a>
          <img alt={props.title} src={`/images/work/${props.img}/thumb.png`} />
        </a>
      </Link>
    </article>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
  img: PropTypes.string,
};

export default WorkCard;
