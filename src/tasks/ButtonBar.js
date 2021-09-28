import React from "react";
import "./ButtonBar.css";
import Button from "../shared/Button";
import openIcon from "../shared/assets/img/open.png";
import publicIcon from "../shared/assets/img/public.png";
import estimationIcon from "../shared/assets/img/estimation.png";
import todayIcon from "../shared/assets/img/today.png";
import hightlightIcon from "../shared/assets/img/highlight.png";

const ButtonBar = ({ handleClick }) => {
  return (
    <div className="button-bar">
      <div className="button-group">
        <Button
          caption="Open"
          rightMargin="25px"
          picture={openIcon}
          highlighted
          handleClick={handleClick}
        />
        <Button caption="Today" picture={todayIcon} handleClick={handleClick} />
        <Button
          caption="Public"
          picture={publicIcon}
          handleClick={handleClick}
        />
        <Button
          caption="Highlight"
          picture={hightlightIcon}
          handleClick={handleClick}
        />
        <Button
          caption="Estimation"
          picture={estimationIcon}
          handleClick={handleClick}
        />
      </div>
      <div className="button-group">
        <Button
          caption="Cancel"
          active="active"
          highlighted
          handleClick={handleClick}
        />
        <Button caption="Ok" active selected handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ButtonBar;
