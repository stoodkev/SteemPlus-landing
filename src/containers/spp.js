import React, { Component } from "react";
import { Toolbar, Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import * as DataSPP from "../jsons/spp.json";
import * as Formatter from "../utils/formatter";
import CountUp from "react-countup";
import Section from "../containers/sections/section";
import FancySection from "../containers/sections/fancySection";
import * as Const from "../utils/const";
import ContentDescription from "../components/labels/contentDescription";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomButton from "../components/buttons/customButton";
import Parser from "html-react-parser";

const linkStyle = {
  textDecoration: "none",
  color: "#3c4a97",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    textDecoration: "underline !important"
  }
};

const styleWayToEarn = {
  background: Const.BACKGROUND_WAY_SPP,
  padding: "1rem",
  borderRadius: "33px",
  textAlign: "left"
};
const styleCaptionHowToEarn = {
  fontWeight: "bold",
  fontSize: "20px",
  color: Const.COLOR_TITLE_WAY_SPP
};
const styleTitleHowToEarn = {
  fontWeight: "bold",
  color: Const.COLOR_TITLE_WAY_SPP,
  marginBottom: "1rem"
};
const styleFormulaHowToEarn = {
  marginBottom: "1rem",
  color: Const.COLOR_TEXT_WAY_SPP
};
const styleDescHowToEarn = {
  marginBottom: "1rem",
  color: Const.COLOR_TEXT_WAY_SPP
};

const styleIcon = {
  marginRight: "0.5rem",
  height: "1.5rem",
  width: "1.5rem"
};

const styleToolbar = {
  root: {
    paddingLeft: "0px"
  }
};

const styleNumber = {
  fontSize: "3.5rem",
  fontFamily: "Roboto",
  color: Const.COLOR_STATS
};

const styleCircularProgress = {
  root: {
    color: Const.COLOR_STATS
  }
};

const CustomCircularProgress = withStyles(styleCircularProgress)(
  CircularProgress
);

const getCount = count => {
  if (count === 0) {
    return <CustomCircularProgress />;
  } else {
    return (
      <CountUp
        end={count}
        start={0}
        duration={2}
        separator=","
        style={styleNumber}
      />
    );
  }
};

const styleTitleStat = {
  color: "#21496C",
  fontSize: "1.25rem"
};

const CustomToolbar = withStyles(styleToolbar)(Toolbar);

class Spp extends Component {
  constructor() {
    super();
    this.state = {
      spp_holders: 0,
      total_points: 0,
      total_points_day: 0,
      steemplus_sp: 0
    };
  }

  componentDidMount() {
    fetch("https://steem-plus-api-test.herokuapp.com/spp-stats", {
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
    fetch("https://api.steemplus.app/sp/steem-plus", {
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
        this.setState({ steemplus_sp: data.total });
      });
  }

  render() {
    return (
      <div className="Spp">
        <FancySection>
          {DataSPP.stats.items.map((item, i) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={i}>
              {getCount(parseFloat(this.state[`${item.key}`]))}
              <CustomToolbar>
                <img
                  src={`public/img/spp/stats/${item.icon}.svg`}
                  alt={item.key}
                  style={styleIcon}
                />
                <p style={styleTitleStat}>{item.name}</p>
              </CustomToolbar>
            </Grid>
          ))}
        </FancySection>
        <Section
          direction="row"
          title={DataSPP.whatIsSPP.sectionTitle}
          tag={Formatter.tagFromTitle(DataSPP.whatIsSPP.sectionTitle)}
          marginBottom={"0"}
        >
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <ContentDescription
              content={Parser(DataSPP.whatIsSPP.description)}
              align="center"
            />
          </Grid>
        </Section>
        <Section
          title={DataSPP.howToEarn.sectionTitle}
          tag={Formatter.tagFromTitle(DataSPP.howToEarn.sectionTitle)}
        >
          {DataSPP.howToEarn.ways.map((way, i) => (
            <Grid item xs={12} key={i}>
              <div style={styleWayToEarn}>
                <p style={styleCaptionHowToEarn}>{`#${i + 1} : ${
                  way.title
                }`}</p>
                <p style={styleDescHowToEarn}>
                  {Parser(way.description)}
                  <br />
                </p>

                <p style={styleFormulaHowToEarn}>
                  <span style={styleTitleHowToEarn}>Reward : </span>
                  {Parser(way.formula)}
                  <br />
                </p>

                <a
                  href={`https://steemit.com/${way.description_post}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <CustomButton
                    text="Read the article"
                    color1={Const.COLOR_BUTTON}
                    color2="white"
                    marginBottom="1.5rem"
                  />
                </a>
              </div>
            </Grid>
          ))}
        </Section>
      </div>
    );
  }
}

export default Spp;
