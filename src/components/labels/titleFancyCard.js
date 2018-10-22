import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";

const TitleFancyCard = withStyles({
  root: {
    color: "blue",
    fontSize: "large",
    fontWeight: "bold"
  }
})(Typography);

export default TitleFancyCard;
