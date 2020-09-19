/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import LoginButton from "components/Header/LoginButton.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

 function handleClick() {
  //e.preventDefault();
  console.log('this is: login page');
  return (
    <LoginPage />
  );
}

export default function HeaderLinks(props) {


  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="activities"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              education
            </Link>,
            <a
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
              Entrepreneurship 
            </a>,

            <a 
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
            School Building 
            </a>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         Join us
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         Donate
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         About us
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/contact-us"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         Contact us
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <LoginButton/>
      </ListItem>
    </List>
  );
}
