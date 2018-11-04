import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import * as Const from "../../utils/const";

const ContentDownload = withStyles({
  root: {
    marginTop: "0.75rem",
    color: Const.COLOR_TEXT_DESC,
    fontSize: "1rem",
    textAlign: "left"
  }
})(Typography);

export default ContentDownload;
