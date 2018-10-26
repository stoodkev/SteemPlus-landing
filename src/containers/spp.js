import React, { Component } from "react";
import Image from "../components/image";
import SectionLeftRight from "../containers/sections/sectionLeftRight";
import Description from "../components/form/description";
import * as DataSPP from "../jsons/spp.json";
import * as Formatter from "../utils/formatter";
import CountUp from "react-countup";

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
    fetch("http://steem-plus-api-test.herokuapp.com/spp-stats", {
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
            src="../../img/infogramSPP.png"
            maxHeight="36rem"
          />
        </SectionLeftRight>
        <div>
          SPP Holders{" "}
          <CountUp
            end={parseFloat(this.state.spp_holders)}
            start={0}
            duration={5}
            delay={2}
          />
        </div>
        <div>
          Total points{" "}
          <CountUp
            end={parseFloat(this.state.total_points)}
            start={0}
            duration={5}
            delay={2}
            redraw
          />
        </div>
        <div>
          Total points day{" "}
          <CountUp
            end={parseFloat(this.state.total_points_day)}
            start={0}
            duration={5}
            delay={2}
          />
        </div>
        <div>
          Total points day exclusive{" "}
          <CountUp
            end={parseFloat(this.state.total_points_day_exclusive)}
            start={0}
            duration={5}
            delay={2}
          />
          {}
        </div>
      </div>
    );
  }
}

export default Spp;
