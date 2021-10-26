import { useState, useEffect, useCallback } from "react";
import {GifData, GifType} from "../types"
import api from "../services/api";


function useFetch(query: string, offset: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<GifType[]>([]);

  const resetList = () => {
    setList([])
  }

  const sendQuery = useCallback(async () => {
    try {
      if(query !== ""){
        setLoading(true);
        setError(false);
        const { data } = await api.get<GifData>(`search?api_key=f4nA7EJOnybwdpv9cnTsCG10bpEKm54g&q=${query}&limit=25&offset=${offset}&rating=g&lang=en`);
        setList(images => [...new Map([...images, ...data.data].map(image => [image["id"], image])).values()]);
        setLoading(false);
      }
      
    } catch (err) {
      setError(true);
    }
  }, [query, offset]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, offset]);

  return { loading, error, list, resetList };
}

export default useFetch;

