import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography } from "@material-ui/core";
import padre from "../resources/images/elPadre.jpg";

function ElPadre() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid item xs sm md lg={8} xl={8}>
          <Paper
            elevation={12}
            style={{
              marginTop: "5em",
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              padding: "1em",
            }}
          >
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bold", padding: "1em" }}
            >
              The Father
            </Typography>
            <img
              style={{ maxWidth: "80%", paddingBottom: "5em" }}
              src={padre}
              alt="padre"
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ElPadre;
