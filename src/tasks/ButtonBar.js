import React from "react";
import "./ButtonBar.css";
import Button from "../shared/Button";
import openIcon from "../shared/assets/img/open.png";
import publicIcon from "../shared/assets/img/public.png";
import estimationIcon from "../shared/assets/img/estimation.png";
import todayIcon from "../shared/assets/img/today.png";
import hightlightIcon from "../shared/assets/img/highlight.png";

const ButtonBar = ({ handleClick, active }) => {
  return (
    <div className="button-bar">
      <div className="button-group">
        <Button
          caption="Open"
          rightMargin="25px"
          picture={openIcon}
          highlighted
          handleClick={handleClick}
          active={active}
        />
        <Button
          caption="Today"
          picture={todayIcon}
          handleClick={handleClick}
          active={active}
        />
        <Button
          caption="Public"
          picture={publicIcon}
          handleClick={handleClick}
          active={active}
        />
        <Button
          caption="Highlight"
          picture={hightlightIcon}
          handleClick={handleClick}
          active={active}
        />
        <Button
          caption="Estimation"
          picture={estimationIcon}
          handleClick={handleClick}
          active={active}
        />
      </div>
      <div className="button-group">
        <Button
          caption="Cancel"
          active={true}
          highlighted
          handleClick={handleClick}
        />
        <Button
          caption={active ? "Add" : "Ok"}
          active={true}
          selected
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ButtonBar;
