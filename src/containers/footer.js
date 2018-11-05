import React from "react";
import * as Const from "../utils/const";

const style = {
  backgroundImage: `url(public/img/footer.png)`,
  backgroundSize: "cover",
  minHeight: "12rem",
  textAlign: "left",
  paddingLeft: "10%"
};

const styleText = {
  bottom: "1rem",
  position: "fixed",
  color: Const.COLOR_TEXT_FOOTER
};

const Footer = () => (
  <div className="footer" style={style}>
    <span style={styleText}>
      © 2018 Steem-Plus, all rights reserved. Powered by Utopian and Adsactly.
    </span>
  </div>
);

export default Footer;
