import { Link } from "react-router-dom";

export const CustomLink = ({ text, redirectTo, state, customClass }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to={redirectTo} state={{ ...state }} onClick={handleLinkClick}>
      {text}
    </Link>
  );
};
