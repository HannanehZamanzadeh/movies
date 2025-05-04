import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = useState(0);
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
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setUpdatedMovie(data.results);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <>
      <h1 className="text-white font-extrabold text-4xl mt-10 ml-6">
        Now Playing
      </h1>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {UpdatedMovie.slice(0, 6).map((film: any, index) => (
          <Card
            key={film.id}
            sx={{
              maxWidth: 400,
              marginTop: 5,
              marginLeft: 3,
              backgroundColor: "black",
            }}
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                sx={{
                  width: 100,
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "10px", color: "white" }}
                >
                  {film.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "10px", color: "white" }}
                >
                  {film.release_date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default SelectActionCard;
