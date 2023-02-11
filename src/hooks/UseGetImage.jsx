import axios from "axios";
import React, { useCallback, useState } from "react";

export const useGetImage = () => {
  const [images, setImages] = useState([]);

  const getImage = useCallback((props) => {
    const { word, pages, urls } = props;

    axios.get(`https://api.unsplash.com/search/photos/?query=${word}&per_page=${pages}&urls=${urls}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      .then((res) => {
        setImages(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { images, getImage };
}
