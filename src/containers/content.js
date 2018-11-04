import React from "react";
import Section from "./sections/section";
import CarouselSection from "./sections/carouselSection";
import FancyCard from "../components/fancyCard";
import MemberPanel from "../components/memberPanel";
import ReviewPanel from "../components/reviews/reviewPanel";
import Description from "../components/form/description";
import Image from "../components/image";
import CustomButton from "../components/buttons/customButton";
import ContentSectionRL from "../components/labels/contentSectionRL";
import WordArt from "../components/wordart";
import { Grid } from "@material-ui/core";
import CustomCarousel from "../components/carousel/customCarousel";
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
          icon={why.icon}
          key={i}
        />
      ))}
    </Section>
    <Section
      title={Data.features.sectionTitle}
      tag={Formatter.tagFromTitle(Data.features.sectionTitle)}
    >
      <WordArt url={"//cdn.wordart.com/json/09lx5f9a154k"} />
      <CustomCarousel
        autoPlay={false}
        selectedItem={activeFeature}
        nbElem={1}
        sizeElement={6}
      >
        {Data.features.data.map((feature, i) => (
          <div key={i} className="my-slide secondary complex">
            <h2>
              {`#${i + 1}/${Data.features.data.length} : ${feature.title}`}
              {feature.platforms.map((p, i) => (
                <img
                  key={i}
                  src={`public/img/platforms/${p}.png`}
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
              href={feature.url === "" ? "#download" : feature.url}
              target={feature.url === "" ? "" : "_blank"}
              rel="noopener noreferrer"
              style={linkStyle}
            >
              {feature.url === "" ? "Download here" : "Read the article"}
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
            <CustomButton
              text={browser.name}
              href={browser.url}
              color1={Const.COLOR_BUTTON}
              color2="white"
              margin={"1rem"}
              key={i}
            />
          ))}
        </Grid>
      </Description>
      <Image src="public/img/steemplus.png" />
    </Section>
    <CarouselSection
      title={Data.screenshots.sectionTitle}
      tag={Formatter.tagFromTitle(Data.screenshots.sectionTitle)}
    >
      <CustomCarousel autoPlay={true} nbElem={1} sizeElement={6}>
        <div>
          <img src="public/img/screenshots/intro.jpg" alt="Intro" />
        </div>
        <div>
          <img src="public/img/screenshots/feedplus.jpg" alt="Feed +" />
        </div>
        <div>
          <img src="public/img/screenshots/ranks.jpg" alt="Ranks" />
        </div>
        <div>
          <img
            src="public/img/screenshots/valueDelegation.jpg"
            alt="Value and Delegations"
          />
        </div>
        <div className="test">
          <img src="public/img/screenshots/shortcuts.jpg" alt="ShortCuts" />
        </div>
      </CustomCarousel>
    </CarouselSection>
    <CarouselSection
      title={Data.reviews.sectionTitle}
      tag={Formatter.tagFromTitle(Data.reviews.sectionTitle)}
    >
      <CustomCarousel
        className="reviews"
        autoPlay={false}
        nbElem={3}
        sizeElement={10}
      >
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
      <Image src="public/img/steemplus.png" />
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
