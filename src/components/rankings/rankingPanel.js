import React from "react";
import { Grid } from "@material-ui/core/";

import RankingTopUser from "./rankingTopUser";
import FullRanking from "./fullRanking";

const getTop = (arrayItems, unit, keyUsername, keyValue) => {
  let top = [];
  for (let i = 0; i < 3; i++) {
    if (arrayItems[i] !== undefined) {
      const elem = (
        <RankingTopUser
          position={i + 1}
          username={arrayItems[i][keyUsername]}
          nbPoints={arrayItems[i][keyValue]}
          key={`top-${i + 1}`}
          unit={unit}
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
          unit={unit}
        />
      );
      top.push(elem);
    }
  }
  return top;
};

const RankingPanel = ({ data, unit, keyUsername, keyValue }) => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid container direction="row" justify="center" alignItems="center">
      {getTop(data, unit, keyUsername, keyValue)}
    </Grid>
    <Grid container direction="row" justify="center" alignItems="center">
      <FullRanking
        data={data}
        unit={unit}
        keyUsername={keyUsername}
        keyValue={keyValue}
      />
    </Grid>
  </Grid>
);

export default RankingPanel;
