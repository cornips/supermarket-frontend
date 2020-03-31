import React from "react";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Naar overzicht
    </button>
  );
};

export default HomeButton;
