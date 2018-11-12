import React, { Component } from "react";
import { Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import * as Formatter from "../utils/formatter";
import Section from "../containers/sections/section";
import RankingTopUser from "../components/rankings/rankingTopUser";
import FullRanking from "../components/rankings/fullRanking";
import * as Const from "../utils/const";
import CircularProgress from "@material-ui/core/CircularProgress";

import * as RankingsData from "../jsons/rankings.json";

const getTop = arrayItems => {
  let top = [];
  for (let i = 0; i < 3; i++) {
    if (arrayItems[i] !== undefined) {
      const elem = (
        <RankingTopUser
          position={i + 1}
          username={arrayItems[i].name}
          nbPoints={arrayItems[i].points}
          key={`top-${i + 1}`}
        />
      );
      top.push(elem);
    } else {
      const elem = (
        <RankingTopUser
          position={i + 1}
          username={"steem-plus"}
          nbPoints={"0"}
          key={`top-${i + 1}`}
        />
      );
      top.push(elem);
    }
  }
  return top;
};

const styleCircularProgress = {
  root: {
    color: Const.COLOR_STATS
  }
};

const CustomCircularProgress = withStyles(styleCircularProgress)(
  CircularProgress
);

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      forever: [],
      monthly: [],
      weekly: [],
      delegations: []
    };
  }

  componentDidMount() {
    fetch("https://api.steemplus.app/rankings", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
        mode: "cors"
      }
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState(data);
      });
  }

  render() {
    return (
      <div className="Ranking">
        <Section
          title={RankingsData.weekly.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.weekly.sectionTitle)}
          marginBottom="0px"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {getTop(this.state.weekly)}
            </Grid>
            {this.state.weekly.length === 0 ? (
              <CustomCircularProgress />
            ) : (
              <FullRanking data={this.state.weekly} />
            )}
          </Grid>
        </Section>
        <Section
          title={RankingsData.monthly.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.monthly.sectionTitle)}
          marginBottom="0px"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {getTop(this.state.monthly)}
            </Grid>
            {this.state.monthly.length === 0 ? (
              <CustomCircularProgress />
            ) : (
              <FullRanking data={this.state.monthly} />
            )}
          </Grid>
        </Section>
        <Section
          title={RankingsData.forever.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.forever.sectionTitle)}
          marginBottom="0px"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {getTop(this.state.forever)}
            </Grid>
            {this.state.forever.length === 0 ? (
              <CustomCircularProgress />
            ) : (
              <FullRanking data={this.state.forever} />
            )}
          </Grid>
        </Section>
        <Section
          title={RankingsData.delegations.sectionTitle}
          tag={Formatter.tagFromTitle(RankingsData.delegations.sectionTitle)}
          marginBottom="0px"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {getTop(this.state.delegations)}
            </Grid>
            {this.state.delegations.length === 0 ? (
              <CustomCircularProgress />
            ) : (
              <FullRanking data={this.state.delegations} />
            )}
          </Grid>
        </Section>
      </div>
    );
  }
}

export default Ranking;
