import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core/";
import TitleFancyCard from "../components/labels/titleFancyCard";
import ContentFancyCard from "../components/labels/contentFancyCard";
import "../css/components/fancyCard.css";

const FancyCard = ({ title, content, children }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card
      classes={{
        root: `fancy-card card-${title}`
      }}
    >
      <CardContent>
        {children}
        <TitleFancyCard>{title}</TitleFancyCard>
        <ContentFancyCard gutterBottom>{content}</ContentFancyCard>
      </CardContent>
    </Card>
  </Grid>
);

export default FancyCard;
