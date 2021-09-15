import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed,isPurple,name, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} ${isPurple && "infoBox--purple"}`}>
      <CardContent>
        <h4 className="infoBox_font">{title}</h4>
        {(() => {
        if (name == "red") {
          return (
            <h2 className={`cases_text_red`}>
            {cases}
          </h2>
          )
        } else if (name == "green") {
          return (
            <h2 className={`cases_text_green`}>
            {cases}
          </h2>
          )
        } else {
          return (
            <h2 className={`cases_text_purple`}>
            {cases}
          </h2>
          )
        }
      })()}
        <Typography className="infoBox__total​​​ infoBox_font" color="textSecondary">
        <h5 className="infoBox_font">សរុប  {total} </h5>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
