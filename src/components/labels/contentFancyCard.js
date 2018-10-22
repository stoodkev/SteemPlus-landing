import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";

const ContentFancyCard = withStyles({
  root: {
    marginTop: "0.75rem",
    color: "darkgrey"
  }
})(Typography);

export default ContentFancyCard;
