import React from "react";
import Section from "./sections/section";
import SectionLeftRight from "./sections/sectionLeftRight";
import CarouselSection from "./sections/carouselSection";
import FancyCard from "../components/fancyCard";
import MemberPanel from "../components/memberPanel";
import ReviewPanel from "../components/reviews/reviewPanel";
import Description from "../components/form/description";
import Image from "../components/image";
import CustomButton from "../components/buttons/customButton";
import CustomButtonIcon from "../components/buttons/customButtonIcon";
import ContentSectionRL from "../components/labels/contentSectionRL";
import WordArt from "../components/wordart";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomCarousel from "../components/carousel/customCarousel";
import { SupervisedUserCircle, SaveAlt } from "@material-ui/icons";
import * as Data from "../jsons/data.json";
import * as Formatter from "../utils/formatter";
import * as Arrays from "../utils/arrays";
import * as Const from "../utils/const";
import Parser from "html-react-parser";
import { connect } from "react-redux";

const linkStyle = {
  textDecoration: "none",
  color: "#3c4a97",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    textDecoration: "underline !important"
  }
};

const Content = ({ activeFeature }) => (
  <div>
    <Section
      title={Data.whySteemPlus.sectionTitle}
      tag={Formatter.tagFromTitle(Data.whySteemPlus.sectionTitle)}
    >
      {Data.whySteemPlus.data.map((why, i) => (
        <FancyCard
          title={why.title}
          content={Parser(why.content)}
          link={why.link}
          key={i}
        >
          <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
        </FancyCard>
      ))}
    </Section>
    <Section
      title={Data.features.sectionTitle}
      tag={Formatter.tagFromTitle(Data.features.sectionTitle)}
    >
      <WordArt url={"//cdn.wordart.com/json/09lx5f9a154k"} />
      <CustomCarousel
        autoPlay={true}
        showArrows={true}
        axis="horizontal"
        type="presentation-mode"
        selectedItem={activeFeature}
      >
        {Data.features.data.map((feature, i) => (
          <div key={i} className="my-slide secondary complex">
            <h2>
              {`#${i + 1}/${Data.features.data.length} : ${feature.title}`}
              {feature.platforms.map((p, i) => (
                <img
                  key={i}
                  src={`../../img/platforms/${p}.png`}
                  alt={p}
                  style={{
                    height: "2rem",
                    width: "2rem"
                  }}
                />
              ))}
            </h2>
            <h3>{feature.content}</h3>
            <a
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              For more details, visit our blog
            </a>
          </div>
        ))}
      </CustomCarousel>
    </Section>
    <Section
      background1={Const.BACKGROUND_SECTION}
      background2={Const.BACKGROUND_SECTION2}
      noSeparator
    >
      <Description
        title={Data.where.sectionTitle}
        tag={Formatter.tagFromTitle(Data.where.sectionTitle)}
      >
        <ContentSectionRL textAlign="left">
          {Parser(Data.where.description)}
        </ContentSectionRL>
        <Grid container direction="row">
          {Data.where.browsers.map((browser, i) => (
            <CustomButtonIcon
              text={browser.name}
              href={browser.url}
              color1="black"
              color2="white"
              margin={"1rem"}
              key={i}
            >
              <SaveAlt className="button-icon" fontSize="small" />
            </CustomButtonIcon>
          ))}
        </Grid>
      </Description>
      <Image src="../../img/steemplus.png" />
    </Section>
    <CarouselSection
      title={Data.screenshots.sectionTitle}
      tag={Formatter.tagFromTitle(Data.screenshots.sectionTitle)}
    >
      <CustomCarousel autoPlay={true} showArrows={false} axis="horizontal">
        <div>
          <img src="../../img/screenshots/intro.jpg" alt="Intro" />
        </div>
        <div>
          <img src="../../img/screenshots/feedplus.jpg" alt="Feed +" />
        </div>
        <div>
          <img src="../../img/screenshots/ranks.jpg" alt="Ranks" />
        </div>
        <div>
          <img
            src="../../img/screenshots/valueDelegation.jpg"
            alt="Value and Delegations"
          />
        </div>
        <div className="test">
          <img src="../../img/screenshots/shortcuts.jpg" alt="ShortCuts" />
        </div>
      </CustomCarousel>
    </CarouselSection>
    <CarouselSection
      title={Data.reviews.sectionTitle}
      tag={Formatter.tagFromTitle(Data.reviews.sectionTitle)}
    >
      <CustomCarousel type="reviews" autoPlay={true}>
        {Arrays.shuffle(Data.reviews.data).map((review, i) => (
          <ReviewPanel
            title={review.title}
            review={Parser(review.review)}
            username={review.username}
            key={i}
          />
        ))}
      </CustomCarousel>
    </CarouselSection>
    <Section
      title={Data.members.sectionTitle}
      tag={Formatter.tagFromTitle(Data.members.sectionTitle)}
    >
      {Data.members.data.map((members, i) => (
        <MemberPanel
          name={members.name}
          position={members.position}
          username={members.username}
          key={i}
        />
      ))}
    </Section>
    <Section
      background1={Const.BACKGROUND_SECTION2}
      background2={Const.BACKGROUND_SECTION}
      noSeparator
    >
      <Description
        title={Data.contactUs.sectionTitle}
        tag={Formatter.tagFromTitle(Data.contactUs.sectionTitle)}
      >
        {Parser(Data.contactUs.data.description)}
        <br />
        <CustomButton
          text={Data.contactUs.data.textButton}
          color1={Const.TITLE_COLOR}
          color2="white"
          marginTop={"1rem"}
          href={Data.contactUs.data.url}
        />
      </Description>
      <Image src="../../img/steemplus.png" />
    </Section>
  </div>
);

const mapStateToProps = state => {
  return {
    activeFeature: state.nav.activeFeature
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
