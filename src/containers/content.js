import React from "react";
import Section from "./section";
import FancyCard from "../components/fancyCard";
import StandardCard from "../components/standardCard";
import MemberPanel from "../components/memberPanel";
import {
  SupervisedUserCircle,
  FavoriteBorder,
  ImportantDevices
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
    <Section title="Screenshots">Content</Section>
    <Section title="Our Team">
      <MemberPanel name="Quentin" position="CEO-Founder" />
      <MemberPanel name="Cedric" position="Developer" />
    </Section>
    <Section title="Contact Us">Content</Section>
  </div>
);

export default Content;
