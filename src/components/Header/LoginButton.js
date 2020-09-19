import React from "react";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import LoginPage from "../../views/LoginPage/LoginPage.js";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function LoginButton(props) {

  function handleClick () {
    //e.preventdefault();
    return (
      <LoginPage />
    );
  }

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/login-page`; 
    history.push(path);
  }


  const classes = useStyles();
  return (
    <Button
          href="/login-page"
          color="transparent"
          target="_blank"
          className={classes.navLink}
          style = {{border: "solid grey",border_radius: "10px"}}
          //onClick= {routeChange}
        >
         Login
        </Button>
  );
}
