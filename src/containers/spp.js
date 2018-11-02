import React, { Component } from "react";
import Image from "../components/image";
import Description from "../components/form/description";
import * as DataSPP from "../jsons/spp.json";
import * as Formatter from "../utils/formatter";
import CountUp from "react-countup";
import Section from "../containers/sections/section";
import * as Const from "../utils/const";
import CustomCarousel from "../components/carousel/customCarousel";

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
  textAlign: "left"
};
const styleCaptionHowToEarn = {
  textAlign: "left",
  fontWeight: "bold",
  fontSize: "20px",
  color: Const.TITLE_COLOR
};
const styleTitleHowToEarn = {
  fontWeight: "bold",
  color: Const.TITLE_COLOR,
  marginBottom: "1rem"
};
const styleFormulaHowToEarn = {
  marginBottom: "1rem"
};
const styleDescHowToEarn = {
  marginBottom: "1rem"
};

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
        <Section
          direction="row"
          background="white"
          title={DataSPP.whatIsSPP.sectionTitle}
          tag={Formatter.tagFromTitle(DataSPP.whatIsSPP.sectionTitle)}
        >
          {DataSPP.whatIsSPP.description}
          <CustomCarousel autoPlay={true} nbElem={1} sizeElement={6}>
            {DataSPP.whatIsSPP.howToEarn.map((way, i) => (
              <div
                key={i}
                className="my-slide secondary complex slide-text"
                style={styleWayToEarn}
              >
                <p style={styleCaptionHowToEarn}>{`#${i + 1}/${
                  DataSPP.whatIsSPP.howToEarn.length
                } : ${way.title}`}</p>
                <div>
                  <h4 style={styleTitleHowToEarn}>
                    How to get it ?<br />
                  </h4>
                  <p style={styleDescHowToEarn}>
                    {way.description}
                    <br />
                  </p>

                  <h4 style={styleTitleHowToEarn}>
                    How much ?<br />
                  </h4>
                  <p style={styleFormulaHowToEarn}>
                    {way.formula}
                    <br />
                  </p>

                  <a
                    href={`https://steemit.com/${way.description_post}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    <label>Read the article</label>
                  </a>
                </div>
              </div>
            ))}
          </CustomCarousel>
          <Image
            name="SteemPlus Point Information"
            src="public/img/infogramSPP.png"
            maxHeight="36rem"
          />
        </Section>
        <Section
          background1={Const.BACKGROUND_SECTION}
          background2={Const.BACKGROUND_SECTION2}
          noSeparator
        >
          <Description
            title={DataSPP.premium.sectionTitle}
            tag={Formatter.tagFromTitle(DataSPP.premium.sectionTitle)}
          >
            {DataSPP.premium.description}
          </Description>
          <Image src="public/img/comingSoon.png" />
        </Section>
        <Section
          title={DataSPP.stats.sectionTitle}
          tag={Formatter.tagFromTitle(DataSPP.stats.sectionTitle)}
        >
          {DataSPP.stats.items.map((item, i) => (
            <div key={i}>
              {item.name}
              <br />
              <CountUp
                end={parseFloat(this.state[`${item.key}`])}
                start={0}
                duration={2}
                delay={2}
                separator=","
              />
            </div>
          ))}
        </Section>
      </div>
    );
  }
}

export default Spp;
