import { Avatar } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const ImageReview = withStyles({
  root: {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem"
  }
})(Avatar);

export default ImageReview;
