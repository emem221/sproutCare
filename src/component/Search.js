import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.css";
import { InputBase, Paper, Button, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Spinner from "./Spinner";
import { slice } from "lodash";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

function Search() {
  const [items, setItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(6);
  const initialItems = slice(items, 0, index);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7e1eceeb37mshb9ca65c61c6b794p1b4ea6jsnfedcebb2e160",
      "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://house-plants2.p.rapidapi.com/all", options)
      .then((response) => response.json())
      .then((response) => setItems(response))
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(items);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(items);
    }
  };

  const loadMore = () => {
    setIndex(index + 6);
    console.log(index);
    if (index >= items.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Link to="/">
          <img src="logo.png" alt="" style={{ width: "150px" }} />
        </Link>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <h1 className={styles.h1Text}>Search for a Plant</h1>
          <Grid xs={12} md={10} className={styles.gText}>
            <p className={styles.pText}>
              Our database contains care instructions for over 200 of the most
              common houseplants, so you know how to give your plant the optimal
              care it deserves.
            </p>
            <p className={styles.pText}>
              Simply search either by scientific name or by common name, and if
              we have care info for that plant we’ll share all of our knowledge
              with you.
            </p>
          </Grid>

          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="40px"
          >
            <Paper
              component="form"
              elevation="0"
              variant="outlined"
              sx={{
                p: "4px 8px",
                display: "flex",
                alignItems: "center",
                width: 300,
                borderRadius: "10px",
                backgroundColor: "#32502E",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="search Plant"
                inputProps={{ "aria-label": "search Plant" }}
                onChange={(e) => searchItems(e.target.value)}
              />
              <IconButton
                type="button"
                sx={{ p: "10px", color: "white" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Spinner />

      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={styles.container}
        >
          {searchInput.length > 1
            ? filteredResults.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        maxWidth: 500,
                        ":hover": {
                          boxShadow: 20,
                        },
                      }}
                      key={item.id}
                      details={item}
                      className={styles.card_item}
                    >
                      <CardMedia
                        sx={{ height: 300 }}
                        image={item.Img}
                        alt={item.name}
                      />
                      <CardContent>
                        <Typography>
                          <strong>Plant Family:</strong> {item.Family}
                        </Typography>
                        <Typography>
                          <strong>Bearing:</strong> {item.Bearing}
                        </Typography>
                        <Typography>
                          <strong>Appeal:</strong> {item.Appeal}
                        </Typography>
                        <Typography>
                          <strong>Climate:</strong> {item.Climat}
                        </Typography>
                        <Typography>
                          <strong>Availability:</strong> {item.Avaibility}
                        </Typography>
                        <Typography>
                          <strong>Pruning:</strong>
                          {item.Pruning}
                        </Typography>
                        <Typography>
                          <strong>Watering:</strong> {item.Watering}
                        </Typography>
                        <Typography>
                          <strong>Use:</strong> {item.Use[0]}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            : initialItems.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        maxWidth: 500,
                        ":hover": {
                          boxShadow: 20,
                        },
                      }}
                      key={item.id}
                      details={item}
                      className={styles.card_item}
                    >
                      <CardMedia
                        sx={{ height: 300 }}
                        image={item.Img}
                        alt={item.name}
                      />
                      <CardContent>
                        <Typography>
                          <strong>Plant Family:</strong> {item.Family}
                        </Typography>
                        <Typography>
                          <strong>Bearing:</strong> {item.Bearing}
                        </Typography>
                        <Typography>
                          <strong>Appeal:</strong> {item.Appeal}
                        </Typography>
                        <Typography>
                          <strong>Climate:</strong> {item.Climat}
                        </Typography>
                        <Typography>
                          <strong>Availability:</strong> {item.Avaibility}
                        </Typography>
                        <Typography>
                          <strong>Pruning:</strong>
                          {item.Pruning}
                        </Typography>
                        <Typography>
                          <strong>Watering:</strong> {item.Watering}
                        </Typography>
                        <Typography>
                          <strong>Use:</strong> {item.Use[0]}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
        </Grid>
        <Grid>
          {isCompleted ? (
            <Button
              sx={{
                color: "white",
                backgroundColor: "#32502E",
                "&:hover": { backgroundColor: "#406343" },
                marginLeft: "35%",
                marginTop: "20",
              }}
              variant="contained"
              onClick={loadMore}
              type="button"
              className="btn btn-danger disabled"
            >
              That's It
            </Button>
          ) : (
            <Button
              sx={{
                color: "white",
                backgroundColor: "#32502E",
                "&:hover": { backgroundColor: "#406343" },
                marginLeft: "35%",
                marginTop: "20",
              }}
              variant="contained"
              onClick={loadMore}
              type="button"
            >
              Load More
            </Button>
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Search;
