import React from "react";
import { Grid } from "@material-ui/core/";

import RankingTopUser from "./rankingTopUser";
import FullRanking from "./fullRanking";

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

const RankingPanel = ({ data }) => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid container direction="row" justify="center" alignItems="center">
      {getTop(data)}
    </Grid>
    <Grid container direction="row" justify="center" alignItems="center">
      <FullRanking data={data} />
    </Grid>
  </Grid>
);

export default RankingPanel;
