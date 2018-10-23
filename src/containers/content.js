import React from "react";
import Section from "./sections/section";
import SectionLeftRight from "./sections/sectionLeftRight";
import FancyCard from "../components/fancyCard";
import StandardCard from "../components/standardCard";
import MemberPanel from "../components/memberPanel";
import Description from "../components/form/description";
import Image from "../components/image";
import CustomButton from "../components/buttons/customButton";
import CustomButtonIcon from "../components/buttons/customButtonIcon";
import ContentSectionRL from "../components/labels/contentSectionRL";
import { Grid } from "@material-ui/core";
import {
  SupervisedUserCircle,
  FavoriteBorder,
  ImportantDevices,
  SaveAlt
} from "@material-ui/icons";

const Content = () => (
  <div>
    <Section title="Why SteemPlus ?">
      <FancyCard
        title="Easy To Use"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </FancyCard>
      <FancyCard
        title="Easy To Use"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <FavoriteBorder className="fancy-card-icon" fontSize="large" />
      </FancyCard>
      <FancyCard
        title="Easy To Use"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <ImportantDevices className="fancy-card-icon" fontSize="large" />
      </FancyCard>
    </Section>
    <Section title="Awesome Features">
      <StandardCard
        title="test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </StandardCard>
      <StandardCard
        title="test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </StandardCard>
      <StandardCard
        title="test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </StandardCard>
      <StandardCard
        title="test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </StandardCard>
      <StandardCard
        title="test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </StandardCard>
      <StandardCard
        title="test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt leo ut nisl aliquam fringilla. Mauris ultrices justo sit amet velit semper commodo. Donec molestie odio nec felis lobortis, vitae malesuada erat cursus. Duis mollis urna eu metus pulvinar convallis."
      >
        <SupervisedUserCircle className="fancy-card-icon" fontSize="large" />
      </StandardCard>
    </Section>
    <SectionLeftRight direction="row-reverse" gradient={true}>
      <Description title="Where is it available ?">
        <ContentSectionRL textAlign="left">
          {
            "SteemPlus is available on several browser : Chrome, Opera and Firefox"
          }
        </ContentSectionRL>
        <Grid container direction="row">
          <CustomButtonIcon
            text={"Chrome"}
            color="black"
            margin={"1rem"}
            href={
              "https://chrome.google.com/webstore/detail/steemplus/mjbkjgcplmaneajhcbegoffkedeankaj"
            }
          >
            <SaveAlt className="button-icon" fontSize="small" />
          </CustomButtonIcon>
          <CustomButtonIcon
            text={"Opera"}
            color="black"
            margin={"1rem"}
            href={
              "https://github.com/stoodkev/SteemPlus/blob/master/README.md#on-opera"
            }
          >
            <SaveAlt className="button-icon" fontSize="small" />
          </CustomButtonIcon>
          <CustomButtonIcon
            text={"Firefox"}
            color="black"
            margin={"1rem"}
            href={"https://addons.mozilla.org/en-US/firefox/addon/steem-plus/"}
          >
            <SaveAlt className="button-icon" fontSize="small" />
          </CustomButtonIcon>
        </Grid>
      </Description>
      <Image src="../../img/steemplus.png" />
    </SectionLeftRight>
    <Section title="Screenshots">Content</Section>
    <Section title="Our Team">
      <MemberPanel name="Quentin" position="CEO-Founder" />
      <MemberPanel name="Cedric" position="Developer" />
    </Section>
    <SectionLeftRight direction="row" gradient={true}>
      <Description title="Contact Us">
        {"Description de ce qu'il y a de l'autre cote"}
        <CustomButton
          text="Contact Us"
          color="blue"
          marginTop={"1rem"}
          href={"https://discord.gg/GbtHVsx"}
        />
      </Description>
      <Image src="../../img/steemplus.png" />
    </SectionLeftRight>
  </div>
);

export default Content;
