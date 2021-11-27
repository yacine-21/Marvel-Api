import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModelCharacter } from "../Model/modelCharacter";

const Detail = () => {
  let slug = useParams();

  const [dataDetailFromApi, setDataDetailFromApi] = useState<ModelCharacter>();
  let apikey = "6956fec50bb6b23fe18a2f226947d8fb";
  let hash = "6bf337a30dcd99085ba481c4500c8ff7";
  let ts = 1;
  let url = `https://gateway.marvel.com:443/v1/public/characters/${slug.id}?apikey=${apikey}&hash=${hash}&ts=${ts}`;

  const getDataDetail = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDataDetailFromApi(data.data.results[0]);
  };
  console.log(dataDetailFromApi);

  useEffect(() => {
    getDataDetail();
  }, []);

  return <>{dataDetailFromApi ? dataDetailFromApi?.name : " "}</>;
};

export default Detail;
