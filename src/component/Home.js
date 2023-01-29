import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.css";
import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.box}>
        <Link to="/">
          <img src="logo.png" alt="" style={{ width: "150px" }} />
        </Link>

        <Grid
          container
          rowSpacing={1}
          //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.image}
        >
          <Grid item xs={12} md={8}>
            <h1 className={styles.bgText}>Keep your houseplants healthy</h1>
            <p className={styles.introduction}>
              Our database contains care info on over 200 of the most common
              houseplants. Find your plant, save it to your collection, and look
              up care instructions whenever.
            </p>
            <Box textAlign="center">
              <Button
                style={{
                  fontSize: "1.5rem",
                  padding: "15px",
                  marginTop: "40px",
                  backgroundColor: "#406343",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "#ECE7B4",
                  },
                }}
                variant="contained"
                disableElevation
              >
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/search"
                >
                  Search for a Plant
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
