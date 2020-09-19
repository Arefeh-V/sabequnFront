import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LocationOn from "@material-ui/icons/LocationOn";
import Phone from "@material-ui/icons/Phone";
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ContactUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="gray"
        routes={dashboardRoutes}
        brand="sabequn charity group"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
      <div className={classes.container}>
        
        <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
                <h5 style={{marginTop: '200px', color:'black'}}>
                    <Email/><b>Email:</b><br/>jahadi@aut.ac.ir<br/>
                    <br/>
                    <LocationOn/><b>Address:</b><br/>
                    <FiberManualRecordOutlinedIcon fontSize='small' />No. 2 Cultural Building, Amirkabir University of Technology, Hafez St., Tehran, Iran<br/>
                    <FiberManualRecordOutlinedIcon fontSize='small'/>Tehran University, Enghelab St., 16 Azar St., Tehran University Students Club<br/>
                    <br/>
                    <Phone/><b>Phone:</b><br/>64545032 - 64545030<br/>
                </h5>
            </GridItem>
            </GridContainer>
            
      </div>

      {/* <Footer /> */}

    </div>
  );
}
