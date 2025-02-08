import { Link } from "react-router-dom";

export const CustomLink = ({ text, redirectTo, state, customClass }) => {
  const handleLinkClick = () => {
    const container = document.getElementById("scrollable-container");
    container.scrollTop = 0;
  };

  return (
    <Link to={redirectTo} state={{ ...state }} onClick={handleLinkClick}>
      {text}
    </Link>
  );
};
