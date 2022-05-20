import React from "react";
import { Link } from "react-router-dom";

// 404 Page
const NotFoundPage = () => {
  return (
    <div>
      <h2>Oops! It's a 404</h2>
      <p>
        <Link to={"/"}>Go Home</Link>
      </p>
    </div>
  );
};

export { NotFoundPage as default };
