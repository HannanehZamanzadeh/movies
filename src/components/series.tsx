import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const SeriesList = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const fetchSeries = async () => {
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
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setSeries(data.results);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchSeries();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 4,
        }}
      >
        {series.slice(0, 10).map((series: any) => (
          <Card
            key={series.id}
            sx={{
              maxWidth: 400,
              marginTop: 5,
              marginLeft: 3,
              backgroundColor: "black",
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
              alt={series.title}
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
                sx={{ fontSize: "15px", color: "white" }}
              >
                {series.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
export default SeriesList;
