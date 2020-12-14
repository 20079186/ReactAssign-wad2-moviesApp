import React from "react";
import { Link } from "react-router-dom";


const TranslateButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to="/movie/translations">
       
      See Translations
    </Link>
  );
};

export default TranslateButton;
