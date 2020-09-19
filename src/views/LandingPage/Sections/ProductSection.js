import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import School from "@material-ui/icons/School";
import People from "@material-ui/icons/People";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>We are gathered for human being</h2>
          <h5 className={classes.description}>
            Our goal is to:
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="student growth"
              description="Creating a platform for the growth and excellence of students in deprived areas and creating educational justice"
              icon={School}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Concerned people"
              description="Raising a concerned, diligent, creative and committed generation of students and other members of local communities"
              icon={People}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Problem solving"
              description="Introducing concerned and elite students to the capacities and challenges of disadvantaged areas in order to take an effective step in solving their problems."
              icon={Build}
              iconColor="gray"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
