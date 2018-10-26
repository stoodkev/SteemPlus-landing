import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import * as Const from "../../utils/const";

const TitleApp = withStyles({
  root: {
    color: Const.TITLE_COLOR,
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    fontWeight: "bold"
  }
})(Typography);

export default TitleApp;
