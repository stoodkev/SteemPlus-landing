import React from "react";
import * as Const from "../../utils/const";
const getStyle = align => {
  return {
    marginTop: "0.75rem",
    color: Const.COLOR_TEXT_DESC,
    fontSize: "1rem",
    textAlign: align || "left"
  };
};
const style = {
  marginTop: "0.75rem",
  color: Const.COLOR_TEXT_DESC,
  fontSize: "1rem",
  textAlign: "left"
};

const ContentDescription = ({ content, align }) => (
  <p style={getStyle(align)}>{content}</p>
);

export default ContentDescription;
