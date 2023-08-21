import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackButton = ({ url }) => {
  return (
    <Link to={url} classname="btn btn-reverse btn-back">
      <FaArrowAltCircleLeft />
      Back
    </Link>
  );
};

export default BackButton;
