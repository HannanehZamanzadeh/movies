import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";

function SelectActionCardGenre() {
  const [UpdatedMovie, setUpdatedMovie] = useState([]);
  React.useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE4ZTJiMDZmZTU2MzE2MTRiMGE3MzNhNWNhNDkyNCIsIm5iZiI6MTc0NDgwNDQ5MC44MjQsInN1YiI6IjY3ZmY5YThhODNjNmU1NjdjN2Q5MzdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkdAsYetf6FaLYImBJ1zDAbHeFqXRJD5ZX7DFNYeJrs",
        },
      };
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          options
        );
        const data = await response.json();
        setUpdatedMovie(data.genres);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {UpdatedMovie.map((film: any) => (
          <Card
            key={film.id}
            sx={{
              maxWidth: 400,
              marginTop: 5,
              marginLeft: 3,
              backgroundColor: "black",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "20px", color: "white" }}
              >
                {film.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default SelectActionCardGenre;
