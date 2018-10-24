import React from "react";
import Section from "./sections/section";
import SectionLeftRight from "./sections/sectionLeftRight";
import CarouselSection from "./sections/carouselSection";
import FancyCard from "../components/fancyCard";
import StandardCard from "../components/standardCard";
import MemberPanel from "../components/memberPanel";
import ReviewPanel from "../components/reviews/reviewPanel";
import Description from "../components/form/description";
import Image from "../components/image";
import CustomButton from "../components/buttons/customButton";
import CustomButtonIcon from "../components/buttons/customButtonIcon";
import ContentSectionRL from "../components/labels/contentSectionRL";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomCarousel from "../components/carousel/customCarousel";
import { SupervisedUserCircle, SaveAlt } from "@material-ui/icons";
import * as Data from "../jsons/data.json";

const Content = () => (
  <div>
    <Section title="Why SteemPlus ?">
      {Data.whySteemPlus.map((why, i) => (
        <FancyCard title={why.title} content={why.content} key={i}>
          <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
        </FancyCard>
      ))}
    </Section>
    <Section title="Awesome Features">
      {Data.features.map((feature, i) => (
        <StandardCard title={feature.title} content={feature.content} key={i}>
          <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
        </StandardCard>
      ))}
    </Section>
    <SectionLeftRight direction="row-reverse" gradient={true}>
      <Description title="Where is it available ?">
        <ContentSectionRL textAlign="left">
          {Data.where.description}
        </ContentSectionRL>
        <Grid container direction="row">
          {Data.where.browsers.map((browser, i) => (
            <CustomButtonIcon
              text={browser.name}
              href={browser.url}
              color="black"
              margin={"1rem"}
              key={i}
            >
              <SaveAlt className="button-icon" fontSize="small" />
            </CustomButtonIcon>
          ))}
        </Grid>
      </Description>
      <Image src="../../img/steemplus.png" />
    </SectionLeftRight>
    <CarouselSection title="Screenshots">
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
    <Section title="Reviews">
      {Data.reviews.map((review, i) => (
        <ReviewPanel
          title={review.title}
          review={review.review}
          username={review.username}
          key={i}
        />
      ))}
    </Section>
    <Section title="Our Team">
      {Data.members.map((members, i) => (
        <MemberPanel
          name={members.name}
          position={members.position}
          username={members.username}
          key={i}
        />
      ))}
    </Section>
    <SectionLeftRight direction="row" gradient={true}>
      <Description title="Contact Us">
        {Data.contactUs.description}
        <CustomButton
          text={Data.contactUs.textButton}
          color="blue"
          marginTop={"1rem"}
          href={Data.contactUs.url}
        />
      </Description>
      <Image src="../../img/steemplus.png" />
    </SectionLeftRight>
  </div>
);

export default Content;
