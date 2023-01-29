import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styles from "./styles.module.css";
import { Grid } from "@mui/material";

function Spinner() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={styles.clipLoader}>
        {loading ? (
          <BeatLoader
            color={"#32502e"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <h2>See some of your favorite home plants below</h2>
        )}
      </div>
    </Grid>
  );
}

export default Spinner;
