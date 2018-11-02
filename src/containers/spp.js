import React, { Component } from "react";
import Image from "../components/image";
import SectionLeftRight from "../containers/sections/sectionLeftRight";
import Description from "../components/form/description";
import * as DataSPP from "../jsons/spp.json";
import * as Formatter from "../utils/formatter";
import CountUp from "react-countup";
import Section from "../containers/sections/section";

class Spp extends Component {
  constructor() {
    super();
    this.state = {
      spp_holders: 0,
      total_points: 0,
      total_points_day: 0,
      total_points_day_exclusive: 0
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
        console.log(data);
        this.setState(data);
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="Spp">
        <SectionLeftRight direction="row" background="white">
          <Description
            title={DataSPP.whatIsSPP.sectionTitle}
            tag={Formatter.tagFromTitle(DataSPP.whatIsSPP.sectionTitle)}
          >
            {DataSPP.whatIsSPP.description}
          </Description>
          <Image
            name="SteemPlus Point Information"
            src="public/img/infogramSPP.png"
            maxHeight="36rem"
          />
        </SectionLeftRight>
        <Section
          title={DataSPP.stats.sectionTitle}
          tag={Formatter.tagFromTitle(DataSPP.stats.sectionTitle)}
        >
          {DataSPP.stats.items.map((item, i) => (
            <div key={i}>
              {item.name}
              <CountUp
                end={parseFloat(this.state[`${item.key}`])}
                start={0}
                duration={5}
                delay={2}
              />
            </div>
          ))}
        </Section>
      </div>
    );
  }
}

export default Spp;
