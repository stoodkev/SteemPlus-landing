import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  TextField
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import CustomButton from "../buttons/customButton";
import * as Const from "../../utils/const";

const styleExpansionPanel = {
  root: {
    marginTop: "2rem",
    border: "none",
    boxShadow:
      "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)",
    "&:before": {
      backgroundColor: "white"
    }
  }
};

const styleExpensionSummaryButton = {
  root: {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
    backgroundColor: Const.COLOR_BUTTON,
    color: "white",
    borderRadius: "30px",
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: "500",
    padding: "0px 0px",
    "&:hover": {
      backgroundColor: "white",
      color: Const.COLOR_BUTTON
    },
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  content: {
    justifyContent: "center"
  }
};

const styleLink = {
  textDecoration: "none",
  color: "#3c4a97",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    textDecoration: "underline !important"
  }
};

const styleTable = {
  width: "100%",
  borderCollapse: "collapse"
};
const styleHeader = {
  fontWeight: "600",
  fontFamily: "Roboto",
  fontSize: "1rem",
  borderBottom: "1px solid #21496C"
};

const styleCell = {
  padding: "0.5rem",
  width: "33%"
};

const styleRow = {
  "&:hover": {
    backgroundColor: "#5C9DD5"
  }
};

const styleInput = {
  root: {
    marginBottom: "2rem",
    width: "100%"
  }
};

const CustomInput = withStyles(styleInput)(TextField);
const CustomExtansionPanel = withStyles(styleExpansionPanel)(ExpansionPanel);
const CustomExtansionSummaryButton = withStyles(styleExpensionSummaryButton)(
  ExpansionPanelSummary
);

const getData = (currentPage, data) => {
  let start = currentPage * 10;
  let end = (currentPage + 1) * 10 - 1;
  return data.slice(start, end);
};

class FullRanking extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.unit = props.unit;
    this.keyUsername = props.keyUsername;
    this.keyValue = props.keyValue;
    this.state = {
      expanded: false,
      data: this.data,
      currentPage: 0,
      displayedData: this.data
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  filterTable = event => {
    this.setState({
      displayedData: this.data.filter(item =>
        item[this.keyUsername].includes(event.target.value)
      )
    });
  };

  render() {
    return (
      <Grid item xs={12} sm={12} md={6}>
        <CustomExtansionPanel>
          <CustomExtansionSummaryButton onClick={() => this.handleClick()}>
            {this.state.expanded ? "Hide Full Ranking" : "Show Full Ranking"}
          </CustomExtansionSummaryButton>
          <ExpansionPanelDetails>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CustomInput
                id="standard-name"
                label="Username"
                value={this.state.name}
                onChange={this.filterTable}
              />
              <table style={styleTable}>
                <thead style={styleHeader}>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>{this.unit}</th>
                  </tr>
                </thead>
                <tbody>
                  {getData(
                    this.state.currentPage,
                    this.state.displayedData
                  ).map((row, index) => (
                    <tr key={index} style={styleRow}>
                      <td style={styleCell}>{row.rank}</td>
                      <td style={styleCell}>
                        <a
                          style={styleLink}
                          href={`https://www.steemit.com/@${
                            row[this.keyUsername]
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @{row[this.keyUsername]}
                        </a>
                      </td>
                      <td style={styleCell}>
                        {parseFloat(row[this.keyValue]).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {this.state.currentPage > 0 ? (
                  <CustomButton
                    text="<"
                    color1={Const.COLOR_BUTTON}
                    color2="white"
                    onClick={() =>
                      this.setState({ currentPage: this.state.currentPage - 1 })
                    }
                  />
                ) : (
                  ""
                )}
                {this.state.currentPage < this.state.data.length / 10 - 1 ? (
                  <CustomButton
                    text=">"
                    color1={Const.COLOR_BUTTON}
                    color2="white"
                    onClick={() =>
                      this.setState({ currentPage: this.state.currentPage + 1 })
                    }
                  />
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </CustomExtansionPanel>
      </Grid>
    );
  }
}

export default FullRanking;
