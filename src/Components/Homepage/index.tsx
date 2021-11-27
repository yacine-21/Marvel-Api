import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ModelCharacter, ModelData } from "../../Model/modelCharacter";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import env from "react-dotenv";

const Homepage = () => {
  const [dataFromApi, setDataFromApi] = useState<ModelData>();
  const [nameStartsWith, setNameStartsWith] = useState("s");
  let apikey = env.REACT_APP_API_KEY;
  let hash = env.REACT_APP_API_HASH;
  let ts = env.REACT_APP_API_TS;

  let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameStartsWith}&apikey=${apikey}&hash=${hash}&ts=${ts}&orderBy=name`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDataFromApi(data.data.results);
    console.log();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.bloc}>
      {dataFromApi
        ? dataFromApi.map((data: ModelCharacter) => (
            <Card key={data.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={data.name}
                height="140"
                image={data.thumbnail.path + "." + data.thumbnail.extension}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Link to={`/detail/${data.id}`}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          ))
        : ""}
    </div>
  );
};

export default Homepage;
