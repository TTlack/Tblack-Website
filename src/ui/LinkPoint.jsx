import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkPoint(props) {
  return <Link to={props.to}>{props.children}</Link>;
}

LinkPoint.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkPoint;
