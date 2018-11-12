import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import * as Const from "../../utils/const";

const styleExpansionPanel = {
  root: {
    marginTop: "1rem",
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

const CustomExtansionPanel = withStyles(styleExpansionPanel)(ExpansionPanel);
const CustomExtansionSummaryButton = withStyles(styleExpensionSummaryButton)(
  ExpansionPanelSummary
);

class FullRanking extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = { expanded: false, data: this.data };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    return (
      <CustomExtansionPanel>
        <CustomExtansionSummaryButton onClick={() => this.handleClick()}>
          {this.state.expanded ? "Hide Full Ranking" : "Show Full Ranking"}
        </CustomExtansionSummaryButton>
        <ExpansionPanelDetails>
          <ReactTable
            data={this.state.data}
            defaultFilterMethod={
              (filter, row) => console.log(filter, row)
              //  String(row[filter.id]) === filter.value
            }
            columns={[
              {
                Header: "Name",
                accessor: "name",
                Cell: ({ value }) => (
                  <a
                    style={styleLink}
                    href={`https://www.steemit.com/@${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{value}
                  </a>
                )
              },
              {
                Header: "SPP",
                accessor: "points",
                Cell: ({ value }) => parseFloat(value).toFixed(2)
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </ExpansionPanelDetails>
      </CustomExtansionPanel>
    );
  }
}

export default FullRanking;
