import React from "react";
import * as Const from "../../utils/const";

const style = {
  marginTop: "0.75rem",
  color: Const.COLOR_TEXT_DESC,
  fontSize: "1rem",
  textAlign: "left"
};

const ContentDescription = ({ content }) => <p style={style}>{content}</p>;

export default ContentDescription;
