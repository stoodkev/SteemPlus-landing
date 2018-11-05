import React from "react";
import * as Const from "../../utils/const";

const style = {
  marginTop: "0.75rem",
  color: Const.COLOR_TEXT_DESC,
  fontSize: "1rem",
  textAlign: "left"
};

const ContentDownload = ({ contentDownload }) => (
  <p style={style}>{contentDownload}</p>
);

export default ContentDownload;
