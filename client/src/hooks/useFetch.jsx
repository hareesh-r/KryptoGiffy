import { useEffect, useState } from "react";
import { createClient } from 'pexels';
const APIKEY = process.env.REACT_APP_GIPHY_API;

const useFetch = ({ message }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const client = createClient('l7hib8iEBb4gTpfCwbHCi61n0fFoaM6Q3ZxkhouOYKnHPbkIH4T21iMU');
      const query = message;

      client.photos.search({ query, per_page: 1 }).then(photos => {
         setGifUrl(photos.photos[0]?.src?.medium);
        if(!photos.photos[0]) {
          setGifUrl(`https://media.giphy.com/media/cWqMkwMIobCA8/giphy.gif`);
        }
      });
    } catch (error) {
      setGifUrl(`https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284`);
    }
  };

  useEffect(() => {
    if (message) fetchGifs();
  }, [message]);
  
  return gifUrl;
};  

export default useFetch;


// https://faucet.triangleplatform.com/ethereum/goerli

// https://faucet.polygon.technology/

// https://goerli-faucet.pk910.de/

// Ubiquity - lLi7-KRuteM8n3Uv0jwmBstQhYF5uvYwAwGqKqlSI6bND03r