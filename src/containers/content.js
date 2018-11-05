import React from "react";
import Section from "./sections/section";
import ImageSection from "./sections/imageSection";
import CarouselSection from "./sections/carouselSection";
import FancyCard from "../components/fancyCard";
import MemberPanel from "../components/memberPanel";
import ReviewPanel from "../components/reviews/reviewPanel";
import ContentDownload from "../components/labels/contentDownload";
import CustomButton from "../components/buttons/customButton";
import CustomButtonIcon from "../components/buttons/customButtonIcon";
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

const styleFeatureItem = {
  background: Const.BACKGROUND_FEATURE_COLOR,
  zIndex: 1,
  padding: "1.5rem",
  borderRadius: "33px",
  marginTop: "1.5rem",
  fontFamily: "Roboto, sans-serif",
  color: "white"
};

const styleIconBrowser = {
  width: "3rem",
  height: "3rem",
  marginBottom: "1rem"
};

const styleContactUsText = {
  color: Const.COLOR_TEXT_CONTACT
};

const styleIconPlatform = {
  marginLeft: "0.5rem",
  height: "1.5rem",
  width: "1.5rem"
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
    <ImageSection
      title={Data.features.sectionTitle}
      tag={Formatter.tagFromTitle(Data.features.sectionTitle)}
      src={"bg_features.png"}
      justify={"flex-start"}
    >
      <CustomCarousel
        autoPlay={false}
        background={Const.BACKGROUND_FEATURE_COLOR}
        selectedItem={activeFeature}
        nbElem={1}
        sizeElement={6}
      >
        {Data.features.data.map((feature, i) => (
          <div
            key={i}
            className="my-slide secondary complex"
            style={styleFeatureItem}
          >
            <h2>
              {feature.title}
              {feature.platforms.map((p, i) => (
                <img
                  key={i}
                  src={`public/img/platforms/${p}`}
                  alt={p}
                  style={styleIconPlatform}
                />
              ))}
            </h2>
            <h3>{feature.content}</h3>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={feature.url}
              style={{ textDecoration: "none" }}
            >
              <CustomButton
                text="Read Article"
                color1={Const.TITLE_COLOR}
                color2="white"
              />
            </a>
          </div>
        ))}
      </CustomCarousel>
    </ImageSection>
    <Section
      title={Data.where.sectionTitle}
      tag={Formatter.tagFromTitle(Data.where.sectionTitle)}
    >
      <ContentDownload contentDownload={Parser(Data.where.description)} />
      <Grid container direction="row">
        {Data.where.browsers.map((browser, i) => (
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img
                src={`public/img/browsers/${browser.icon}.svg`}
                alt={browser.name}
                style={styleIconBrowser}
              />
              <CustomButton
                text={browser.name}
                href={browser.url}
                color1={Const.COLOR_BUTTON}
                color2="white"
                margin={"1rem"}
                key={i}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Section>
    <CarouselSection
      title={Data.screenshots.sectionTitle}
      tag={Formatter.tagFromTitle(Data.screenshots.sectionTitle)}
    >
      <CustomCarousel autoPlay={true} nbElem={1} sizeElement={10}>
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
        sizeElement={12}
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
      title={Data.contactUs.sectionTitle}
      tag={Formatter.tagFromTitle(Data.contactUs.sectionTitle)}
      background={Const.BACKGROUND_CONTACT_SECTION}
      padding="2rem"
      direction="column"
      marginBottom="0"
    >
      <p style={styleContactUsText}>
        {Parser(Data.contactUs.data.description)}
      </p>
      <CustomButtonIcon
        text={Data.contactUs.data.textButton}
        color1={Const.TITLE_COLOR}
        color2="white"
        marginTop={"1rem"}
        href={Data.contactUs.data.url}
        icon={Data.contactUs.data.icon}
      />
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
