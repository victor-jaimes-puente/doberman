import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Informacion from "./Inforamcion";

export default function NavBar() {
  return (
    <Router>
      <AppBar
        elevation={12}
        position="sticky"
        style={{
          textAlign: "center",
          backgroundColor: "black",
          padding: "1em",
        }}
      >
        <Grid container xs={12} style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <Link style={{ color: "black" }} to="/">
              <Typography
                style={{ color: "white", fontWeight: "bold" }}
                variant="h4"
              >
                Dapper Dobermann
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs
            sm
            md
            lg
            xl
            style={{ fontWeight: "bold", fontSize: "1.5em" }}
          >
            <Link style={{ color: "red" }} to="/Informacion">
              Contact Information
            </Link>
          </Grid>
        </Grid>
      </AppBar>
      <Switch>
        <Route path="/Informacion">
          <Informacion />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
