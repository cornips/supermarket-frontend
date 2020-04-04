import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { i18n } from "../../helpers";
import Button, { ButtonGroup } from "./Button";

import chevron from "./assets/chevron.svg";

const OverviewButton = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <ButtonGroup align="left">
      <Button color="secondary" onClick={handleClick} icon={chevron}>
        {i18n("Back to overview")}
      </Button>
    </ButtonGroup>
  );
};

export default OverviewButton;
