import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography } from "@material-ui/core";
import ultra from "../resources/images/elUltra.jpeg";

function Puppy1() {
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
              El Ultra
            </Typography>
            <img
              style={{ maxWidth: "40%", paddingBottom: "5em" }}
              src={ultra}
              alt="ultra"
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Puppy1;
